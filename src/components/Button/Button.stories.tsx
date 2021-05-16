import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
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
