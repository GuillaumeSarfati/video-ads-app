import styled from 'styled-components/native'

export default styled.Text`
                max-width: 300px;
                text-align: center;
                color: ${props => props.dark ? '#384E71' : 'white' };
                font-size: 28px;
                font-weight: 900;
                line-height: 38px;
                text-shadow: 0px 10px 0px rgba(255, 255, 255, 0.25);
              `;
