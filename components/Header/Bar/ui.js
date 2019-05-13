import styled from 'styled-components/native';

export Back from 'components/Header/Bar/Back'
export Close from 'components/Header/Bar/Close'
export Filters from 'components/Header/Bar/Filters'

export const  Component = styled.View`
                height: 50px;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
              `

export const  Button = styled.TouchableOpacity`
                flex-direction: row;
                align-items: center;
                padding: 15px 15px 15px 0;
              `

export const  Icon = styled.Image`
                width: 20px;
                height: 20px;
              `

export const  Text = styled.Text`
                color: ${props => props.light ? 'white' : '#384E71' };
                font-size: 14px;
                font-weight: 900;
                line-height: 19px;
                margin-left: 10px;
              `
