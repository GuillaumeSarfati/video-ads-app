import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export { Transition } from 'react-navigation-fluid-transitions';

export const  Component = styled.View`
                flex-direction: row;
                box-shadow: 0px 0px 30px #D6E2F5;
                margin-right: 15px;
                margin-bottom: 15px;
                background: white;
                border-radius: 16px;
              `;

export const  Pack = styled.TouchableOpacity`
                border-radius: 16px;
                background: white;
                width: 100%;
                padding: 32.5px;
              `;

              Pack.Header = styled.View`
                flex: 1;
                padding: 10px;
              `;

              Pack.Image = styled.Image`
                width: 34px;
                height: 34px;
              `;

              Pack.Title = styled.Text`
              `

              Pack.View = styled.Text`
                color: #384E71;
                opacity: 0.5;
                font-size: 11px;
                font-weight: bold;
                line-height: 15px;
              `;
