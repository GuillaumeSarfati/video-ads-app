import styled from 'styled-components/native';

export { Camera, Permissions } from 'expo';

export Screen from 'components/Screen';
export Component from 'components/Component';
export Text from 'components/Text';
export Button from 'components/Button';
export ButtonRecord from 'components/ButtonRecord'
export Gradient from 'components/Gradient';
export Welcome from 'modals/Welcome';

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
