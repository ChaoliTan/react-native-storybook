import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { DefaultButton, PrimaryButton } from '.';

storiesOf('CustomButtom', module)
    .add('default', () => <DefaultButton />)
    .add('primary', () => <PrimaryButton />);
