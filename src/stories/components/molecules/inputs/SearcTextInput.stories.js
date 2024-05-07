import { fn } from '@storybook/test';
import SearchTextInput from './SearchTextInput';

export default {
    title: 'Components/molecules/Inputs/SearchTextInput',
    component: SearchTextInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        searchTerm: {
            control: {
                type: 'text',
            },
        },
    },
    args: { handleSearchChange: fn() },
};

export const Default = {
    args: {
        searchTerm: '',
    },
};
