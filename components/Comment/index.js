import React from 'react';

import * as UI from './ui';

export default props => {
  const { children, model, dark } = props
  const { onPress } = props
  return (
    <UI.Transition shared="comment">
      <UI.Component style={{marginBottom: 30}}>
        <UI.Component.Row style={{alignItems: 'center'}}>
          <UI.Avatar/>
          <UI.Component.Column style={{justifyContent: 'center', marginLeft: 15}}>
            <UI.Component.Label dark>Ewa Nowak</UI.Component.Label>
            <UI.Rating model={{stars: 4}} />
          </UI.Component.Column>
        </UI.Component.Row>
        <UI.Component.Description style={{marginLeft: 55, fontWeight: '500'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </UI.Component.Description>
      </UI.Component>
    </UI.Transition>
  )
}
