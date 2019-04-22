import styled from 'styled-components/native';

export Screen from 'components/Screen';
export Title from 'components/Title';
export Subtitle from 'components/Subtitle';
export Text from 'components/Text';
export Button from 'components/Button';
export Logo from 'components/Logo';

export const  Content = styled.View`
                flex: 1;
                justify-content: center;
              `;

export const  Login = styled.View`
                margin: 15px 0;
              `;

export const  Signup = styled.View`
                flex-direction: row;
                justify-content: center;
                align-self: stretch;
                padding: 30px;
              `;

              Signup.Text = styled.Text`
                color: white;
              `;

              Signup.Link = styled.TouchableOpacity`
                color: white;
              `;

              Signup.Text.Underline = styled.Text`
                color: white;
                text-decoration: underline;
                text-decoration-color: white;
              `;
