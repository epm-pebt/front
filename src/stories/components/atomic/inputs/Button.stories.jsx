import { fn } from '@storybook/test';
import ListIcon from '../icons/ListIcon';
import Button from './Button';
import { ecoBitesUi } from '../../../../theme';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'Components/Atomic/Inputs/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        variant: {
            control: { type: 'radio' },
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
    args: {
        variant: 'primary',
        label: 'Button text',
    },
};
export const Secondary = {
    args: {
        variant: 'secondary',
        label: 'Button text',
    },
};
export const Tertiary = {
    args: {
        variant: 'tertiary',
        label: 'Button text',
    },
};

export const Tag = {
    args: {
        variant: 'tag',
        label: 'Name',
    },
};

export const TagWithIcon = {
    args: {
        variant: 'tag',
        label: 'Name',
        startIcon: <ListIcon />,
    },
};

export const TagSelected = {
    args: {
        variant: 'tag-selected',
        label: 'Name',
    },
};

export const TagSelectedWithIcon = {
    args: {
        variant: 'tag-selected',
        label: 'Name',
        startIcon: <ListIcon fill={ecoBitesUi.palette.green.primary} />,
    },
};
