import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import useSignInWithEmailAndPassword from '../../hooks/useSignUpWithEmailAndPassword';

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName:'',
    username:'',
    email:'',
    password:'',
  });
  const [showPassword, setShowPassword] = useState(false);
  const {loading, error, signup} = useSignInWithEmailAndPassword();
  return (
    <>
      <Input
        placeholder="Email"
        _placeholder={{ color: 'inherit' }}
        fontSize={14}
        type="email"
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs({...inputs, email:e.target.value})}
      />
      <Input
        placeholder="Username"
        _placeholder={{ color: 'inherit' }}
        fontSize={14}
        type="text"
        size={"sm"}
        value={inputs.username}
        onChange={(e) => setInputs({...inputs, username:e.target.value})}
      />
      <Input
        placeholder="Full Name"
        _placeholder={{ color: 'inherit' }}
        fontSize={14}
        type="text"
        size={"sm"}
        value={inputs.fullName}
        onChange={(e) => setInputs({...inputs, fullName:e.target.value})}
      />
      <InputGroup>
        <Input
            placeholder="Password"
            _placeholder={{ color: 'inherit' }}
            fontSize={14}
            type= {showPassword ? 'text' : 'password'}
            size={"sm"}
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password:e.target.value})}
        />
        <InputRightElement h={"full"}>
          <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon/> }
          </Button>
        </InputRightElement>
      </InputGroup>

      {error && (
        <Alert status='error' fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12}/>
          {error.message}
        </Alert>
      )}

      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={() => signup(inputs)} isLoading={loading}>
        Sign up
      </Button>
    </>
  )
}

export default Signup