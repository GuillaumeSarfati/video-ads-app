import React from 'react';
import * as UI from './ui';

const colors = {
  selected: [ 'rgba(222, 186, 221, 1)', 'rgba(172, 217, 242, 1)', 'rgba(183, 233, 236, 1)'],
  unselected: [ 'rgba(222, 186, 221, 0)', 'rgba(172, 217, 242, 0)', 'rgba(183, 233, 236, 0)'],
}
export default ({style, selected, icon, onPress, title, subtitle, description, ...props}) => {
    return (
      <UI.Shadow>
      <UI.Choice style={style} onPress={onPress}>
        <UI.Gradient
          start={{x: 1, y: 1}} end={{x: 0, y: 0}}
          colors={selected ? colors.selected : colors.unselected}
          locations={[0,0.5, 1]}
          style={{width: '100%', height: '100%', padding: 3}}
        >
        <UI.Content>
          <UI.Icon source={icon}/>
          <UI.Title>{title}</UI.Title>
          <UI.Subtitle>{subtitle || description}</UI.Subtitle>
        </UI.Content>
        </UI.Gradient>
      </UI.Choice>
      </UI.Shadow>
    )

}
