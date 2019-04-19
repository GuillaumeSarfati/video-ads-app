import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

export default props => {
  const { offer } = props.navigation.state.params

  return (
    <UI.Screen>
      <UI.Content>
      <UI.Transition shared={`offer${offer.id}`}>
        <UI.Offer {...offer}/>
      </UI.Transition>
        <UI.Description>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quinon numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </UI.Description>
      <UI.Transition anchor={`offer${offer.id}`}>
        <UI.Button onPress={() => props.navigation.goBack()}>Go Back</UI.Button>
      </UI.Transition>
      </UI.Content>
    </UI.Screen>
  )

}
