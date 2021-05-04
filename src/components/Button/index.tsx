import React, { useContext, useState } from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { ThemeContext, ThemeProvider, ThemeConsumer } from '../../providers/themes';

const ThemedButton = (props) => {
    const themes = useContext(ThemeContext);

    return (
        <Pressable {...props} style={{ color: themes.brand_primary, backgroundColor: themes.brand_important }}>
            <Text>Button</Text>
        </Pressable>
    );
};

export default ThemedButton;

const styles = StyleSheet.create({
    color: {},
});
