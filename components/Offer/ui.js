import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export Avatar from 'components/Avatar';
export Rating from 'components/Rating';
export Transition from 'components/Transition';

export const  Component = styled.TouchableOpacity`
                align-self: stretch;
                flex-direction:row;
                width: ${Dimensions.get("window").width - 60}px;
              `

export const  Informations = styled.View`
                flex: 1;
                justify-content:center;
                align-items: flex-start;
                padding-left: 15px;
              `

              Informations.Title = styled.Text`
              	font-size: 18px;
                font-weight: 900;
                line-height: 25px;
                color: ${props => props.dark ? '#384E71' : 'white' };
              `

              Informations.Subtitle = styled.Text`
                opacity: 0.5;
                color: ${props => props.dark ? '#384E71' : 'white' };
                font-size: 14px;
                font-weight: 700;
                line-height: 19px;
              `

export const  Price = styled.View`
                align-items: flex-end;
                justify-content:center;
              `
              Price.Value = styled.Text`
                font-size: 18px;
                font-weight: 900;
                line-height: 25px;
                color: ${props => props.dark ? '#384E71' : 'white' };
                text-align: right;
              `

              Price.Time = styled.Text`
                font-size: 14px;
                line-height: 25px;
                color: ${props => props.dark ? '#384E71' : 'white' };
                text-align: right;
              `
