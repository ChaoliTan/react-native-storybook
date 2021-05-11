import {Dimensions, InteractionManager} from 'react-native';

const Win = Dimensions.get('window');
export const Size = {
    width: Win.width,
    height: Win.height,
};
export {default as getStatusBarHeight} from './getStatusBarHeight';
export {getLocaleCode} from './getLocale';
/**
 * @description 当reactNavigation转场动画完成, 执行回调
 * @param fn
 * @param useRequestAnimationFrame
 */
export const onReady = (fn: () => void, useRequestAnimationFrame?: boolean) => {
    // Component is done animating
    if (useRequestAnimationFrame) {
        requestAnimationFrame(fn);
    } else {
        InteractionManager.runAfterInteractions(fn);
    }
};

export const nextTick = (fn?: () => void) =>
    new Promise((resolve, reject) => {
        if (fn && typeof fn === 'function') {
            requestAnimationFrame(fn);
            resolve(true);
        } else {
            requestAnimationFrame(() => resolve(true));
        }
    });
