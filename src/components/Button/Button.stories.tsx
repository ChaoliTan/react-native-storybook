import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Button from '.';

storiesOf('Button', module).add('Default Button', () => (
    <View style={{width: 200, margin: 50}}>
        <Button size="normal">themebutton</Button>
    </View>
));
