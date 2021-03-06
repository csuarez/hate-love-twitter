# Hate Love: a Twitter like blocker

![Love Hate logo](public/logo.png)

[![SUSHI-WARE LICENSE](https://img.shields.io/badge/license-SUSHI--WARE%F0%9F%8D%A3-blue.svg)](https://github.com/MakeNowJust/sushi-ware)

This browser extension blocks from your Twitter timeline the likes of users you follow

## :metal: Install it!

| **Browser**  |   |
|--------------|---|
| Google Chrome  | :arrow_down: [**INSTALL**](https://chrome.google.com/webstore/detail/hate-love-for-twitter/mpogeleaahfdeolnbmajdacbbmkhenbp)  |
| Firefox  | :arrow_down: [**INSTALL**](https://addons.mozilla.org/es/firefox/addon/hate-love-block-twitter-likes/)  |
| Opera  | :arrow_down: [**INSTALL**](https://addons.opera.com/es/extensions/details/hate-love-a-twitter-like-blocker/?display=en)  |

### What happens with *XXX* browser?
I hope to port the extension to other browsers very soon :v:

## :construction_worker: Build

### Pre build

1. Execute:

    ```sh
    $ npm install
    ```

### Chrome

1. Execute:

    ```sh
    $ npm run build:chrome
    ```

2. The generated extension will be at `dist/chrome.zip`

### Firefox

1. Rename the `env.dist` file to `env`

2. Complete the `FIREFOX_JWT_ISSUE` and `FIREFOX_JWT_SECRET` with your credentials.

3. Execute:

    ```sh
    $ npm run build:firefox
    ```

4. The generated extension will be at `dist/hate_love_a_twitter_like_blocker-<version>-an+fx.xpi`

### Opera

1. Execute:

    ```sh
    $ npm run build:opera
    ```

2. The generated extension will be at `dist/opera.zip`