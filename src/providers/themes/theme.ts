import { TextStyle, ViewStyle } from 'react-native'
import { Size } from '../../_util'
import $Colors from './variable'

export default {
  ...$Colors,
  font_size_title: 21,
  text: {
    color: $Colors.normalText,
  } as TextStyle,

  wrapper: {
    flex: 1,
    height: Size.height,
    backgroundColor: $Colors.bg,
    padding: 0,
  } as ViewStyle,

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,

  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,

  flexRowLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  } as ViewStyle,

  flexRowRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  } as ViewStyle,

  flexRowSpaceBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,

  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,

  shadow: {
    backgroundColor: $Colors.white,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowColor: $Colors.lightText,
    shadowRadius: 4,
    elevation: 4,
  } as ViewStyle,

  textWithShadow: {
    textShadowColor: $Colors.lightText,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  } as ViewStyle,

  primaryBtn: {
    backgroundColor: $Colors.primary,
    height: 44,
    lineHeight: 44,
    textAlign: 'center',
    color: $Colors.white,
  } as ViewStyle,

  br: {
    height: 10,
  } as ViewStyle,
  br15: {
    height: 15,
  } as ViewStyle,
  br20: {
    height: 20,
  } as ViewStyle,
}
