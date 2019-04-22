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
                padding: 16px 32px;
              `;

              Button.Title = styled.Text`
                color: ${props => props.color};
                font-size: 16px;
                font-weight: 900;
                line-height: 22px;
                text-align: center;
              `;
