/** @type { import('@storybook/react').Preview } */
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';

import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        withThemeFromJSXProvider({
            themes: { theme },
            defaultTheme: 'theme',
            Provider: ThemeProvider,
        })
    ]
};

export default preview;
