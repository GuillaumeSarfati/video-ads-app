import React from 'react';
import * as UI from './ui';

import { LinearTextGradient } from "react-native-text-gradient";

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

        {
          current
          ? (
            <UI.ButtonFocus
              start={{x: 0.0, y: 1}} end={{x: 1, y: 1.0}}
              colors={colors}
              locations={locations}
            >
              <UI.Icon current={current}>{children}</UI.Icon>
              <LinearTextGradient
                style={{fontSize: 18, marginLeft: 8 }}
                locations={[0, 1]}
                colors={['#A97CCC', '#2F89F8']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
              {current ? children : null}
              </LinearTextGradient>
            </UI.ButtonFocus>
          )
          : (
            <UI.ButtonFocus
              start={{x: 0.0, y: 1}} end={{x: 1, y: 1.0}}
              colors={['transparent', 'transparent']}
              locations={locations}
            >
            <UI.Icon current={current}>{children}</UI.Icon>
            </UI.ButtonFocus>
          )

        }

        </UI.Button>
      </UI.Component>
    )
  }
}
