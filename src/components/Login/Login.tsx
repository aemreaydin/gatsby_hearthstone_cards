import React, { useEffect } from "react";
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
  useToast,
} from "@chakra-ui/core";
import * as styles from "./Login.module.css";
import { useEmailPasswordAuth } from "@hooks/useAuth";

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC<RouteComponentProps> = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const [handleLogin, error, setError] = useEmailPasswordAuth();
  const toast = useToast();

  const onSubmit = handleSubmit(({ email, password }) => {
    handleLogin(email, password);
  });

  useEffect(() => {
    if (error) {
      toast({
        title: "An error occured.",
        description: "Wrong email or password",
        status: "error",
        isClosable: true,
        duration: 5000,
      });
      setError("");
    }
  }, [toast, setError, error]);

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
};
export default Login;
