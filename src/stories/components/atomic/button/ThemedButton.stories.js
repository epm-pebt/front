import { fn } from '@storybook/test';
import ThemedButton from './ThemedButton';

export default {
    title: 'Components/Atomic/ThemedButton',
    component: ThemedButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: { type: 'radio' },
        },
    },
    args: { onClick: fn() },
}

export const Primary = {
    args: {
        variant: 'primary',
        label: 'Button text',
    }
}
export const Secondary = {
    args: {
        variant: 'secondary',
        label: 'Button text',
    }
}
export const Tertiary = {
    args: {
        variant: 'tertiary',
        label: 'Button text',
    }
}