import React, { useContext } from 'react';
import merge from 'lodash.merge';
import { Theme, ThemeContext } from '@/style';
import { isShallowEqual } from '@/_util';

export interface UseThemeProps<T, S> {
    themeStyle?: (theme: Theme) => T;
    style?: S;
}
function useTheme<T = Theme, S = any>({ themeStyle, style }: UseThemeProps<T, S> = {}) {
    const theme = useContext(ThemeContext);
    const stylesRef = React.useRef<S | undefined>(undefined);
    const cached = React.useRef<T | any>(undefined);
    const SyntheticStyle = React.useMemo(() => {
        if (cached.current === undefined) {
            cached.current = themeStyle?.(theme) || theme;
        }

        if (!stylesRef.current || (style && !isShallowEqual(stylesRef.current, style))) {
            stylesRef.current = style;
            cached.current = merge<T, S>(cached.current, style || ({} as S));
        }

        return cached.current || {};
    }, [themeStyle, style, theme]);

    return SyntheticStyle;
}

export default useTheme;
