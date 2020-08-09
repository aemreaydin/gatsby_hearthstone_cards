import { useState } from "react";
import FirebaseAuth from "@gFirebase/firebaseAuth";
import isFirebaseError from "@gFirebase/firebaseHelpers";
import { UserInfo } from "@typings/user";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/actions";
import { USER_LOGIN } from "@redux/actions/userActions";
import { navigate } from "gatsby";

export function useEmailPasswordAuth(): [
  (email: string, password: string) => void,
  string,
  React.Dispatch<React.SetStateAction<string>>
] {
  const [error, setError] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = (email: string, password: string) => {
    FirebaseAuth.SignInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const { user: firebaseUser } = userCredentials;
        if (firebaseUser) {
          const payload: UserInfo = {
            displayName: firebaseUser.displayName,
            email: firebaseUser.email,
            emailVerified: firebaseUser.emailVerified,
            uid: firebaseUser.uid,
          };
          dispatch({
            type: USER_LOGIN,
            payload,
          });
        }
        navigate("/app/profile");
      })
      .catch((err) => {
        if (isFirebaseError(err)) {
          console.log("Firebase Error");
          setError(err.message);
        } else {
          throw new Error("Something unexpected happened.");
        }
      });
  };

  return [handleLogin, error, setError];
}
