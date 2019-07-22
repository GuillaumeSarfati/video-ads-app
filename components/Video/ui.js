import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

export Component from 'components/Component';

export const dimensions = {
  default: {
    width: (Dimensions.get('window').width - 45) / 2,
    height: (Dimensions.get('window').width - 45) / 2,
  },
  large: {
    width: (Dimensions.get('window').width - 45),
    height: (Dimensions.get('window').width - 45),
  },
  fullscreen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
}

export const  Video = styled.View`
                flex-direction: row;
                justify-content: center;
                align-items: center;
                box-shadow: 0px 0px 30px #D6E2F5;
                margin-right: 15px;
                margin-bottom: 15px;
                background: black;
                border-radius: ${props => props.fullscreen ? 0 : 16}px;
                overflow: hidden;
              `;
