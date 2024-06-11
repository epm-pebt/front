import Counter from './Counter';

export default {
    title: 'Components/Atomic/Text-Elements/Counter',
    component: Counter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        status: {
            control: 'select',
            options: ['loading', 'error', 'idle', 'succeeded'],
        },
    },
};

export const Default = {
    args: {
        total: 25,
        isFiltered: false,
        status: 'loading',
    },
};
