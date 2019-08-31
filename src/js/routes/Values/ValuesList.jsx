import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import IssueActions from '../../actions/IssueActions';
import IssueStore from '../../stores/IssueStore';
import { renderLog } from '../../utils/logging';
import SearchBar from '../../components/Search/SearchBar';
import IssueCard from '../../components/Values/IssueCard';

export default class ValuesList extends Component {
  static propTypes = {
    displayOnlyIssuesNotFollowedByVoter: PropTypes.bool,
    currentIssue: PropTypes.object,
  };

  constructor (props) {
    super(props);
    this.state = {
      allIssues: [],
      searchQuery: '',
      currentIssue: {},
    };

    this.searchFunction = this.searchFunction.bind(this);
    this.clearFunction = this.clearFunction.bind(this);
  }

  componentDidMount () {
    IssueActions.retrieveIssuesToFollow();
    this.issueStoreListener = IssueStore.addListener(this.onIssueStoreChange.bind(this));

    this.setState({ currentIssue: this.props.currentIssue });
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ currentIssue: nextProps.currentIssue });
  }

  shouldComponentUpdate (nextState) {
    if (this.state.currentIssue !== nextState.currentIssue) {
      return true;
    }
    return false;
  }


  componentWillUnmount () {
    this.issueStoreListener.remove();
  }

  onIssueStoreChange () {
    this.setState({
      allIssues: IssueStore.getAllIssues(),
    });
  }

  searchFunction (searchQuery) {
    this.setState({ searchQuery });
  }

  clearFunction () {
    this.searchFunction('');
  }

  render () {
    // console.log('ValuesList render');
    const { allIssues, searchQuery, currentIssue } = this.state;
    renderLog(__filename);
    let issueList = [];
    let issuesNotFollowedByVoterList = [];
    let issuesNotCurrentIssue = [];
    if (allIssues) {
      issueList = allIssues;

      issuesNotCurrentIssue = allIssues.filter(issue => issue.issue_we_vote_id !== currentIssue.issue_we_vote_id);

      issuesNotFollowedByVoterList = issuesNotCurrentIssue.filter(issue => issue.is_issue_followed === false);
    }

    console.log('All issues:', issuesNotFollowedByVoterList);

    if (searchQuery.length > 0) {
      const searchQueryLowercase = searchQuery.toLowerCase();
      issueList = _.filter(issueList,
        oneIssue => oneIssue.issue_name.toLowerCase().includes(searchQueryLowercase) ||
            oneIssue.issue_description.toLowerCase().includes(searchQueryLowercase));
    }

    let issueListForDisplay = issueList.map(issue => (
      <div
        className="col col-12 col-md-6 u-stack--md"
        key={`div-issue-list-key-${issue.issue_we_vote_id}`}

      >
        <IssueCard
          followToggleOn
          includeLinkToIssue
          issue={issue}
          issueImageSize="SMALL"
          key={`issue-list-key-${issue.issue_we_vote_id}`}
        />
      </div>
    ));

    if (this.props.displayOnlyIssuesNotFollowedByVoter) {
      issueListForDisplay = issuesNotFollowedByVoterList.map(issue => (
        <div
          className="col col-12 col-md-6 u-stack--md"
          key={`div-issue-list-key-${issue.issue_we_vote_id}`}

        >
          <IssueCard
            condensed
            followToggleOn
            includeLinkToIssue
            issue={issue}
            issueImageSize="SMALL"
            key={`issue-list-key-${issue.issue_we_vote_id}`}
          />
        </div>
      ));
    }

    return (
      <>
        {this.props.displayOnlyIssuesNotFollowedByVoter ? (
          <Row className="row" noMargin>
            {issueListForDisplay}
          </Row>
        ) : (
          <div className="opinions-followed__container">
            <Helmet title="Values - We Vote" />
            <section className="card">
              <div className="card-main">
                <h1 className="h1">Values</h1>
                <p>
                  Follow the values and issues you care about, so we can highlight the organizations that care about the same issues you do.
                </p>
                <SearchBar
                  clearButton
                  searchButton
                  placeholder="Search by name or Description"
                  searchFunction={this.searchFunction}
                  clearFunction={this.clearFunction}
                  searchUpdateDelayTime={0}
                />
                <br />
                <div className="network-issues-list voter-guide-list">
                  { this.state.allIssues && this.state.allIssues.length ? (
                    <Row className="row">
                      {issueListForDisplay}
                    </Row>
                  ) :
                    null
                  }
                </div>
              </div>
            </section>
          </div>
        )}
      </>

    );
  }
}

const Row = styled.div`
  margin-left: -16px;
  margin-right: -16px;
  width: ${props => (props.noMargin ? 'calc(100% + 32px)' : '100%')}
`;
