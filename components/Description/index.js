import styled from 'styled-components/native'

export default styled.Text`
                max-width: 300px;
                opacity: 0.7;
                color: ${props => props.light ? '#e1e5eD' : '#384E71'};
                font-size: 16px;
                font-weight: 900;
                line-height: 28px;
                text-align: ${props => props.center ? 'center' : 'left' };
                margin-bottom: 15px;
              `;
