import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather as Icon } from '@expo/vector-icons';

import { Box, Text } from '../../../components';

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: () => void;
};

const Checkbox = ({ label, onChange, checked }: CheckboxProps) => {

    return (
        <BorderlessButton 
            onPress={() => onChange()} 
            style={{ justifyContent:'center' }}
        >
            <Box flexDirection='row' alignItems='center'>
                <Box 
                    height={20}
                    width={20}
                    marginRight='m'
                    borderRadius='s'
                    borderWidth={1}
                    borderColor='primary'
                    justifyContent='center'
                    alignItems='center' 
                    backgroundColor={checked ? 'primary' : 'white'}
                >
                    <Icon name='check' />
                </Box>
                <Text variant='button'>{label}</Text>
            </Box>
        </BorderlessButton>
    );
};

export default Checkbox;