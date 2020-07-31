import React, { useState } from 'react';
import { TextInput as RNTextInput, StyleSheet, TextInputProps as RNTextInputProps } from 'react-native';

import { Feather as Icon } from '@expo/vector-icons';

import { Box, theme } from '../../../components';

interface TextInputProps extends RNTextInputProps {
    icon: string;
    validator: (input: string) => boolean;
};

const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon, ...props }: TextInputProps) => {
    const [input, setInput] = useState('');
    const [state, setState] = useState<InputState>(Pristine);
    const reColor: keyof typeof theme.colors = 
        state === Pristine ? 'text' : (state === Valid) ? 'primary' : 'danger';
    const color = theme.colors[reColor]


    return (
        <Box 
            flexDirection='row' 
            height={48} 
            alignItems='center' 
            borderRadius='s'
            borderWidth={StyleSheet.hairlineWidth}
            borderColor={reColor}
        >
            <Box padding='s'>
                <Icon name={icon} size={16} {...{ color }}/>
            </Box>

            <RNTextInput 
                underlineColorAndroid='transparent' 
                placeholderTextColor={color} 
                {...props}
            />
            {
                (state === Valid || state === Invalid) && (
                    <Box height={SIZE} width={SIZE} borderRadius='m'>
                        <Icon name={state === Valid ? 'check' : 'x'} size={16} color='white' />
                    </Box> 
                )
            }
        </Box>
    );
};

export default TextInput;