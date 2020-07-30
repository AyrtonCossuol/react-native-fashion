import React from 'react';
import { View } from 'react-native';

import SocialLogin from '../components/SocialLogin';
import { Container, Button, Text, Box } from '../../components';

const Login = () => {
    const footer = (
        <>
            <SocialLogin />
            <Box alignItems='center'>
                <Button variant='transparent'>
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
            <View />
        </Container>
    );
};

export default Login;