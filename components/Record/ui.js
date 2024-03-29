import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

export ButtonRecord from 'components/ButtonRecord';
export Component from 'components/Component';

export const  Video = styled.View`
                width: ${(Dimensions.get('window').width - 30)}px;
                height: ${(Dimensions.get('window').width - 30)}px;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                box-shadow: 0px 0px 30px #D6E2F5;
                background: black;
                border-radius: 16px;
              `;

export const  Description = styled.View`
                position: absolute;
                padding: 50px;
                bottom: 0;
              `;

              Description.Text = styled.Text`
                flex-wrap: wrap;
                color: white;
                font-size: 20;
                font-weight: bold;
                text-align: center
              `;
