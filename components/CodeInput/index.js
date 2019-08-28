import React from 'react';

import * as UI from './ui'
// const TextInput = styled.TextInput`
//   height: 45;
//   background: white;
//   border-radius: 8px;
//   padding: 8px;
//   width: ${Dimensions.get("window").width - 60}px;
//   height: ${props => props.multiline ? 200 : 40}px;
//   margin-bottom: 15px;
//   margin: 2px;
// `

export default class CodeInput extends React.Component {
  state = {
    placeholder: ['•', '•', '•', '•'],
    code: '',
  }

  onChangeCode = code => {
    if (code.length === 4) {
      this.codeInput.blur()
    }
    this.setState({ code })
  }

  onPressCode = () => this.codeInput.focus()

  render() {
    return [
      <UI.TextInput
        style={{position: 'absolute', top: -1000}}
        ref={ref => this.codeInput = ref}
        maxLength={4}
        keyboardType="number-pad"
        value={this.state.value}
        onChangeText={this.onChangeCode}
      />,
      <UI.Component.TouchableOpacity
        onPress={this.onPressCode}
        style={{alignSelf: 'stretch', justifyContent: 'space-between'}}
      >
        <UI.Component.Row style={{alignSelf: 'stretch', justifyContent: 'space-between'}}>

        {
          this.state.placeholder.map((code, i) => (
            <UI.Gradient
              start={{x: 1, y: 1}} end={{x: 0, y: 0}}
              colors={[ 'rgba(222, 186, 221, 1)', 'rgba(172, 217, 242, 1)', 'rgba(183, 233, 236, 1)']}
              locations={[0,0.5, 1]}
              style={{padding: 3, borderRadius: 9}}
            >
            <UI.Case>
              <UI.Code>{this.state.code[i] || code}</UI.Code>
            </UI.Case>
            </UI.Gradient>
          ))
        }
        </UI.Component.Row>
      </UI.Component.TouchableOpacity>
    ]
  }
}

// <UI.CzseTextInput {...props} placeholderTextColor="rgb(155, 174, 201)"/>
