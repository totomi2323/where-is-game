const firebaseConfig = {
  apiKey: "AIzaSyBBWt_dKKDywyQ4MiK9QN07MkHH2u1FsCU",
  authDomain: "where-is-game-8e495.firebaseapp.com",
  projectId: "where-is-game-8e495",
  storageBucket: "where-is-game-8e495.appspot.com",
  messagingSenderId: "773063891467",
  appId: "1:773063891467:web:0350c6e323e94a5031850e",
};

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return firebaseConfig;
  }
}
