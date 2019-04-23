import styled from 'styled-components/native';

export Back from 'components/Header/Bar/Back'
export Close from 'components/Header/Bar/Close'


export const  Component = styled.TouchableOpacity`
                height: 50px;
                flex-direction: row;
              `

export const  Button = styled.View`
                flex-direction: row;
                align-items: center;
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
