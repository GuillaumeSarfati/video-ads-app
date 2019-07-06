import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export Shadow from 'components/Shadow';
export Gradient from 'components/Gradient';
export Component from 'components/Component';

export const  Choice = styled.TouchableOpacity`
                  height: 55px;
                  border-radius: 18px;
                  overflow: hidden;
              `;

export const  Content = styled.View`
                  width: 100%;
                  height: 100%;
                  border-radius: 17px;
                  overflow: hidden;
                  background: white;
                  padding: 15px;
                  justify-content: space-between;
              `;

export const  Icon = styled.Image`
                  width: 60px;
                  height: 60px;
              `;


export const  Title = styled.Text`
                  color: rgb(65, 86, 118);
                  font-size: 16px;
                  font-weight: bold;
              `;

export const  Subtitle = styled.Text`
                  color: rgb(198, 204, 214);
                  font-size: 14px;
                  font-weight: bold;
              `;
