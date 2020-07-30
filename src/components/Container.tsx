import React, { ReactNode } from 'react';
import { View, Image, Dimensions, StyleSheet, StatusBar } from 'react-native';
import theme, { Box } from './Theme';

export const assets = [require('./assets/patterns/01.png')];
const { width } = Dimensions.get('window');
const aspectRatio = 1529/2380;
const height = width * aspectRatio;

interface ContainerProps {
    children: ReactNode;
};


const Container = ({ children }: ContainerProps) => {
    return (
        <Box flex={1} backgroundColor='secondary'>
            <StatusBar barStyle='light-content'/>
            <Box backgroundColor='white'>
                <Box borderBottomLeftRadius='xl' overflow='hidden' height={height * 0.61}>
                    <Image 
                        source={assets[0]} 
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
                    source={assets[0]} 
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
            <Box height={200} backgroundColor='secondary'>

            </Box>
        </Box>
    );
};

export default Container;