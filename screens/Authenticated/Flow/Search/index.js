import React from 'react';
import { NavigationActions } from 'react-navigation';
import { For } from 'react-loops';
import connect from 'utils/connect';

import * as UI from './ui'

class SearchScreen extends React.Component {
  state = {
    category: undefined,
    subCategory: undefined,
    price: [20, 140],
    distance: [0, 10],
    geoloc: this.props.me.geoloc,
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


  onSearch = async () => {
    const { Offer, navigation, me } = this.props;
    const { category, subCategory } = this.state;

    const offers = await Offer.find({
      filter: {
        where: {
          and: [
            {
              categoryId: category
                ? category.id
                : undefined
            },
            {
              subCategoryId: subCategory
                ? subCategory.id
                : undefined
            },
            {price: { between: this.state.price }},
          ],

          geoloc: {
            near: this.state.geoloc,
            maxDistance: this.state.distance,
            unit: 'kilometers'
          },
        },
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
      },
    });

    navigation.navigate('Offers', {
      title: 'Résultats de votre recherche'
    });

  }

  render() {
    const { price, distance } = this.state
    const { categories } = this.props
    const { onNavigate, onChange, onSearch } = this
    return (
      <UI.Screen scroll>

        <UI.Screen.Header>
          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Back onPress={onNavigate()}>
              Categories
            </UI.Screen.Header.Bar.Back>

          </UI.Screen.Header.Bar>
          <UI.Screen.Header.Title dark>Recherche</UI.Screen.Header.Title>
        </UI.Screen.Header>

        <UI.Screen.Content>

        <UI.Screen.Column style={{paddingHorizontal: 30}}>
          <UI.Screen.Label dark>CATEGORIES</UI.Screen.Label>
        </UI.Screen.Column>
        <UI.Screen.Column style={{justifyContent: 'center', }}>
          <UI.ScrollView contentContainerStyle={{padding: 30}} horizontal>
          <For of={categories} as={category => (
            <UI.Component.Choice
              selected={this.state.category === category}
              icon={require('assets/images/categories/default.png')}
              onPress={() => onChange('category')(category)}
              title={category.title}
              subtitle={'lorem ipsum dolor sit amet...'}
              style={{marginRight: 15}}
            />
          )}/>
          </UI.ScrollView>
          {
            this.state.category && this.state.category.subCategories && (
              <UI.ScrollView contentContainerStyle={{paddingHorizontal: 30, paddingBottom: 30}} horizontal showsHorizontalScrollIndicator={false}>
                <For of={this.state.category.subCategories} as={subCategory => (
                  <UI.Component.SubChoice
                    selected={this.state.subCategory === subCategory}
                    onPress={() => onChange('subCategory')(subCategory)}
                    title={subCategory.title}
                    style={{marginRight: 7.5}}
                  />
                )}/>
              </UI.ScrollView>
            )
          }
        </UI.Screen.Column>
        <UI.Screen.Column style={{paddingHorizontal: 30, marginBottom: 30}}>
          <UI.Screen.Liner dark/>
        </UI.Screen.Column>

        <UI.Price values={price} onChange={onChange('price')}/>
        <UI.Distance geoloc={this.state.geoloc} values={distance} onChangeGeoloc={onChange('geoloc')} onChangeDistance={onChange('distance')}/>

        </UI.Screen.Content>

        <UI.Screen.Footer>
          <UI.Button onPress={onSearch} large>Lancer la recherche</UI.Button>
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
    Category: models.Category,
    Offer: models.Offer,
  }),
)(SearchScreen);
