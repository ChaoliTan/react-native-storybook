import React, { useContext, useState } from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { ThemeContext, useTheme } from '../../providers/themes';

export interface Button {}

const ThemedButton = (props) => {
    const themeWithProps = useTheme(props);

    return (
        <Pressable style={{ color: themeWithProps.brand_primary, backgroundColor: themeWithProps.brand_important }}>
            <Text>Button</Text>
        </Pressable>
    );
};

export default ThemedButton;

const styles = StyleSheet.create({
    color: {},
});
