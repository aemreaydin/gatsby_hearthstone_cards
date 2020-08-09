import React from "react";
import { RouteComponentProps } from "@reach/router";
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
import * as styles from "./Register.module.css";
import firebaseAuth from "@gFirebase/firebaseAuth";
import { navigate } from "gatsby";
import { setUser } from "@gFirebase/authHelpers";
import { UserInfo } from "@typings/user";

type FormData = {
  userName: string;
  email: string;
  password: string;
};

const Register: React.FC<RouteComponentProps> = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(({ email, password, userName }) => {
    firebaseAuth
      .CreateUserWithEmailAndPassword(email, password)
      .then(({ user: firebaseUser }) => {
        if (firebaseUser) {
          const payload: UserInfo = {
            displayName: firebaseUser.displayName,
            email: firebaseUser.email,
            emailVerified: firebaseUser.emailVerified,
            uid: firebaseUser.uid,
          };
          navigate("/app/profile");
          setUser(payload);
        }
      });
  });

  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <FormControl isRequired className={styles.formControl}>
        <FormLabel htmlFor="userName">User Name</FormLabel>
        <InputGroup>
          <InputLeftElement>
            <Icon name="info" color="gray.300" />
          </InputLeftElement>
          <Input
            ref={register}
            type="userName"
            name="userName"
            placeholder="User Name"
            focusBorderColor="green.300"
          />
        </InputGroup>
      </FormControl>
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
        Register
      </Button>
    </form>
  );
};
export default Register;
