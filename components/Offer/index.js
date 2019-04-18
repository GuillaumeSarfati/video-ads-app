import React from 'react';

import * as UI from './ui';

export default props => (

  <UI.Component onPress={props.onPress}>
      <UI.Avatar/>

      <UI.Informations>
        <UI.Informations.Title>{props.id}</UI.Informations.Title>
        <UI.Informations.Subtitle>{props.title}</UI.Informations.Subtitle>
      </UI.Informations>

      <UI.Price>
        <UI.Price.Value>30€</UI.Price.Value>
        <UI.Price.Time>de l'heure</UI.Price.Time>
      </UI.Price>

      { props.children }

  </UI.Component>
)
