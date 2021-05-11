import {Dimensions, Platform, StatusBar} from 'react-native';
// 所有具有流海的iPhone设备
const Sizes = [
    [375, 812], // iPhoneX, iPhone12Mini
    [320, 693], // iPhoneX, iPhone12Mini(zoomed)
    [390, 844], // iPhone12
    [414, 896], // iPhoneXS
    [428, 926], // iPhone12ProMax
];
const {height: W_HEIGHT, width: W_WIDTH, scale} = Dimensions.get('window');
let isIPhoneWithMonobrow_v = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
    const mached = Sizes.find((s) => {
        return s[0] === W_WIDTH && s[1] === W_HEIGHT;
    });
    if (mached) {
        isIPhoneWithMonobrow_v = true;
    }
}

export default function (skipAndroid?: boolean) {
    return Platform.select({
        ios: isIPhoneWithMonobrow_v ? 44 : 20,
        android: skipAndroid ? 0 : StatusBar.currentHeight,
        default: 0,
    });
}
