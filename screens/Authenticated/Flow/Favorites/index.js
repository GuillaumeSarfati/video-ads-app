import React from 'react';
import { Platform, Linking, ActionSheetIOS } from 'react-native';

import connect from 'utils/connect';

import * as UI from './ui'

class OffersScreen extends React.Component {

  componentWillMount() {
    const { Favorites, me } = this.props;

      Favorites.find({
        filter: {
          where: {
            memberId: me.id
          },
          include: {
            relation: 'offer',
            scope: {
              include: [
                'member',
                'category',
                'subCategory',
                {
                  relation: 'favorite',
                  scope: {
                    where: {
                      memberId: me.id
                    }
                  }
                },
              ],
            }
          }
        }
      })
  }

  onPressDetails = offer => e => {
    this.props.Offer.setOne(offer)
    this.props.navigation.navigate('Offer', { offer })
  }

  onNavigate = screen => e => {
    const { navigation } = this.props

    screen
      ? navigation.navigate(screen)
      : navigation.pop()
  }

  render() {
    const { favorites } = this.props;
    const { onNavigate, onPressDetails } = this;

    return (
      <UI.Screen style={{flex: 1}} scroll>

        <UI.Screen.Header>

          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Back  onPress={onNavigate()}>
              Favoris
            </UI.Screen.Header.Bar.Back>
          </UI.Screen.Header.Bar>

        </UI.Screen.Header>

        <UI.Screen.Title  style={{marginBottom: 30}} dark>
          Favoris
        </UI.Screen.Title>

        <UI.Screen.Column style={{paddingLeft: 15}}>
          <UI.Component.Offers
            models={favorites.map(({offer}) => offer )}
            onPress={offer => onPressDetails(offer)()}
          />
        </UI.Screen.Column>

      </UI.Screen>
    )
  }

}

export default connect(
  state => ({
    me: state.me,
    category: state.category,
    favorites: state.favorites,
    offers: state.offers,
  }),
  (dispatch, props, models) => ({
    Favorites: models.Favorites,
    Category: models.Category,
    User: models.User,
    Offer: models.Offer,
  }),
)(OffersScreen);
