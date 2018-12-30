# Tech News - App open-source tech news app

This app uses `https://newsapi.org` to fetch news articles from a variety of sources.

![Alt Text](https://media.giphy.com/media/4QF3Ag3OcJLWuQTjoY/giphy.gif)

## Running the project on Android

1. Clone the project and run `yarn install` to install project dependencies

2. Create an account at https://newsapi.org and get the API key. This is the service that we use to get news articles from different sources.

3. Open `.env.dev` and `.env.prod` and add your News API key there.

    `API_KEY=3c84f2f26cb64452adf099aec1ea02de`

4. Create a keystore file and place it inside the android/app directory

    `keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`

5. Open android/gradle.properties and set the keystore credentials. Save the changes.

6. To run in developement mode

    `yarn run-android-dev`

7. Build a release build

    `yarn build-android-prod`

8. You can refer to the package.json for more scripts.

## Currently the project has not been tested or configured for iOS.

