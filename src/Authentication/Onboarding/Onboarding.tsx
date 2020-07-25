import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, { multiply, divide } from 'react-native-reanimated';
import { interpolateColor, useScrollHandler } from 'react-native-redash';

import Slider, { SLIDE_HEIGHT } from './Slide';
import Subslider from './Subslide';
import Dot from './Dot';

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
        flex: 1,
        backgroundColor: 'white', 
        borderTopLeftRadius: BORDER_RADIUS,
    },
    pagination: {
        ...StyleSheet.absoluteFillObject, 
        height: BORDER_RADIUS, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const slides = [
    { 
        title: 'Relaxed', 
        subtitle: 'Find Your Outfits', 
        description: 'Confused about your outfit? Dont`t worry! Find the best outfit here!', 
        color: '#bfeaf5',
        picture: require('./assets/01.jpg'),
    },
    { 
        title: 'Playful', 
        subtitle: 'Hear it First, Wear it First', 
        description: 'Hating the clothen in your wardrobe? Explore hundreds of outfit ideas', 
        color: '#beecc4',
        picture: require('./assets/02.jpg'),
    },
    { 
        title: 'Excentric', 
        subtitle: 'Your Style, Your Way', 
        description: 'Create your individual & unique style and look amazing everday', 
        color: '#ffe4d9',
        picture: require('./assets/03.png'),
    },
    { 
        title: 'Funky', 
        subtitle: 'Look Good, Feel Good', 
        description: 'Discover the lastest trends in fashion and explore your personality', 
        color: '#ffdddd',
        picture: require('./assets/04.jpg'),
    }
];

const Onboarding = () => {
    const scroll = useRef<Animated.ScrollView>(null);
    const { scrollHandler, x } = useScrollHandler();
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
                    {...scrollHandler}
                >
                    {slides.map(({ title },index) => (
                        <Slider key={index} right={!!(index % 2)} {...{ title }}/>
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}/>
                <View style={styles.footerContent}>
                    <View style={styles.pagination}>
                        {slides.map((_, index) => (
                            <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
                        ))}
                    </View>
                    <Animated.View style={{ 
                            flex: 1, 
                            flexDirection: 'row', 
                            width: width * slides.length,
                            transform: [{ translateX: multiply(x, -1) }] 
                        }}> 
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
        </View>
    );
};

export default Onboarding;