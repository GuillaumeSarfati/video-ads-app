import styled from 'styled-components/native'

export default styled.Text`
                max-width: 340px;
                text-align: ${props => props.center ? 'center' : 'left' };
                color: ${props => props.dark ? '#384E71' : 'white' };
                font-size: 28px;
                font-weight: 900;
                line-height: 38px;
                ${props => props.shadow ? 'text-shadow:  0px 10px 0px rgba(255, 255, 255, 0.25);' : '' }
              `;
