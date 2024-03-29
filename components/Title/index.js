import React from 'react';
import TextGradient from 'components/TextGradient';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native'

const Container = styled.View`
  padding: 15px;
`;

const Text = styled.Text`
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
                z-index: -1;
                width: ${Dimensions.get("window").width * (42 / 28) - 120}px;
                top: 20px;
                left: 30px;
                opacity: 0.25;
                line-height: 48px;
                text-align: ${props => props.center ? 'center' : 'left' };
                font-size: 42px;
                font-weight: 900;
              `;

export default props => (
  <Container>
    <Text {...props} />
    <Shadow {...props} numberOfLines={1}/>
  </Container>
)
