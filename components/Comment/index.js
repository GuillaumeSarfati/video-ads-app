import React from 'react';

import * as UI from './ui';

export default props => {
  const { model, member, rating } = props
  const { onPress } = props

  console.log('COMMENT : ', {model, member, rating});
  return (
    <UI.Transition shared="comment">
      <UI.Component style={{marginBottom: 30}}>
        <UI.Component.Row style={{alignItems: 'center'}}>
          <UI.Avatar source={{uri: member.picture}}/>
          <UI.Component.Column style={{justifyContent: 'center', marginLeft: 15}}>
            <UI.Component.Label dark>{member.firstname}</UI.Component.Label>
            {
              rating && (
                <UI.Rating model={{stars: rating.stars}} />
              )
            }
          </UI.Component.Column>
        </UI.Component.Row>
        <UI.Component.Description style={{marginLeft: 55, fontWeight: '500'}}>
          {model.text}
        </UI.Component.Description>
      </UI.Component>
    </UI.Transition>
  )
}
