import React, { useRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Container, Button, Text, Box } from '../components';
import { StackNavigationProps, Routes } from '../components/Navigation';

import TextInput from './components/Form/TextInput';
import Checkbox from './components/Form/Checkbox';
import Footer from './components/Footer';


const LoginSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });

const Login = ({ navigation }: StackNavigationProps<Routes, 'Login'>) => {
    const { 
        handleChange, 
        handleBlur, 
        handleSubmit, 
        errors,
        touched, 
        values,
        setFieldValue,
    } = useFormik({
        validationSchema: LoginSchema,
        initialValues: { email: '', password: '', remember: false },
        onSubmit: values => console.log(values),
    });

    const password = useRef<RNTextInput>(null);

    const footer = <Footer 
        title="Don't have an account?" 
        action="Sign Up here" 
        onPress={() => navigation.navigate('SignUp')} 
    />


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
                        returnKeyLabel='go'
                        returnKeyType='go'
                        onSubmitEditing={() => handleSubmit()}
                    />

                    <Box flexDirection='row' justifyContent='space-between'> 
                        <Checkbox 
                            label='Remember me' 
                            checked={values.remember} 
                            onChange={() => setFieldValue('remember', !values.remember)}
                        />
                        <Button variant='transparent' onPress={() => navigation.navigate('ForgotPassword')}> 
                            <Text color='primary'>Forgot password</Text>
                        </Button>
                    </Box>

                    <Box alignItems='center' marginTop='m'>
                        <Button 
                            variant='primary' 
                            onPress={handleSubmit} 
                            label='Log into your account' 
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;