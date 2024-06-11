import RecipeCookingTime from './RecipeCookingTime';

export default {
    title: 'Components/Molecules/Text-Elements/RecipeCookingTime',
    component: RecipeCookingTime,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        typographyVariant: {
            options: ['Paragraph/P12', 'Emphasis/E12'],
            control: { type: 'radio' },
        },
        time: {
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
        time: 45,
        showClock: true,
    },
};
export const NoClock = {
    args: {
        typographyVariant: 'Paragraph/P12',
        time: 30,
        showClock: false,
    },
};
