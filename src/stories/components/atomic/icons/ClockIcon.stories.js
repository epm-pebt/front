import ClockIcon from './ClockIcon';

export default {
    title: 'Components/Atomic/Icons/ClockIcon',
    component: ClockIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
    },
};

export const Small = {
    args: {
        size: 'small',
    },
};
export const Medium = {
    args: {
        size: 'medium',
    },
};
export const Large = {
    args: {
        size: 'large',
    },
};
