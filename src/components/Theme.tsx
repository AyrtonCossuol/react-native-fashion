import { createText } from "@shopify/restyle";

const theme = {
    colors: {
        primary: '#2cb9b0',
        title: '#0c0d34',
        text: '#rgba(12, 13, 52, 0.7)',
        white: 'white',
        grey: 'rgba(12, 13, 52, 0.05)',
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
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
            color: 'title',
        },
        title2: {
            fontSize: 24,
            lineHeight: 30,
            fontFamily: 'SFProDisplay-Semibold',
            color: 'title',
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
export const Text = createText<Theme>();
export default theme;