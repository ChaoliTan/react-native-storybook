import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../providers/themes';

import ThemedButton from '../Button';

export type CustomeButtonProps = {
    title?: string;
};

const defaultTitle = '抢购';

const DefaultButton: React.FC<CustomeButtonProps> = (props) => {
    return (
        <View style={styles.centerContainer}>
            <ThemedButton {...props} />
        </View>
    );
};

const PrimaryButton: React.FC<CustomeButtonProps> = ({ title = '立即使用', theme }) => {
    const themes = useTheme();
    return (
        <View style={styles.centerContainer}>
            <ThemedButton
                title={title}
                theme={{
                    text: {
                        fontSize: 16,
                        lineHeight: 16,
                        color: 'black',
                    },
                    width: 112,
                    height: 50,
                    backgroundColor: themes.brand_primary,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                    ...theme,
                }}
            />
        </View>
    );
};

export { DefaultButton, PrimaryButton };

// 使用Button居中展示
const styles = StyleSheet.create({
    centerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%',
    },
});
