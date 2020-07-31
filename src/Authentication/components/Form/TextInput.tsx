import React, { useState } from 'react';
import { TextInput as RNTextInput } from 'react-native';

import { Feather as Icon } from '@expo/vector-icons';

import { Box, theme } from '../../../components';

interface TextInputProps {
    placeholder: string;
    icon: string;
    validator: (input: string) => boolean;
};

const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon, placeholder }: TextInputProps) => {
    const [state, setState] = useState<InputState>(Pristine);

    return (
        <Box flexDirection='row' alignItems='center'>
            <Icon name={icon} />
            <RNTextInput underlineColorAndroid='transparent' {...{ placeholder }}/>
            {
                (state === Valid || state === Invalid) && (
                    <Box height={SIZE} width={SIZE} borderRadius='m'>
                        <Icon name={state === Valid ? 'check' : 'x'} color='white' />
                    </Box> 
                )
            }
        </Box>
    );
};

export default TextInput;