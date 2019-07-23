import React from 'react';

import * as UI from './ui';

export default ({ models, onPress }) => (
  <UI.Offers>
    {
      models.map((model, i) => (
        <UI.Component.TouchableOpacity
          key={`offer-${i.toString()}`}
          onPress={() => onPress(model, i)}
        >

          <UI.Component.Video
            model={model}
            controls={{
              favorite: true,
            }}
          />

          <UI.Component.Column style={{paddingLeft: 5, paddingBottom: 15}}>

            {
              model.rating && model.rating.stars
                ? <UI.Component.Rating model={{stars: model.rating.stars}} />
                : <UI.Component.Rating model={{stars: 0}} />
            }

            <UI.Component.Offer.Title>{model.price}€ de l'heure</UI.Component.Offer.Title>
            <UI.Component.Offer.Subtitle>{model.category.title} {
              model.subCategory
                ? '-' + model.subCategory.title
                : ''
            }</UI.Component.Offer.Subtitle>

          </UI.Component.Column>
        </UI.Component.TouchableOpacity>
      ))
    }
  </UI.Offers>
)
