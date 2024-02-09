import { Alert, AlertIcon, Button, Input } from '@chakra-ui/react'
import useLogin from '../../hooks/useLogin';
import React, { useState } from 'react'

const Login = () => {
  const [inputs, setInputs] = useState({
    email:'',
    password:''
  });
  const {loading, error, login} = useLogin();
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
        placeholder="Password"
        _placeholder={{ color: 'inherit' }}
        fontSize={14}
        type="password"
        size={"sm"}
        value={inputs.password}
        onChange={(e) => setInputs({...inputs, password:e.target.value})}
      />

      {error && (
        <Alert status='error' fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12}/>
          {error.message}
        </Alert>
      )}

      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={() => login(inputs)} isLoading={loading}>
        Log in
      </Button>
    </>
  )
}

export default Login