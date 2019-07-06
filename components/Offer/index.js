import React from 'react';

import * as UI from './ui';

export default props => {

  const { children, model, category, member, dark } = props
  const { onPress } = props
  return (

    <UI.Transition shared="offer">
      <UI.Component onPress={onPress}>
            <UI.Avatar source={{uri: member.picture}}/>

            <UI.Informations>
              <UI.Rating model={{ stars: 3 }}/>
              <UI.Informations.Title dark={dark}>{member.firstname}</UI.Informations.Title>
              <UI.Informations.Subtitle dark={dark}>{category.title}</UI.Informations.Subtitle>
            </UI.Informations>

            <UI.Price>
              <UI.Price.Value dark={dark}>{model.price}{model.currency}</UI.Price.Value>
              <UI.Price.Time dark={dark}>de l'heure</UI.Price.Time>
            </UI.Price>

            { children }

      </UI.Component>
    </UI.Transition>
  )
}
