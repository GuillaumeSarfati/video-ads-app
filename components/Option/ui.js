import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export Component from 'components/Component';

export const  Article = styled.View`
                align-self: stretch;
                flex-direction: column;
                box-shadow: 0px 30px 30px #D6E2F5;
                padding: 30px;
                background: white;
                border-radius: 10px;
                margin-bottom: 15px;
              `;

              Article.Header = styled.View`
              `;

              Article.Header = styled.View`
              `;

              Article.Header.Title = styled.Text`
                padding: 15px 0;
                color: #384E71;
                font-size: 16px;
                font-weight: 900;
                line-height: 22px;
              `;

              Article.Content = styled.View`
              `;

              Article.Content.Description = styled.Text`
                padding: 15px 0;
                opacity: 0.7;
                color: #384E71;
                font-size: 16px;
                font-weight: 500;
                line-height: 24px;
              `;

              Article.Footer = styled.View`
                flex-direction: row;
              `;
