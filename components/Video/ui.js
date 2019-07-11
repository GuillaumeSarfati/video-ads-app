import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

export Component from 'components/Component';

export const  Video = styled.View`
                width: ${props => props.large
                  ? (Dimensions.get('window').width - 60)
                  : (Dimensions.get('window').width - 45) / 2
                }px;
                height: ${props => props.large
                  ? (Dimensions.get('window').width - 60)
                  : (Dimensions.get('window').width - 45) / 2
                }px;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                box-shadow: 0px 0px 30px #D6E2F5;
                margin-right: 15px;
                margin-bottom: 15px;
                background: black;
                border-radius: 16px;
                overflow: hidden;
              `;
