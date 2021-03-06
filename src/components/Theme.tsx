import { createText, createBox, useTheme as useReTheme } from "@shopify/restyle";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

export const theme = {
    colors: {
        primary: '#2cb9b0',
        secondary: '#0c0d34',
        danger: '#ff0058',
        text: '#rgba(12, 13, 52, 0.7)',
        button: '#0c0d34',
        white: 'white',
        grey: 'rgba(12, 13, 52, 0.05)',
        primaryLight: '#eff9f7'
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    borderRadii: {
        s: 4,
        m: 10,
        l: 25,
        xl: 75,
    },
    textVariants: {
        hero: {
            fontSize: 80,
            lineHeight: 80,
            fontFamily: 'SFProDisplay-Bold',
            color: 'white',
            textAlign: 'center',
        },
        title1: {
            fontSize: 28,
            fontFamily: 'SFProDisplay-Semibold',
            color: 'secondary',
        },
        title2: {
            fontSize: 24,
            lineHeight: 30,
            fontFamily: 'SFProDisplay-Semibold',
            color: 'secondary',
        },
        body: {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: 'SFProDisplay-Regular',
            color: 'text',
        },
        button: {
            fontSize: 15,
            fontFamily: 'SFProDisplay-Medium',
        }
    },

    breakpoints: {},
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };


export const makeStyles = <T extends NamedStyles<T>> (
    styles: (theme: Theme) => T
) => () => {
    const currentTheme = useTheme();

    return styles(currentTheme);
};
// export default theme;