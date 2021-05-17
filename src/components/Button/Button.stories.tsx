import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button from '.';

const ButtonModule = storiesOf('Button', module);
ButtonModule.add('Default Button', () => (
    <View style={{ width: 200, margin: 50 }}>
        <Button>themebutton</Button>
    </View>
));

ButtonModule.add('Disabled Button', () => (
    <View style={{ width: 200, margin: 50 }}>
        <Button disabled>Disabled</Button>
    </View>
));

/**
 * The following is stories with knobs, but it seems only working on web stroybook instead React Native simulator.
 *
 */
// export default {
//     title: '01 - Button',
//     decorators: [withKnobs],
//     component: Button,
// };

// const toggleGroupId = 'Toggles';
// const valueGroupId = 'Values';

// const defaultButtonProps = () => ({
//     children: text('title', 'default button', valueGroupId),
//     disabled: boolean('disabled', false, toggleGroupId),
//     title: 'default button',
//     onPress: () => {},
// });

// const disabledButtonProps = () => ({
//     children: text('title', 'disabled button', valueGroupId),
//     disabled: boolean('disabled', true, toggleGroupId),
//     title: 'disabled button',
//     onPress: () => {},
// });

// export const defaultButton = () => {
//     const { children } = defaultButtonProps();
//     return (
//         <View style={{ width: 200, margin: 50 }}>
//             <Button {...defaultButtonProps()}>{children}</Button>
//         </View>
//     );
// };

// export const disabledButton = () => {
//     const { children } = disabledButtonProps();
//     return (
//         <View style={{ width: 200, margin: 50 }}>
//             <Button {...disabledButtonProps()}>{children}</Button>
//         </View>
//     );
// };
