import styled from 'styled-components/native';

export Component from 'components/Component';
export { TextInput } from 'react-native';
export { Ionicons as Icon } from '@expo/vector-icons';

export const Search = styled.View`
  background: white;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 15px;
`


export const  List = styled.View`
                align-self: stretch;
                padding: 30px;
                flex: 1;
              `

              List.Title = styled.Text`
                padding: 15px;
                opacity: 0.75;
                color: #384E71;
                font-size: 12px;
                font-weight: 900;
                letter-spacing: 0.86px;
                line-height: 16px;
              `

              List.Item = styled.TouchableOpacity`
                border: 0px solid #D7D7D7;
                border-top-width: 1px;
                padding: 20px;
              `

              List.Item.Title = styled.Text`
                color: #384E71;
                font-size: 14px;
                font-weight: 900;
                line-height: 19px;
              `
