import React from 'react';

import SocialLogin from '../components/SocialLogin';
import { Container, Button, Text, Box } from '../../components';
import TextInput from '../components/Form/TextInput';


const emailValidator = (email: string) => 
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

const passwordValidator = (password: string) => true;
const Login = () => {
    const footer = (
        <>
            <SocialLogin />
            <Box alignItems='center'>
                <Button variant='transparent' onPress={() => alert('SignUp!')}>
                    <Box flexDirection='row' justifyContent='center'>
                        <Text variant='button' color='white'>Don't have an account?</Text>
                        <Text marginLeft='s' variant='button' color='primary'>Sign Up here</Text>
                    </Box>
                </Button>
            </Box>
        </>
    );

    return (
        <Container {...{ footer }}>
            <Box padding='xl'>
                <Text 
                    variant='title1' 
                    textAlign='center' 
                    marginBottom='l'
                >
                    Welcome Back
                </Text>

                <Text variant='body' textAlign='center' marginBottom='l'>Use your credentials below and login to your account</Text>
                <Box marginBottom='m'>
                    <TextInput icon='mail' placeholder='Enter your Email' validator={emailValidator} />
                </Box>
                <TextInput icon='lock' placeholder='Enter your Password' validator={passwordValidator} />
            </Box>
        </Container>
    );
};

export default Login;