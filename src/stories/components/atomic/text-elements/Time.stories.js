import Time from './Time';

export default {
    title: 'Components/Atomic/Text-Elements/Time',
    component: Time,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        minutes: {
            control: { type: 'number' },
        },
        variant: {
            options: ['Emphasis/E12', 'Paragraph/P12'],
            control: { type: 'radio' },
        },
    },
};

export const WithMinutesEmphasis = {
    args: {
        minutes: 30,
        variant: 'Emphasis/E12',
    },
};
export const WithHourRegular = {
    args: {
        minutes: 90,
        variant: 'Paragraph/P12',
    },
};
