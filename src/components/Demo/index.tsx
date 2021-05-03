import {Text, View} from 'react-native';

import React from 'react';

interface Props {
  text: string;
}
const Simple: React.FC<Props> = props => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>{props.text}</Text>
  </View>
);

export default Simple;
