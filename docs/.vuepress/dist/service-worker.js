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
    "revision": "376a2f18f648f29ccd2da6059d7d5cab"
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
    "url": "assets/js/0.cb096730.js",
    "revision": "c1455e7f2fa711f774d17f979ffd426a"
  },
  {
    "url": "assets/js/1.3556da8e.js",
    "revision": "04df82dda737fbba054d2eba6e149ece"
  },
  {
    "url": "assets/js/2.767aa855.js",
    "revision": "41690ccfebc366e4d61bfff553a1c7b8"
  },
  {
    "url": "assets/js/app.8ce74aec.js",
    "revision": "a1155ff8156cef7a0c7b4630f0bf1b2f"
  },
  {
    "url": "index.html",
    "revision": "fbb3d5e76ed4af57af05dba9d0470b5a"
  },
  {
    "url": "test/index.html",
    "revision": "230b5635c13eae349e061cc53c8a8979"
  },
  {
    "url": "test/test.html",
    "revision": "87a8ed242a3ade0b65eec8d8e4019296"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
