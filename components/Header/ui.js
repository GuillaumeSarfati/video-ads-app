import styled from 'styled-components/native'

export Title from 'components/Title'
export Subtitle from 'components/Subtitle'
export Bar from 'components/Header/Bar'

export const  NoBackground = styled.View`
                align-self: stretch;
                justify-content: flex-start;
                paddingTop: 25px;
              `

export const  Background = styled.ImageBackground`
                min-height: 330px;
                align-self: stretch;
                justify-content: flex-start;
                paddingTop: 25px;
                justify-content: center;
              `

export const  Component = styled.TouchableOpacity`
                align-self: stretch;
                justify-content: flex-start;
                padding: 40px 15px;
              `
