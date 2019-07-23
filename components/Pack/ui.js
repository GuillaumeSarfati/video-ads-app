import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export Shadow from 'components/Shadow';
export Gradient from 'components/Gradient';
export Component from 'components/Component';

export const  Choice = styled.TouchableOpacity`
                  width: ${(Dimensions.get("window").width - 90) / 2}px;
                  height: ${(Dimensions.get("window").width - 90) / 2 * 1.25}px;
                  border-radius: 18px;
                  overflow: hidden;
              `;

export const  Content = styled.View`
                  width: 100%;
                  height: 100%;
                  border-radius: 17px;
                  overflow: hidden;
                  background: white;
                  justify-content: center;
                  align-items: center;
                  padding-bottom: 15px;
              `;

export const  Icon = styled.Image`
                  width: ${(Dimensions.get("window").width - 90) / 2}px;
                  height: ${(Dimensions.get("window").width - 90) / 2}px;
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
