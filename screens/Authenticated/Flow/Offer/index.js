import React from 'react';
import { NavigationActions } from 'react-navigation';
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
    const { Offer, Comment } = this.props;
    const { offer } = this.props.navigation.state.params;

    Offer.setOne(offer)

    if (!this.props.offer || this.props.offer.id !== offer.id) {
      await Offer.find({
        filter: {
          where: { id: offer.id },
          include: ['category', 'member'],
        }
      });
    }

    Comment.find({
      filter:{
        where: { offerId: offer.id },
        include: ['member', 'rating'],
      }
    });


  }

  componentDidMount = async () => {
    const { Offer, Comment } = this.props;
    const { offer } = this.props.navigation.state.params;

    const offers = (await Offer.find({
      filter: {
        where: { memberId: offer.memberId },
        include: ['member', 'category', 'subCategory'],
      }
    })).value.data

    this.setState({ offers })

  }
  render() {
    const { offer, comments } = this.props;
    const { offers } = this.state
    const { category, member } = offer;
    const { onNavigate } = this

    console.log('OFFFFFERS : ', offers);
    return (
      <UI.Screen scroll>
        <UI.Screen.Header>
          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Back onPress={onNavigate()}>
              {category.title}
              {/*<UI.Category>{category.title}</UI.Category>*/}
              {/*<UI.Screen.Header.Title dark>{category.title}</UI.Screen.Header.Title>*/}
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
          <UI.Component.Video large/>
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
            comments.map(comment => (
              <UI.Comment
                model={comment}
                member={comment.member}
                rating={comment.rating}
              />
            ))
          }

          <UI.Screen.Column>
            <UI.Screen.Liner dark/>
            <UI.Screen.Label dark>POP ANNONCES</UI.Screen.Label>
            {/*<UI.Component.Offers
              model={offers || []}
              onPress={offer => onNavigate('Offer', { offer })}
            />*/}
          </UI.Screen.Column>

        </UI.Screen.Content>
        <UI.Screen.Footer>
          <UI.Transition anchor={`offer${offer.id}`}>
            <UI.Button onPress={onNavigate()}>Contacter</UI.Button>
          </UI.Transition>
        </UI.Screen.Footer>
      </UI.Screen>
    )

  }
}

export default connect(
  state => ({
    offer: state.offer,
    comments: state.comments,
  }),
  (dispatch, props, models) => ({
    Offer: models.Offer,
    Comment: models.Comment,
  }),
)(OfferScreen);
