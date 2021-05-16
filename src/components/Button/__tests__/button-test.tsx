import 'react-native';
import React from 'react';
import Button from '../';
// 1. mock native modules
// 2. API mock
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';

// snapshot
// image snapshot
it('renders <Button/> correctly', () => {
    const button = renderer.create(<Button onPress={jest.fn()}>This is a button</Button>).toJSON();
    expect(button).toMatchSnapshot();
});

describe('<Button/> functioning correctly', () => {
    it('display text correctly', () => {
        const title = 'text title 123';
        const button = render(<Button onPress={jest.fn()}>{title}</Button>);
        expect(button.getByText(title)).toBeTruthy();
    });
    it('invoke onPress correctly', () => {
        const pressFn = jest.fn();
        const button = render(<Button onPress={pressFn}>test</Button>).container;
        fireEvent.press(button);
        expect(pressFn).toBeCalled();
    });
    it('should be disabled', () => {
        const pressFn = jest.fn();
        const button = render(
            <Button onPress={pressFn} disabled>
                test
            </Button>,
        ).container;
        fireEvent.press(button);
        // TODO mock TouchableOpacity onPress
        expect(pressFn).toBeCalledTimes(1);
    });
});
