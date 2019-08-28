import React from 'react';

import * as UI from './ui';

import checked from 'assets/images/checkbox/checked.png';
import empty from 'assets/images/checkbox/empty.png';

export default class CheckBoxComponent extends React.Component {
  onPress = () => {
    const { type, value, onChange } = this.props;

    onChange(type === value
      ? null
      : type
    )
  }

  render() {
    const { type, value, placeholder } = this.props
    const { onPress } = this

    return (
      <UI.Component.TouchableOpacity onPress={onPress} style={{marginBottom: 15, flexDirection: 'row', alignItems: 'center'}}>
        <UI.Component.Image
          style={{
            width: 30,
            height: 30,
            marginRight: 15,
          }}
          source={value === type
            ? checked
            : empty
          }
        />
        <UI.Component.Text>{ placeholder }</UI.Component.Text>
      </UI.Component.TouchableOpacity>
    )
  }
}
