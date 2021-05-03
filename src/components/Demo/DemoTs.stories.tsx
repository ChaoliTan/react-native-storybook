import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Simple from '.'

storiesOf('Demo', module).add('simple', () => <Simple text={'Typescript works!!@@!'} />)
