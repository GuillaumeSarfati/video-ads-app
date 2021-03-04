import styled from 'styled-components/native';

export Gradient from 'components/Gradient';

export const  Button = styled.TouchableOpacity`
                flex-direction: row;
                justify-content: center;
                align-items: center;
                border-radius: 40px;

              `;
              Button.Opacity = styled.View`
                border: 15px solid rgba(47, 137, 248, 0.35);
                border-radius: 100px;
              `
              Button.Text = styled.Text`
                color: white;
                font-weight: bold;
              `;
