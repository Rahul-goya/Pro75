import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAg4GRPt60vMajiA8KMQfaFgUWyeJRA2OI",
  authDomain: "template-84d74.firebaseapp.com",
  projectId: "template-84d74",
  storageBucket: "template-84d74.appspot.com",
  messagingSenderId: "300694161751",
  appId: "1:300694161751:web:88cf1e8190373e0a805612"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
