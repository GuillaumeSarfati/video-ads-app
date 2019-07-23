import React from 'react';
import * as UI from './ui';

const colors = {
  selected: [ 'rgba(222, 186, 221, 1)', 'rgba(172, 217, 242, 1)', 'rgba(183, 233, 236, 1)'],
  unselected: [ 'rgba(222, 186, 221, 0)', 'rgba(172, 217, 242, 0)', 'rgba(183, 233, 236, 0)'],
}

const pictures = {
  'assets/images/packs/wallet.png': require('assets/images/packs/wallet.png'),
  'assets/images/packs/bag.png': require('assets/images/packs/bag.png'),
  'assets/images/packs/bags.png': require('assets/images/packs/bags.png'),
  'assets/images/packs/chest.png': require('assets/images/packs/chest.png'),
}
export default ({style, selected, model, onPress}) => {
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
          <UI.Icon source={pictures[model.picture]}/>
          <UI.Title>{model.title}</UI.Title>
          <UI.Subtitle>{model.description}</UI.Subtitle>
        </UI.Content>
        </UI.Gradient>
      </UI.Choice>
      </UI.Shadow>
    )

}
