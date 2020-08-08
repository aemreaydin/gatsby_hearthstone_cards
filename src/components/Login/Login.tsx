import React, { ReactElement } from "react";
import { RouteComponentProps } from "@reach/router";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Button,
} from "@chakra-ui/core";
import FirebaseAuth from "@gFirebase/firebaseAuth";
import * as styles from "./Login.module.css";
import { AppDispatch } from "@redux/actions";
import { USER_LOGIN } from "@redux/actions/userActions";
import { navigate } from "gatsby";
import isFirebaseError from "@gFirebase/firebaseHelpers";
import { LOCAL_STORAGE_KEY, setUser } from "@gFirebase/authHelpers";
import { UserInfo } from "@typings/user";

type FormData = {
  email: string;
  password: string;
};

export default function LoginPage(props: RouteComponentProps): ReactElement {
  const { register, handleSubmit } = useForm<FormData>();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = handleSubmit(({ email, password }) => {
    console.log(email, password);
    FirebaseAuth.SignInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        console.log({ userCredentials });
        const { user } = userCredentials;
        if (user) {
          const payload: UserInfo = {
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            uid: user.uid,
          };
          dispatch({
            type: USER_LOGIN,
            payload,
          });
          setUser(payload);
        }
        navigate("/app/profile");
      })
      .catch((error) => {
        if (isFirebaseError(error)) {
          console.log("Firebase Error");
        } else {
          throw new Error("Something unexpected happened.");
        }
      });
  });

  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <FormControl isRequired className={styles.formControl}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <InputGroup>
          <InputLeftElement>
            <Icon name="email" color="gray.300" />
          </InputLeftElement>
          <Input
            ref={register}
            type="email"
            name="email"
            placeholder="Email"
            focusBorderColor="green.300"
          />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="password">Password</FormLabel>
        <InputGroup>
          <InputLeftElement>
            <Icon name="lock" color="gray.300" />
          </InputLeftElement>
          <Input
            ref={register}
            type="password"
            name="password"
            placeholder="Password"
            focusBorderColor="green.300"
          />
        </InputGroup>
      </FormControl>
      <Button variantColor="green" type="submit">
        Login
      </Button>
    </form>
  );
}
