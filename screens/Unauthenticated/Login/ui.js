import styled from 'styled-components/native';

export Screen from 'components/Screen';
export Text from 'components/Text';
export Button from 'components/Button';
export TextInput from 'components/TextInput';

export const  ResetPassword = styled.View`
                flex-direction: row;
                justify-content: center;
                align-self: stretch;
                padding: 30px;
              `;

              ResetPassword.Text = styled.Text`
                color: #384E71;
              `;

              ResetPassword.Link = styled.TouchableOpacity`
              `;

              ResetPassword.Text.Underline = styled.Text`
                color: #384E71;
                text-decoration: underline;
                text-decoration-color: #384E71;
              `;
