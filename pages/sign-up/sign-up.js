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
import { addUser, login, signUpUser } from "../../redux/slice/authSlice";
import { apiClient } from "../../api/instance";

const SignUp = () => {
  const [loginCheck, setLoginCheck] = useState(false);
  const [signupEmailOrPhone, setSignupEmailOrPhone] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignup = async () => {
    const metaData = {
      email: signupEmailOrPhone,
      username: signupUsername,
      password: signupPassword,
    };
    console.log(metaData);
    dispatch(signUpUser(metaData));
    // try {
    //   const headers = {
    //     "Content-Type": "application/json",
    //   };
    //   const result = await apiClient.post(
    //     "/api/auth/local/register",
    //     metaData,
    //     headers
    //   );
    //   console.log("Result -> ", result);
    //   alert("Success");
    // } catch (error) {
    //   alert("Something went wrong, Please try again!", error);
    // }
  };
  const handleLogin = async () => {
    const metaData = {
      identifier: loginUsername,
      password: loginPassword,
    };
    console.log(metaData);
    dispatch(login(metaData));
    // try {
    //   const headers = {
    //     "Content-Type": "application/json",
    //   };
    //   const result = await apiClient.post("/api/auth/local", metaData, headers);
    //   console.log("Result -> ", result);
    //   dispatch(addUser({ user: user, token: "" }));
    //   alert("Success");
    // } catch (error) {
    //   alert("Something went wrong, Please try again!", error);
    // }
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
                    value="Username"
                    type="text"
                    onChange={(e) => setSignupUsername(e.target.value)}
                  />
                  <TextField
                    value="Password"
                    type="password"
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <TextField
                    value="Username"
                    type="text"
                    onChange={(e) => setLoginUsername(e.target.value)}
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
