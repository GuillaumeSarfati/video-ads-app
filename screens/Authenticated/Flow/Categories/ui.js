import styled from 'styled-components/native';

export Screen from 'components/Screen';
export Text from 'components/Text';
export Search from 'components/Search';
export Button from 'components/Button';
export Category from 'components/Category';
export Header from 'components/Header';

export const  Title = styled.Text`
                color: white;
                font-size: 28px;
                font-weight: 900;
                line-height: 38px;
              `;

export const  Categories = styled.View`
                flex-wrap: wrap;
                flex-direction: row;
                padding-left: 15px;
                padding-top: 40px;
              `;
