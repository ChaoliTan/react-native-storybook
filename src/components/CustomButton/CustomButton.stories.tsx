import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text } from '@storybook/addon-knobs';

import defaultTheme from '../../providers/themes/default';
import { DefaultButton, PrimaryButton } from '.';

export default {
    title: 'Custom Button',
    decorators: [withKnobs],
};

const textGroupId = 'Text';

const getDefaultConfigurableProps = () => ({
    // Color
    title: text('title', '抢购', textGroupId),
    color: text('color', defaultTheme.color_text_base_inverse, textGroupId),
    backgroundColor: text('backgroundColor', defaultTheme.brand_primary, textGroupId),
});

export const defaultButton = () => <DefaultButton {...getDefaultConfigurableProps()} />;
export const primaryButton = () => <PrimaryButton />;
