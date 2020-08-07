import React from "react";
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

type FormData = {
  email: string;
  password: string;
};

export default function LoginPage(): JSX.Element {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(({ email, password }) => {
    console.log(email, password);
    FirebaseAuth.SignInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        console.log({ userCredentials });
        // const { user } = userCredentials;
        // if (user) {
        //   dispatch({
        //     type: USER_LOGIN,
        //     payload: {
        //       displayName: user.displayName,
        //       email: user.email,
        //       emailVerified: user.emailVerified,
        //       uid: user.uid,
        //     },
        //   });
        // }
        // setError(false);
        // router.replace("/");
      })
      .catch((error) => {
        // if (isFirebaseError(error)) {
        //   setError(true);
        // } else {
        //   throw new Error("Something unexpected happened.");
        // }
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
