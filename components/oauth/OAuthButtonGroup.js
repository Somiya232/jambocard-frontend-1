import { Button, ButtonGroup, Text, VisuallyHidden } from '@chakra-ui/react'
// import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
// import { GitHubIcon, GoogleIcon, TwitterIcon } from './ProviderIcons'
// import googleIcon from "../../public/images/oauth/googleIcon.png"
const providers = [
  {
    name: 'Google',
    // icon: <AddIcon boxSize="5" />,
    
  },
  {
    name: 'Facebook',
    // icon: <AddIcon boxSize="5" />, 
  },
]

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="outline" spacing="4" width="full">
    {providers.map(({ name, icon }) => (
      <Button key={name} width="full">
        <Text>
          Sign in with {name}
          </Text>
        {/* {icon} */}
      </Button>
    ))}
  </ButtonGroup>
)
