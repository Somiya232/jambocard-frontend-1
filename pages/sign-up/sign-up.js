import React, { useState } from "react";
// import "../../components/button/signup.css"
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
import {
  addToken,
  addUser,
  login,
  signUpUser,
} from "../../redux/slice/authSlice";
import { apiClient } from "../../api/instance";
import { Toaster } from "react-hot-toast";
import loginBg from "../../public/images/login-bg.webp";

const SignUp = () => {
  const [loginCheck, setLoginCheck] = useState(false);
  const [signupEmailOrPhone, setSignupEmailOrPhone] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [version, setVersion] = useState(0);
  const dispatch = useDispatch();

  const handleSignup = async () => {
    const metaData = {
      email: signupEmailOrPhone,
      username: signupUsername,
      password: signupPassword,
    };
    console.log(metaData);
    dispatch(signUpUser(metaData));
  };

  const handleLogin = async () => {
    const metaData = {
      identifier: loginUsername,
      password: loginPassword,
    };
    console.log(metaData);
    dispatch(login(metaData));
    dispatch(addToken());
    dispatch(addUser());
  };

  return (
    <>
      <Toaster />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        pt={"3rem"}
        style={{ backgroundImage: `url(${loginBg.src})`, width: "100%", height: "100vh", backgroundRepeat:"no-repeat", backgroundSize:"cover"  }}
      >
        <Card width={"40%"} backgroundColor="white">
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
                    value="Email Id"
                    type={"email"}
                    onChange={(e) => setSignupEmailOrPhone(e.target.value)}
                    placeholder={"Enter your email"}
                  />
                  <TextField
                    value="Username"
                    type="text"
                    onChange={(e) => setSignupUsername(e.target.value)}
                    placeholder={"Create a username"}
                  />
                  <TextField
                    value="Password"
                    type="password"
                    onChange={(e) => setSignupPassword(e.target.value)}
                    placeholder={"Create a password"}
                  />
                </>
              ) : (
                <>
                  <TextField
                    value="Username"
                    type="text"
                    onChange={(e) => setLoginUsername(e.target.value)}
                    placeholder={"Type your username"}
                  />
                  <TextField
                    value="Password"
                    type="password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder={"Type your password"}
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
