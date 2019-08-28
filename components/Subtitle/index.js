import styled from 'styled-components/native'

export default styled.Text`
                max-width: 300px;
                opacity: 0.7;
                color: ${props => props.dark ? '#384E71' : 'white' };
                font-size: 16px;
                font-weight: 600;
                line-height: 28px;
                text-align: ${props => props.center ? 'center' : 'left' };
              `;
