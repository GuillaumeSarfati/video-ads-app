import React from 'react';
import { NavigationActions } from 'react-navigation';
import { Platform, Linking, ActionSheetIOS } from 'react-native';

import connect from 'utils/connect';

import * as UI from './ui'

class OfferScreen extends React.Component {

  state = {
    offers: []
  }

  onNavigate = (screen, params) => e => {
    const { navigation } = this.props;

    screen
    ? navigation.navigate(screen, params)
    : navigation.pop()
  }

  componentWillMount = async () => {
    const { Offer, Comment, me } = this.props;
    const { offer } = this.props.navigation.state.params;

    Offer.setOne(offer)

    await Offer.findOne({
      filter: {
        where: { id: offer.id },
        include: [
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
          {
            relation: 'member',
            scope: {
              include: {
                relation: 'offers',
                scope: {
                  include: ['category', 'subCategory']
                },
              }
            }
          }
        ],
      }
    });

    Comment.find({
      filter:{
        where: { offerId: offer.id },
        include: ['member', 'rating'],
      }
    });


  }

  onPressOrder = offer => e => {
    ActionSheetIOS.showActionSheetWithOptions({
      options: ['Appeler', 'Annuler'],
      cancelButtonIndex: 1,
    },
    (buttonIndex) => {
      if (buttonIndex === 0) {
        const { Modal, Member, me, navigation } = this.props;


        if (me.allowedContacts) {
          Linking.openURL(Platform.OS === 'ios'
            ? `telprompt:${offer.member.phoneNumber}`
            : `tel:${offer.member.phoneNumber}`
          )
          Member.patchAttributesById(me.id, { allowedContacts: me.allowedContacts - 1 })
        } else {
          Modal.open(
            <UI.Modals.Recharge onPress={() => navigation.navigate('Shop')}/>
          )
        }
      }
    });
  }

  render() {
    const { offer, comments } = this.props;
    const { category, member } = offer;
    const { onPressOrder, onNavigate } = this
    console.log('offer : ', offer);
    console.log('category : ', category);
    console.log('member : ', member);
    return (
      <UI.Screen scroll>
        <UI.Screen.Header>
          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Back onPress={onNavigate()}>
              {category.title}
            </UI.Screen.Header.Bar.Back>

          </UI.Screen.Header.Bar>
          <UI.Transition shared={`offer${offer.id}`}>
          <UI.Offer
            model={offer}
            category={category}
            member={member}
            dark
          />
          </UI.Transition>
        </UI.Screen.Header>

        <UI.Screen.Content style={{padding: 30}}>
        <UI.Screen.Row style={{marginLeft: -7.5}}>
        <UI.Component.Video

          model={offer}
          controls={{
            favorite: true,
            share: true,
            sound: true,
          }}
          shouldPlay
          large
        />
        </UI.Screen.Row>
          <UI.Component.Action onPress={onNavigate()}>Voir la piece jointe</UI.Component.Action>
          <UI.Screen.Liner dark/>
          <UI.Screen.Label dark>DESCRIPTION DE LA POP ANNONCE</UI.Screen.Label>
          <UI.Screen.Description style={{fontWeight: '500', marginVertical: 30}}>
            { offer.description }
          </UI.Screen.Description>
          <UI.Screen.Liner dark/>
          <UI.Screen.Row style={{ justifyContent: 'space-between', alignItems: 'flex-start'}}>
            <UI.Screen.Label dark>COMMENTAIRES</UI.Screen.Label>
            <UI.Component.Action type="default" small onPress={onNavigate('Comment')}>Laisser un avis</UI.Component.Action>
          </UI.Screen.Row>

          {
            comments.map((comment, i) => (
              <UI.Comment
                key={`comment-${i.toString()}`}
                model={comment}
                member={comment.member}
                rating={comment.rating}
              />
            ))
          }

          <UI.Screen.Footer>
            <UI.Transition anchor={`offer${offer.id}`}>
              <UI.Button onPress={onPressOrder(offer)}>Contacter</UI.Button>
            </UI.Transition>
          </UI.Screen.Footer>

          <UI.Screen.Column style={{marginLeft: -15, marginRight: -30}}>
            <UI.Screen.Liner dark/>
            <UI.Screen.Label style={{paddingLeft: 15, marginBottom: 30}} dark>AUTRES POP ANNONCES DE {member.firstname.toUpperCase()}</UI.Screen.Label>

            {
              member.offers
                ? (
                  <UI.Component.Offers
                    models={member.offers}
                    onPress={offer => onNavigate('Offer', { offer })}
                  />
                )
                : null
            }
          </UI.Screen.Column>

        </UI.Screen.Content>

      </UI.Screen>
    )

  }
}

export default connect(
  state => ({
    me: state.me,
    offer: state.offer,
    comments: state.comments,
  }),
  (dispatch, props, models) => ({
    Offer: models.Offer,
    Comment: models.Comment,
    Member: models.Member,
    Modal: models.Modal,
  }),
)(OfferScreen);
