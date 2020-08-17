import React from 'react';
import { Linking } from 'react-native';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import Footer from './components/Footer';
import { Routes, StackNavigationProps } from '../components/Navigation';
import { Container, Box, Button, Text } from '../components';
import TextInput from './components/Form/TextInput';


const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });

const ForgotPassword = ({ navigation }: StackNavigationProps<Routes, 'ForgotPassword'>) => {
    const { 
        handleChange, 
        handleBlur, 
        handleSubmit, 
        errors,
        touched, 
    } = useFormik({
        validationSchema: ForgotPasswordSchema,
        initialValues: { email: '' },
        onSubmit: () => {
            console.log('GO'),
            navigation.navigate('PasswordChanged');
        }
    });

    const footer = (
        <Footer 
            title="Don't work?" 
            action="Try another way" 
            onPress={() => Linking.openURL('mailto:help@support.com')} 
        />
    );


    return (
        <Container pattern={2} {...{ footer }}>
            <Box padding='xl'>
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
                
                <Box>
                    <Box marginBottom='m'>
                        <TextInput 
                            icon='mail' 
                            placeholder='Enter your Email' 
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            error={errors.email}
                            touched={touched.email}
                            autoCompleteType='email'
                            autoCapitalize='none'
                            returnKeyLabel='go'
                            returnKeyType='go'
                            onSubmitEditing={() => handleSubmit()}
                        />
                    </Box>
                    
                    <Box alignItems='center' marginTop='m'>
                        <Button 
                            variant='primary' 
                            onPress={() => handleSubmit()} 
                            label='Reset password' 
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default ForgotPassword;