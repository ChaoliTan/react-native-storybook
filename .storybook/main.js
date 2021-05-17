const custom = require('../webpack.config');
const path = require('path');

module.exports = {
    stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-knobs',
        {
            name: '@storybook/addon-storysource',
            options: {
                rule: {
                    test: [/\.stories\.tsx?$/], // This is default
                    include: [path.resolve(__dirname, '../src')], // You can specify directories
                },
                loaderOptions: {
                    injectStoryParameters: false,
                },
            },
        },
    ],
    webpackFinal: (config) => {
        return {
            ...config,
            resolve: {
                ...custom.resolve,
                alias: { ...config.resolve.alias, ...custom.resolve.alias },
            },
            module: { ...config.module, rules: custom.module.rules },
        };
    },
};
