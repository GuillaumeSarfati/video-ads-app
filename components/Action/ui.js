import styled from 'styled-components/native';

export Gradient from 'components/Gradient';

export const  Component = styled.View`
                flex-direction: column;
                border-radius: 32px;
                overflow: hidden;
                margin-bottom: 15px;
                min-width: ${props => props.large ? 300 : 0}px;
                align-items: stretch;
              `;

export const  Button = styled.TouchableOpacity`
                background: rgb(236, 242, 250);
                padding: 8px 16px;
              `;

              Button.Title = styled.Text`
                color: rgb(167, 185, 211);
                font-size: 14px;
                font-weight: 700;
                line-height: 22px;
                text-align: center;
              `;
