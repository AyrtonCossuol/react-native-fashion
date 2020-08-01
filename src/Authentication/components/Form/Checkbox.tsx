import React, { useState } from 'react';

import { Feather as Icon } from '@expo/vector-icons';


import { Box, Text } from '../../../components';
import { RectButton } from 'react-native-gesture-handler';

interface CheckboxProps {
    label: string;
};

const Checkbox = ({ label }: CheckboxProps) => {
    const [checked, setChecked] = useState(false);

    return (
        <RectButton onPress={() => setChecked((c) => !c)} style={{ justifyContent:'center' }}>
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
        </RectButton>
    );
};

export default Checkbox;