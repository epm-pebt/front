import { ecoBitesUi } from '../../../../theme';
import ListIcon from './ListIcon';

export default {
    title: 'Components/Atomic/Icons/ListIcon',
    component: ListIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        fill: {
            name: 'List Icon',
            description: `Color is one of: `,
            control: {
                type: 'color',
                presetColors: [
                    ecoBitesUi.palette.grey.secondary,
                    ecoBitesUi.palette.green.primary,
                ],
            },
        },
    },
};

export const Default = {
    args: {
        fill: ecoBitesUi.palette.grey.secondary,
    },
};

export const WithColor = {
    args: {
        fill: ecoBitesUi.palette.green.primary,
    },
};
