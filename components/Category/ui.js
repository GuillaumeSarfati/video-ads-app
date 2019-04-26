import styled from 'styled-components/native';
import CategoryTitle from 'components/Category/Title';
import { Dimensions } from 'react-native';

export { Transition } from 'react-navigation-fluid-transitions';

export const  Component = styled.View`
                width: ${(Dimensions.get('window').width - 45) / 2}px;
                height: ${(Dimensions.get('window').width - 45) / 2}px;
                flex-direction: row;
                box-shadow: 0px 0px 30px #D6E2F5;
                margin-right: 15px;
                margin-bottom: 15px;
                background: white;
                border-radius: 16px;
              `;

export const  Category = styled.TouchableOpacity`
                border-radius: 16px;
                background: white;
                width: 100%;
                padding: 32.5px;
              `;

              Category.Header = styled.View`
                flex: 1;
                padding: 10px;
              `;

              Category.Image = styled.Image`
                width: 34px;
                height: 34px;
              `;

              Category.Title = CategoryTitle

              Category.View = styled.Text`
                color: #384E71;
                opacity: 0.5;
                font-size: 11px;
                font-weight: bold;
                line-height: 15px;
              `;
