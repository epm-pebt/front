import PageTitle from './PageTitle';

export default {
    title: 'Components/Atomic/Text-Elements/PageTitle',
    component: PageTitle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: { type: 'text' },
        },
    },
};

export const Title = {
    args: {
        title: 'What are you cooking today?',
    },
};
