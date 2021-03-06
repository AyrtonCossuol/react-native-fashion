import React from 'react';

import { Routes, StackNavigationProps } from '../components/Navigation';
import { Container, Box, Text, Button, RoundedIconButton, RoundedIcon } from '../components';

const SIZE = 80;

const PasswordChanged = ({ navigation }: StackNavigationProps<Routes, 'PasswordChanged'>) => {
    return (
        <Container pattern={0} footer={
                <Box flexDirection='row' justifyContent='center'>
                    <RoundedIconButton 
                        name='x' 
                        size={60} 
                        onPress={() => navigation.pop()} 
                        backgroundColor='white'
                        color='secondary'
                    />
                </Box>
            }> 
            <Box flex={1} justifyContent='center' alignItems='center' padding='xl'>
                <RoundedIcon 
                    name='check' 
                    size={SIZE} 
                    backgroundColor='primaryLight' 
                    color='primary'  
                />
                
                <Text 
                    variant='title1' 
                    textAlign='center' 
                    marginVertical='l'
                    >
                    Your password was successfully changed
                </Text>

                <Text variant='body' textAlign='center' marginBottom='l'>
                    Close this window and login again
                </Text>

                <Box alignItems='center' marginTop='m'>
                    <Button 
                        variant='primary' 
                        onPress={() => navigation.navigate('Login')} 
                        label='Reset password' 
                        />
                </Box>
            </Box>
        </Container>
    );
};

export default PasswordChanged;