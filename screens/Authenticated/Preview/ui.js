import styled from 'styled-components/native';

export Screen from 'components/Screen';
export Component from 'components/Component';
export Category from 'components/Category';
export Text from 'components/Text';
export Button from 'components/Button';

export Gradient from 'components/Gradient';
export { Camera } from 'expo-camera';
export { Dimensions } from 'react-native';
export * as Permissions from 'expo-permissions';

export const Record = styled.Image`
                        width: 80px;
                        height: 80px;
                      `

export const Informations = styled.Text`
                              opacity: 0.5;
                              color: #FFFFFF;
                              font-size: 13px;
                              font-weight: 900;
                              line-height: 18px;
                              text-align: center;
                            `
export const StartRecord = styled.TouchableOpacity`
                width: 80px;
                height: 80px;
                background: #2F89F8;
                border-radius: 40px;
                margin: 30px;
              `
export const StopRecord = styled.TouchableOpacity`
                width: 80px;
                height: 80px;
                border-radius: 40px;
                margin: 30px;
              `
