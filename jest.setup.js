jest.mock('react-native/Libraries/Components/Touchable/TouchableOpacity', () => {
    const RealComponent = require.requireActual('react-native/Libraries/Components/Touchable/TouchableOpacity');
    const React = require('react');
    const MockTouchableOpacity = (props) => {
        const { children, disabled, onPress } = props;
        return React.createElement('TouchableOpacity', { ...props, onPress: disabled ? () => {} : onPress }, children);
    };
    MockTouchableOpacity.propTypes = RealComponent.propTypes;
    return MockTouchableOpacity;
});
