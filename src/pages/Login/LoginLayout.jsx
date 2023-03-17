import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Center,
} from '@chakra-ui/react';
import { useState } from 'react';

 function LoginLayout() {

   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");


  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading padding={4} textAlign={"center"} fontSize={'3xl'}>Iniciar Sesion</Heading>
          <FormControl id="email">
            <FormLabel>Correo Electronico</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Contraseña</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Recordar</Checkbox>
              <Link color={'blue.500'}>olvidaste tu contraseña?</Link>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'}  >
              Ingresar
            </Button>
            <Flex align={"center"} justify={"center"}>
               No tienes una cuenta? <Link color={'blue.500'} px={2.5}>Registarse</Link>
            </Flex>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}
export default LoginLayout;