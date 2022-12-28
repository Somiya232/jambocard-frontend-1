import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Box,
  Stack,
  Divider,
  Link,
} from "@chakra-ui/react";
import TextField from "../../components/form";
import Button from "../../components/button";
import ButtonComponent from "../../components/button";
import { useDispatch } from "react-redux";
import { login, signUpUser } from "../../redux/slice/authSlice";

const SignUp = () => {
  const [loginCheck, setLoginCheck] = useState(false);
  const [signupEmailOrPhone, setSignupEmailOrPhone] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [loginEmailOrPhone, setLoginEmailOrPhone] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignup = () => {
    const metaData = {
      signupEmailOrPhone,
      signupPassword,
      signupConfirmPassword,
    };
    console.log(metaData)
    dispatch(signUpUser(metaData))
  };
  const handleLogin = () => {
    const metaData = {
      loginEmailOrPhone, loginPassword
    }
    console.log(metaData)
    dispatch(login(metaData))
  };


  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        pt={"10rem"}
      >
        <Card width={"40%"}>
          <CardBody>
            <Stack spacing={3} pb={"1rem"}>
              {loginCheck === false ? (
                <Text fontSize="3xl">Sign up</Text>
              ) : (
                <Text fontSize="3xl">Login</Text>
              )}
            </Stack>
            <Divider />
            <Box pt={"1rem"}>
              {loginCheck === false ? (
                <>
                  <TextField
                    value="Email or Phone"
                    type={"email" || "number"}
                    onChange={(e) => setSignupEmailOrPhone(e.target.value)}
                  />
                  <TextField
                    value="Password"
                    type="password"
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />
                  <TextField
                    value="Confirm Password"
                    type="password"
                    onChange={(e) => setSignupConfirmPassword(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <TextField
                    value="Email or Phone"
                    type={"email" || "number"}
                    onChange={(e) => setLoginEmailOrPhone(e.target.value)}
                  />
                  <TextField
                    value="Password"
                    type="password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </>
              )}
            </Box>
            <Box pt={"1rem"}>
              <ButtonComponent
                value={loginCheck === false ? "Sign Up" : "Login"}
                onClick={loginCheck === false ? handleSignup : handleLogin}
              />
            </Box>
            <Box pt={"0.5rem"}>
              {loginCheck === false ? (
                <Link onClick={() => setLoginCheck(true)}>
                  <Text fontSize="1xl">Already User? Log in</Text>
                </Link>
              ) : (
                <Link onClick={() => setLoginCheck(false)}>
                  <Text fontSize="1xl">Sign up</Text>
                </Link>
              )}
            </Box>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default SignUp;
