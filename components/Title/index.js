import React from 'react';
import styled from 'styled-components/native'
import TextGradient from 'components/TextGradient';

const Container = styled.View`

`;

const Text = styled.Text`
                position: absolute;
                top: 0px;
                left: 0px;
                max-width: 340px;
                text-align: ${props => props.center ? 'center' : 'left' };
                color: ${props => props.dark ? '#384E71' : 'white' };
                font-size: 28px;
                font-weight: 900;
                line-height: 38px;
                ${props => props.shadow ? 'text-shadow:  0px 10px 0px rgba(255, 255, 255, 0.25);' : '' }
              `;

const Shadow = styled(TextGradient)`
                position: absolute;
                width: 1000px;
                top: 5px;
                left: 15px;
                opacity: 0.25;
                text-align: ${props => props.center ? 'center' : 'left' };
                color: ${props => props.dark ? '#384E71' : 'white' };
                font-size: 42px;
                font-weight: 900;


              `;

export default props => (
  <Container>
    <Text {...props} />
    <Shadow {...props} numberOfLines={1}/>
  </Container>
)
