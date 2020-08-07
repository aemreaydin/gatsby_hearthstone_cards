import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
class FirebaseAuth {
  constructor() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    this.auth = firebase.auth();
  }
  GetCurrentUser() {
    return this.auth.currentUser;
  }
  CreateUserWithEmailAndPassword(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
  SignInWithEmailAndPassword(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  SignOut() {
    return this.auth.signOut();
  }
  ResetPassword(email) {
    return this.auth.sendPasswordResetEmail(email);
  }
  UpdatePassword(password) {
    return this.auth.currentUser?.updatePassword(password);
  }
}
const fbAuth = new FirebaseAuth();
export default fbAuth;
