import React from 'react';
import { NavigationActions } from 'react-navigation';
import { For } from 'react-loops';
import connect from 'utils/connect';

import * as UI from './ui'

class CreateScreen extends React.Component {
  constructor(props) {
    super(props)
    try {
      this.isNewInstance = false
      this.state = props.navigation.state.params.offer
    } catch (e) {
      this.isNewInstance = true
      this.state = {
        description: '',
        geolocDistance: 1,
        geoloc: this.props.me.geoloc,
        price: 20,
        category: {
          subCategories: []
        }
      }
    }
  }


  componentWillMount() {
    const { Category } = this.props;

    Category.find({
      filter: {
        include: 'subCategories'
      }
    })
  }

  onNavigate = screen => e => {
    const { navigation } = this.props;

    screen
    ? navigation.navigate(screen)
    : navigation.pop()
  }


  onChange = (...properties) => (...values) => {
    properties.forEach((property, i) => this.setState({[property]: values[i]}))
  }

  onCreate = async () => {
    const { Offer, navigation, me } = this.props;
    const offer = this.state;

    await Offer.create({
      // Mock
      video: 'pop-eye-api-videos/f87cf080-6aa0-11e9-84d1-75bab81b650e-e3fd0daf-ea18-4f3d-9263-91bbcf43df25.mov',
      memberId: me.id,
      ...offer,
    })

    navigation.navigate('Options')
  }

  onEdit = async () => {
    const { Offer, navigation, me } = this.props;
    const offer = this.state;

    await Offer.patchAttributesById(offer.id, offer)

    navigation.pop()
  }

  onDelete = async () => {
    const { Offer, navigation, me } = this.props;
    const offer = this.state;

    await Offer.deleteById(offer.id)

    navigation.pop()
  }

  getLocationAsync = async () => {
    const { Member, me } = this.props;
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    Member.patchAttributesById(me.id, {
      geoloc: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      }
    })
  };

  render() {
    const offer = this.state;
    const { categories } = this.props
    const { onChange, onCreate, onEdit, onDelete, onNavigate } = this

    return (
      <UI.Screen scroll>

        <UI.Screen.Header>
          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Back onPress={onNavigate()}>
              Enregistrer une Pop Annonce
            </UI.Screen.Header.Bar.Back>
          </UI.Screen.Header.Bar>
          <UI.Screen.Header.Title dark>Pop Annonce</UI.Screen.Header.Title>
        </UI.Screen.Header>

        <UI.Screen.Content>
          <UI.Screen.Column style={{paddingHorizontal: 30}}>
            <UI.Component.Video large/>
          </UI.Screen.Column>
          <UI.ScrollView contentContainerStyle={{paddingHorizontal: 30, paddingTop: 30, paddingBottom: 30}} horizontal showsHorizontalScrollIndicator={false}>
            <For of={categories} as={category => (
              <UI.Component.Choice
                selected={offer.categoryId === category.id}
                icon={require('assets/images/categories/default.png')}
                onPress={() => onChange('category', 'categoryId')(category, category.id)}
                title={category.title}
                subtitle={'lorem ipsum dolor sit amet...'}
                style={{marginRight: 15}}
              />
            )}/>
          </UI.ScrollView>
          <UI.ScrollView contentContainerStyle={{paddingHorizontal: 30, paddingBottom: 30}} horizontal showsHorizontalScrollIndicator={false}>
            <For of={offer.category.subCategories} as={subCategory => (
              <UI.Component.SubChoice
                selected={offer.subCategoryId === subCategory.id}
                onPress={() => onChange('subCategoryId')(subCategory.id)}
                title={subCategory.title}
                style={{marginRight: 7.5}}
              />
            )}/>
          </UI.ScrollView>
          <UI.Screen.Column style={{paddingHorizontal: 30}}>
            <UI.Screen.Label dark>DESCRIPTION DE LA POP ANNONCE</UI.Screen.Label>
            <UI.Component.TextInput
              value={this.state.description}
              onChangeText={onChange('description')}
              placeholder="Description"
              multiline
            />
            <UI.Screen.Liner dark/>
          </UI.Screen.Column>
          <UI.Price values={[this.state.price]} onChange={onChange('price')}/>
          <UI.Distance
            geoloc={this.state.geoloc}
            distance={this.state.geolocDistance}
            onChangeGeoloc={onChange('geoloc')}
            onChangeDistance={onChange('geolocDistance')}
          />
        </UI.Screen.Content>

        <UI.Screen.Footer>
          {
            this.isNewInstance
              ? <UI.Button onPress={onCreate} large>Créer</UI.Button>
              : <UI.Button onPress={onEdit} large>Editer</UI.Button>
          }
          {
            this.isNewInstance
              ? null
              : <UI.Button onPress={onDelete} type="default" large>Supprimer</UI.Button>
          }

        </UI.Screen.Footer>

      </UI.Screen>
    )

  }
}

export default connect(
  state => ({
    me: state.me,
    categories: state.categories,
  }),
  (dispatch, props, models) => ({
    Offer: models.Offer,
    Category: models.Category,
  }),
)(CreateScreen);
