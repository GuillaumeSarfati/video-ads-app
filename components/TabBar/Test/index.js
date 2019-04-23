import React from 'react';
import * as UI from './ui';

export default class Test extends React.Component {
  componentWillReceiveProps() {
    const CustomLayoutLinear = {
      duration: 300,
      create: {
        type: UI.LayoutAnimation.Types.linear,
        property: UI.LayoutAnimation.Properties.opacity,
      },
      update: {
        type: UI.LayoutAnimation.Types.linear,
      },
    };

    UI.LayoutAnimation.configureNext(CustomLayoutLinear);
  }

  render() {
    const { current, children } = this.props
    const { onPress } = this.props

    // TODO FIX Android Crash
    // const colors = current
    //   ? ['#8AFFCC15', '#3791EF15', '#FF72AD15']
    //   : ['transparent']
    //
    // const locations = current
    //   ? [0,0.3,1]
    //   : [0]

    const colors = ['#8AFFCC15', '#3791EF15', '#FF72AD15'];
    const locations = [0,0.3,1];

    return (
      <UI.Component>
        <UI.Button onPress={onPress}>

        <UI.ButtonFocus
          start={{x: 0.0, y: 1}} end={{x: 1, y: 1.0}}
          colors={colors}
          locations={locations}
        >
          {
            current
            ? <UI.ButtonFocus.Image/>
            : <UI.Button.Image/>
          }

          <UI.ButtonFocus.Text>{current ? children : null}</UI.ButtonFocus.Text>

        </UI.ButtonFocus>
        </UI.Button>
      </UI.Component>
    )
  }
}
