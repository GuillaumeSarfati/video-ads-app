import styled from 'styled-components/native';

export TextGradient from 'components/TextGradient'

export Icon from 'components/Header/Bar/Icon'
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
                justify-content: center;
              `

export const  Text = styled.Text`
                color: ${props => props.light ? 'white' : '#384E71' };
                font-size: 14px;
                font-weight: 900;
                line-height: 19px;
                margin-left: 10px;
              `
