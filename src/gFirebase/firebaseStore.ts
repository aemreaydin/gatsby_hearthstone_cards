import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";
import { getUser } from "./authHelpers";

class FirebaseStore {
  private store: firebase.firestore.Firestore;

  constructor() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    this.store = firebase.firestore();
  }

  async getData() {
    const snapshot = await this.store.collection(`userInfo`).doc(getUser()?.uid).get();
    const data = snapshot.data();
    if (data) {
      return data.savedMana;
    }
    return undefined;
  }

  async addData() {
    // const user = getUser();
    // if (user) {
    //   const docRef = this.store.collection("userInfo").doc(user.uid);
    //   await docRef.set({
    //     savedMana: Math.floor(Math.random() * 10) + 1,
    //   });
    // }
  }
}

export default new FirebaseStore();
