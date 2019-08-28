import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui';

class Available extends React.Component {

  onPress = () => {
    const { Member, me } = this.props;

    Member.patchAttributesById(me.id, {
      available: me.available
        ? false
        : true
    })
  }

  render() {
    const { me } = this.props;
    const { onPress } = this;

    return (
      <UI.Choice onPress={onPress}>
      <UI.Content>
        <UI.Title>
          {
            me.available
            ? 'Disponible'
            : 'Indisponible'
          }
        </UI.Title>
      </UI.Content>
      </UI.Choice>
    )
  }
}

export default connect(
  state => ({
    me: state.me,
  }),
  (dispatch, props, models) => ({
    Member: models.Member,
  }),
)(Available);
