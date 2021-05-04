import {StyleSheet} from 'react-native';
import {Size} from '../../_util';
import $Colors from './variable';

export default StyleSheet.create({
    container: {
        flex: 1,
        height: Size.height,
        backgroundColor: $Colors.bg,
        padding: 0,
    },
    flex_r: {
        display: 'flex',
        flexDirection: 'row',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    flex_c: {
        display: 'flex',
        flexDirection: 'column',
    },
    contentContainer: {},
});
