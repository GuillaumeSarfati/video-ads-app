import React from 'react';

import * as UI from './ui';

export default props => {

  console.log('[ COMPONENT OFFER ] render : ', props);
  return (

    <UI.Transition shared="offer">
      <UI.Component onPress={props.onPress}>
            <UI.Avatar/>

            <UI.Informations>
              <UI.Rating model={{ stars: 3 }}/>
              <UI.Informations.Title>Ewa {props.model.id.substr(16)}</UI.Informations.Title>
              <UI.Informations.Subtitle>baby-sitter</UI.Informations.Subtitle>
            </UI.Informations>

            <UI.Price>
              <UI.Price.Value>{props.model.price}{props.model.currency}</UI.Price.Value>
              <UI.Price.Time>de l'heure</UI.Price.Time>
            </UI.Price>

            { props.children }

      </UI.Component>
    </UI.Transition>
  )
}
