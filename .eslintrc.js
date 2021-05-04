module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    parser: ['babel-eslint', '@typescript-eslint/parser'],
    extends: ['@react-native-community', 'eslint:recommended', 'plugin:react/recommended'],
    plugins: ['react', 'react-native', 'react-hooks'],
    rules: { semi: [2, 'always'] },
};
