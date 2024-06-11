/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-links',
        '@storybook/addon-interactions',
        '@storybook/addon-themes',
        '@storybook/addon-a11y',
        '@storybook/addon-viewport',
        '@chromatic-com/storybook',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
};
export default config;
