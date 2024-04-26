import RecipeDuration from './RecipeDuration';

export default {
    title: 'Components/Molecules/Text-Elements/RecipeDuration',
    component: RecipeDuration,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        typographyVariant: {
            options: ['Paragraph/P12', 'Emphasis/E12'],
            control: { type: 'radio' },
        },
        minutes: {
            control: { type: 'number' },
        },
        showClock: {
            control: { type: 'boolean' },
        },
    },
};

export const WithClock = {
    args: {
        typographyVariant: 'Emphasis/E12',
        minutes: 45,
        showClock: true,
    },
};
export const NoClock = {
    args: {
        typographyVariant: 'Paragraph/P12',
        minutes: 30,
        showClock: false,
    },
};
