import styled from 'styled-components/native'

export default styled.Text`
                opacity: 0.7;
                font-size: 16px;
                font-weight: 900;
                letter-spacing: 1.2px;
                line-height: 16px;
                text-align: ${props => props.center ? 'center' : 'left' };
                color: ${props => props.dark ? '#384E71' : 'white' };
              `;
