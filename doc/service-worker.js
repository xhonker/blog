/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "49071cf82d4aeab9fecba9c95daba3ad"
  },
  {
    "url": "assets/css/3.styles.0a382604.css",
    "revision": "371c91754982f2225b3bdcc43eacb09c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.0f682bc3.js",
    "revision": "39f3f112c4ff98a568d0bcc23ea87e35"
  },
  {
    "url": "assets/js/1.a571638a.js",
    "revision": "a4aca2841bdde1d85fa83e30a9b7c79d"
  },
  {
    "url": "assets/js/2.d02b451e.js",
    "revision": "fb9590a7e9ff48406c6e46750b1a3c1f"
  },
  {
    "url": "assets/js/app.37906e3f.js",
    "revision": "0739d69fee9f876da60a6a107488936c"
  },
  {
    "url": "index.html",
    "revision": "4462545ccbf4657229733fac868bffb1"
  },
  {
    "url": "test/index.html",
    "revision": "fdd14c3dd4a337f9f1adbdabbb9dcf3d"
  },
  {
    "url": "test/test.html",
    "revision": "c30b971119db5bea1ad6aefe3465b587"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
