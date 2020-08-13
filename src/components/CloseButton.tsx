import React from 'react';

import { Feather as Icon } from '@expo/vector-icons';

import { Box } from './Theme';

interface CloseButtinProps {
    onPress: () => void;
}

const SIZE = 60;

const CloseButton = ({ onPress }: CloseButtinProps) => {
    return (
        <Box style={{ height: SIZE, width: SIZE}}>
            <Icon name='x' />
        </Box>
    );
}

export default CloseButton;