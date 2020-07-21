import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, { multiply } from 'react-native-reanimated';
import { useValue, onScrollEvent, interpolateColor } from 'react-native-redash';

import Slider, { SLIDE_HEIGHT } from './Slide';
import Subslider from './Subslide';

const BORDER_RADIUS = 75;
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }, 
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: BORDER_RADIUS,
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        flexDirection: 'row',
        backgroundColor: 'white', 
        borderTopLeftRadius: BORDER_RADIUS,
    }
});

const slides = [
    { 
        title: 'Relaxed', 
        subtitle: 'Find Your Outfits', 
        description: 'Confused about your outfit? Dont`t worry! Find the best outfit here!', 
        color: '#bfeaf5'
    },
    { 
        title: 'Playful', 
        subtitle: 'Hear it First, Wear it First', 
        description: 'Hating the clothen in your wardrobe? Explore hundreds of outfit ideas', 
        color: '#beecc4' 
    },
    { 
        title: 'Excentric', 
        subtitle: 'Your Style, Your Way', 
        description: 'Create your individual & unique style and look amazing everday', 
        color: '#ffe4d9' 
    },
    { 
        title: 'Funky', 
        subtitle: 'Look Good, Feel Good', 
        description: 'Discover the lastest trends in fashion and explore your personality', 
        color: '#ffdddd' 
    }
];

const Onboarding = () => {
    const scroll = useRef<Animated.ScrollView>(null);
    const x = useValue(0);
    const onScroll = onScrollEvent({ x });
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color)
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView 
                    ref={scroll}
                    horizontal 
                    snapToInterval={width} 
                    decelerationRate="fast" 
                    showsHorizontalScrollIndicator={false} 
                    bounces={false}
                    scrollEventThrottle={1}
                    {...{ onScroll }}
                >
                    {slides.map(({ title },index) => (
                        <Slider key={index} right={!!(index % 2)} {...{ title }}/>
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}/>
                <Animated.View style={[
                        styles.footerContent, 
                        { 
                            width: width * slides.length, 
                            flex: 1, 
                            transform: [{ translateX: multiply(x, -1) }] 
                        }
                    ]}>
                    {slides.map(({ subtitle, description },index) => (
                        <Subslider 
                            key={index} 
                            onPress={() => {
                                if(scroll.current){
                                    scroll.current
                                        .getNode()
                                        .scrollTo({ x: width * (index + 1), animated: true });
                                }
                            }}
                            last={index === slides.length - 1} 
                            {...{ subtitle, description }}
                        />
                    ))}
                </Animated.View>
            </View>
        </View>
    );
};

export default Onboarding;