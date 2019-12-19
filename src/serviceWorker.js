// /* global workbox */
// /* eslint-disable no-restricted-globals */

// // Uncomment the following line if you don't want to see Workbox log lines while debugging
// workbox.setConfig({ debug: false });

// // Note: The self.__precacheManifest variable will be imported from a file that will be dynamically generated by workbox.
// workbox.precaching.precacheAndRoute(self.__precacheManifest);

// workbox.routing.registerRoute(
//   /https:\/\/api.wevoteusa.org\/apis/,
//   new workbox.strategies.NetworkFirst({
//     cacheName: 'weVoteApiCache',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 100,
//         maxAgeSeconds: 10 * 24 * 60 * 60, // 10 Days
//       }),
//     ],
//   }),
// );

// workbox.routing.registerRoute(
//   /https:\/\/cdn.wevoteusa.org\/apis/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'weVoteApiCache',
//   }),
// );

// workbox.routing.registerRoute(
//   /https:\/\/maps\.googleapis\.com/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'weVoteGoogleCache',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 10,
//         maxAgeSeconds: 10 * 24 * 60 * 60, // 10 Days
//       }),
//     ],
//   }),
// );
// workbox.routing.registerRoute(
//   /https:\/\/fonts\.gstatic\.com/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'weVoteGoogleCache',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 30,
//         maxAgeSeconds: 10 * 24 * 60 * 60, // 10 Days
//       }),
//     ],
//   }),
// );

// workbox.routing.registerRoute(
//   /https:\/\/wevote-images\.s3\.amazonaws\.com/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'weVoteImageCache',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 60,
//         maxAgeSeconds: 10 * 24 * 60 * 60, // 10 Days
//       }),
//     ],
//   }),
// );

// // Don't care about zen when offline, but it makes subsequent online loads faster
// workbox.routing.registerRoute(
//   /https:\/\/ekr\.zdassets\.com/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'weVoteZenCache',
//   }),
// );
// workbox.routing.registerRoute(
//   /https:\/\/static\.zdassets\.com/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'weVoteZenCache',
//   }),
// );


// workbox.routing.registerRoute(
//   /https:\/\/cdnjs\.cloudflare\.com/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'weVoteCloudFlareCache',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 30,
//         maxAgeSeconds: 10 * 24 * 60 * 60, // 10 Days
//       }),
//     ],
//   }),
// );
// workbox.routing.registerRoute(
//   /https:\/\/use\.fontawesome\.com/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'weVoteCloudFlareCache',
//   }),
// );

// workbox.routing.registerRoute(
//   /https:\/\/connect\.facebook\.net/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'weVoteFacebookCache',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 30,
//         maxAgeSeconds: 10 * 24 * 60 * 60, // 10 Days
//       }),
//     ],
//   }),
// );

// workbox.routing.registerRoute(
//   /https:\/\/m\.stripe\.network/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'weVoteStripeCache',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 30,
//         maxAgeSeconds: 10 * 24 * 60 * 60, // 10 Days
//       }),
//     ],
//   }),
// );


// // workbox.routing.registerRoute(
// //   /\.*?svg$/,
// //   new workbox.strategies.CacheFirst({
// //     cacheName: 'WeVoteSVGCache',
// //     // plugins: [
// //     //   new workbox.expiration.Plugin({
// //     //     maxEntries: 60,
// //     //     maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
// //     //   }),
// //     // ],
// //   }),
// // );
// //
// //
