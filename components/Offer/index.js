import React from 'react';

import * as UI from './ui';

export default props => {
  const { children, model, dark } = props
  const { onPress } = props
  return (

    <UI.Transition shared="offer">
      <UI.Component onPress={onPress}>
            <UI.Avatar source={{uri: model.member.picture}}/>

            <UI.Informations>
              <UI.Rating model={{ stars: 3 }}/>
              <UI.Informations.Title dark={dark}>{model.member.firstname}</UI.Informations.Title>
              <UI.Informations.Subtitle dark={dark}>{model.category.title}</UI.Informations.Subtitle>
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
