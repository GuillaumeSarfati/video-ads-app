import styled from 'styled-components/native';
import Gradient from 'components/Gradient';

export { LayoutAnimation, View } from 'react-native';

export const  Component = styled.View`
                justify-content:center;
              `;
export const  ButtonFocus = styled(Gradient)`
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 8px 16px;
                border-radius: 32px;
                overflow: hidden;
                background: ${props => props.current ? '#D7D7D7': 'white'};
              `;
              ButtonFocus.Image = styled.View`
                width: 28px;
                height: 28px;
                background: white;
                border-radius: 15px;
              `;

              ButtonFocus.Text = styled.Text`
                color: #777;
                margin-left: 8px;
              `;

export const  Button = styled.TouchableOpacity`

              `;

              Button.Image = styled.View`
                width: 28px;
                height: 28px;
                background: #D7D7D7;
                border-radius: 15px;
              `;

              Button.Text = styled.Text`
                color: #444;
                margin-left: 8px;
              `;
