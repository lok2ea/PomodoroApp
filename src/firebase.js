import firebase from "firebase";

const API_KEY = process.env.REACT_APP_API_KEY;
const AUTH_DOMAIN = process.env.REACT_APP_AUTH_DOMAIN;
const DATABASE_URL = process.env.REACT_APP_DATABASE_URL;
const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;
const STORAGEBUCKET = process.env.REACT_APP_STORAGEBUCKET;
const MESSAGE_SENDER = process.env.REACT_APP_MESSAGE_SENDER;
const APP_ID = process.env.REACT_APP_APP_ID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGE_SENDER,
  appId: APP_ID
};

firebase.initializeApp(firebaseConfig);

export default firebase;
