import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import LoginLayout from '../pages/Login/LoginLayout'


function Login() {
  return (
   <ChakraProvider>
   <LoginLayout/>
   </ChakraProvider>
  )
}

export default Login
