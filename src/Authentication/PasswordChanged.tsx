import React from 'react';

import { Feather as Icon } from '@expo/vector-icons';

import { Routes, StackNavigationProps } from '../components/Navigation';
import { Container, Box, Text, Button, CloseButton } from '../components';

const PasswordChanged = ({ navigation }: StackNavigationProps<Routes, 'PasswordChanged'>) => {
    return (
        <Container footer={
                <Box flexDirection='row' justifyContent='center'>
                    <CloseButton onPress={() => navigation.pop()} />
                </Box>
            }> 
            <Box>
                <Icon name='check' />
            </Box>
            <Text 
                variant='title1' 
                textAlign='center' 
                marginBottom='l'
            >
                Forgot password
            </Text>

            <Text variant='body' textAlign='center' marginBottom='l'>
                Use your credentials below and login to your account
            </Text>

            <Box alignItems='center' marginTop='m'>
                <Button 
                    variant='primary' 
                    onPress={() => navigation.navigate('Login')} 
                    label='Reset password' 
                />
            </Box>
        </Container>
    );
};

export default PasswordChanged;