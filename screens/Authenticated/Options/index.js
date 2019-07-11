import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class OptionsScreen extends React.Component {
  state = {
    options: [
      {
        title: 'Option 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        selected: false,
      },
      {
        title: 'Option 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        selected: false,
      },
      {
        title: 'Option 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
        selected: false,
      }
    ]
  }
  componentWillMount = async () => {
    const { Model } = this.props;
  }

  onNavigate = screen => e => {
    const { navigation } = this.props

    navigation.navigate(screen)
  }

  onContinue = () => e => {
    const { navigation } = this.props;
    const { options } = this.state;
    let screen = 'FlowSupplier'

    options.forEach(option => {
      if (option.selected) {
        screen = 'Wallet'
      }
    })

    navigation.navigate(screen)
  }

  onChange = model => selected => {
    const options = this.state.options.map(option => {
      return option.title === model.title
        ? {...option, selected}
        : option
    })
    this.setState({ options })
  }
  render() {
    const { options } = this.state;
    const { onNavigate, onChange, onContinue } = this;

    return (
      <UI.Screen scroll>

      <UI.Screen.Header>
        <UI.Screen.Header.Bar>
          <UI.Screen.Header.Bar.Back onPress={onNavigate()}>
            Création de votre Pop Annonce
          </UI.Screen.Header.Bar.Back>

        </UI.Screen.Header.Bar>
        <UI.Screen.Header.Title dark>Choisissez vos options</UI.Screen.Header.Title>
      </UI.Screen.Header>

        <UI.Screen.Content style={{ justifyContent: 'center', alignItems: 'center' }}>
          <UI.Screen.Column style={{padding: 30}}>
          {
            options.map(option => (
              <UI.Component.Option
                value={option.selected}
                onChange={onChange}
                model={option}
              />
            ))
          }
          </UI.Screen.Column>
        </UI.Screen.Content>

        <UI.Screen.Footer>
          <UI.Component.Button onPress={onContinue()} large>Continuer</UI.Component.Button>
        </UI.Screen.Footer>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({}),
  (dispatch, props, models) => ({}),
)(OptionsScreen);
