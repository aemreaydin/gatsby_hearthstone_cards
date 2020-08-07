import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

class FirebaseAuth {
  private auth: firebase.auth.Auth;

  constructor() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    this.auth = firebase.auth();
  }

  public GetCurrentUser() {
    return this.auth.currentUser;
  }

  public CreateUserWithEmailAndPassword(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  public SignInWithEmailAndPassword(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  public SignOut() {
    return this.auth.signOut();
  }

  public ResetPassword(email: string) {
    return this.auth.sendPasswordResetEmail(email);
  }

  public UpdatePassword(password: string) {
    return this.auth.currentUser?.updatePassword(password);
  }
}

const fbAuth = new FirebaseAuth();
export default fbAuth;
