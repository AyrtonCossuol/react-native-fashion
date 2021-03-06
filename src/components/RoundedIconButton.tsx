import React from 'react';

import RoundedIcon, { RoundedIconProps } from './RoundedIcon';
import { RectButton } from 'react-native-gesture-handler';


interface RoundedIconButtonProps extends RoundedIconProps {
    onPress: () => void;
}

const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
    return (
        <RectButton {...{ onPress }}>
            <RoundedIcon {...props} />
        </RectButton>
    );
};

export default RoundedIconButton;