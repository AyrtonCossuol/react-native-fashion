import React, { ReactNode } from 'react';
import { Image, Dimensions, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Constants from "expo-constants";

import { Box, useTheme } from './Theme';

export const assets = [
    require('./assets/patterns/01.png'),
    require('./assets/patterns/02.png'),
    require('./assets/patterns/03.png'),

];

const { width, height: wHeight } = Dimensions.get('window');
const aspectRatio = 1529/2380;
const height = width * aspectRatio;

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
    pattern : 0 | 1 | 2;
};


const Container = ({ children, footer, pattern }: ContainerProps) => {
    const insets = useSafeAreaInsets();
    const theme = useTheme();
    const asset = assets[pattern]
    
    return (
        <KeyboardAwareScrollView scrollEnabled={Platform.OS === 'ios' ? false : true}>
            <Box height={wHeight + (Platform.OS === 'android' ? Constants.statusBarHeight + 5 : 0)} backgroundColor='secondary'>
                <Box backgroundColor='white'>
                    <Box borderBottomLeftRadius='xl' overflow='hidden' height={height * 0.61}>
                        <Image 
                            source={asset} 
                            style={{ 
                                width, 
                                height,
                                borderBottomLeftRadius: theme.borderRadii.xl, 
                            }} 
                        />
                    </Box>
                </Box>

                <Box flex={1} overflow='hidden'>
                    <Image 
                        source={asset} 
                        style={{ 
                            ...StyleSheet.absoluteFillObject,
                            width,
                            height,
                            top: -height * 0.61,
                        }} 
                    />
                    <Box 
                        borderRadius='xl' 
                        borderTopLeftRadius={0}
                        backgroundColor='white'
                        flex={1}
                    >
                        
                        {children}

                    </Box>
                </Box>
                <Box backgroundColor='secondary' paddingTop='m'>
                    {footer}
                    <Box height={insets.bottom}/>
                </Box>
            </Box>
        </KeyboardAwareScrollView>
    );
};

export default Container;