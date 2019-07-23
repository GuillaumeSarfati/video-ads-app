import React from 'react';

import * as UI from './ui';

const currencies = {
  EUR: '€',
  USD: '$',
}
const Offer = props => {

  const { children, model, category, member, dark } = props
  const { onPress } = props
  return (

    <UI.Transition shared="offer">
      <UI.Offer onPress={onPress}>
            <UI.Avatar source={{uri: member.picture}}/>

            <UI.Informations>
              <UI.Informations.Title dark={dark}>{member.firstname}</UI.Informations.Title>
              {
                model.ratings
                ? <UI.Rating model={{ stars: model.ratings }}/>
                : null
              }
              <UI.Informations.Subtitle dark={dark}>
              <UI.Component.DistanceInformations model={model}/>
              </UI.Informations.Subtitle>
              <UI.Informations.Subtitle dark={dark}>{category.title}</UI.Informations.Subtitle>

            </UI.Informations>

            <UI.Price>
              <UI.Price.Value dark={dark}>{model.price}{currencies[model.currency]}</UI.Price.Value>
              <UI.Price.Time dark={dark}>de l'heure</UI.Price.Time>
            </UI.Price>

            { children }

      </UI.Offer>
    </UI.Transition>
  )
}

Offer.Title = UI.Title;
Offer.Subtitle = UI.Subtitle;

export default Offer;
