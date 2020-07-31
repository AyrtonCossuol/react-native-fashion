import React from 'react';

import SocialLogin from '../components/SocialLogin';
import { Container, Button, Text, Box } from '../../components';
import TextInput from '../components/Form/TextInput';


const emailValidator = (email: string) => 
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

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

                <Text variant='body' textAlign='center'>Use your credentials below and login to your account</Text>

                <TextInput icon='mail' placeholder='Enter your Email' validator={emailValidator} />
            </Box>
        </Container>
    );
};

export default Login;