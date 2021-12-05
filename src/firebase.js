import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkT3nvNfxBPSa0hX89iaNSF6-GxbfH4o8",
  authDomain: "linkdin-clone-96cb4.firebaseapp.com",
  projectId: "linkdin-clone-96cb4",
  storageBucket: "linkdin-clone-96cb4.appspot.com",
  messagingSenderId: "655125898570",
  appId: "1:655125898570:web:2566fa6d1849fa420fcdb3"
};


const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;