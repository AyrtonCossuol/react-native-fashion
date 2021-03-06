import React, { useRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Container, Button, Text, Box } from '../components';
import { StackNavigationProps, Routes } from '../components/Navigation';

import TextInput from './components/Form/TextInput';
import Footer from './components/Footer';


const SignUpSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    passwordConfirmation: Yup.string()
      .equals([Yup.ref('password')], "Password don't match")
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });

const SignUp = ({ navigation }: StackNavigationProps<Routes, 'SignUp'>) => {
    const { 
        handleChange, 
        handleBlur, 
        handleSubmit, 
        errors,
        touched,
    } = useFormik({
        validationSchema: SignUpSchema,
        initialValues: { 
            email: '', 
            password: '', 
            passwordConfirmation: '',
            remember: false 
        },
        onSubmit: values => console.log(values),
    });

    const password = useRef<RNTextInput>(null);
    const passwordConfirmation = useRef<RNTextInput>(null);

    const footer = <Footer 
        title="Already have an account?" 
        action="Login here" 
        onPress={() => navigation.navigate('Login')} 
    />


    return (
        <Container pattern={1} {...{ footer }}>
            <Box padding='xl'>
                <Text 
                    variant='title1' 
                    textAlign='center' 
                    marginBottom='l'
                >
                    Create account
                </Text>

                <Text variant='body' textAlign='center' marginBottom='l'>
                    Let's us know what your name, email, and your password
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
                            returnKeyLabel='next'
                            returnKeyType='next'
                            onSubmitEditing={() => password.current?.focus()}
                        />
                    </Box>
                    <Box marginBottom='m'>
                        <TextInput 
                            ref={password}
                            icon='lock' 
                            placeholder='Enter your Password' 
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            error={errors.password}
                            touched={touched.password}
                            secureTextEntry
                            autoCompleteType='password'
                            autoCapitalize='none'
                            returnKeyLabel='next'
                            returnKeyType='next'
                            onSubmitEditing={() => handleSubmit()}
                        />
                    </Box>
                    
                    <Box marginBottom='m'>
                        <TextInput 
                            ref={password}
                            icon='lock' 
                            placeholder='Confirm your Password' 
                            onChangeText={handleChange('passwordConfirmation')}
                            onBlur={handleBlur('passwordConfirmation')}
                            error={errors.passwordConfirmation}
                            touched={touched.passwordConfirmation}
                            secureTextEntry
                            autoCompleteType='password'
                            autoCapitalize='none'
                            returnKeyLabel='go'
                            returnKeyType='go'
                            onSubmitEditing={() => passwordConfirmation.current?.focus()}
                        />
                    </Box>

                    <Box alignItems='center' marginTop='m'>
                        <Button 
                            variant='primary' 
                            onPress={handleSubmit} 
                            label='Create your account' 
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default SignUp;