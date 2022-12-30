import { Button, ButtonGroup, Text, VisuallyHidden } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
// import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { apiClient } from "../../api/instance";
// import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
// import { GitHubIcon, GoogleIcon, TwitterIcon } from './ProviderIcons'
// import googleIcon from "../../public/images/oauth/googleIcon.png"
const providers = [
  {
    name: "Google",
    // icon: <AddIcon boxSize="5" />,
  },
  {
    name: "Facebook",
    // icon: <AddIcon boxSize="5" />,
  },
];

const googleSignupHandler = () => {
  try {
    signIn();
  } catch (error) {
    toast(error);
  }
};
const facebookSignupHandler = () => {};

export const OAuthButtonGroup = () => {
  const router = useRouter();
  const { data: session } = useSession();
  // console.log(session?.user?.name);
  useEffect(() => {
    if (session) {
      router.push("/create-new-card-account/create-new-card-account");
      toast.success(`Welcome, ${session?.user?.name}`);
    }
  }, [session]);

  return (
    <>
      <ButtonGroup variant="outline" spacing="4" width="full">
        {providers.map(({ name, icon }) => (
          <Button
            key={name}
            width="full"
            onClick={
              name === "Google" ? googleSignupHandler : facebookSignupHandler
            }
          >
            <Text>Sign in with {name}</Text>
            {/* {icon} */}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
};
