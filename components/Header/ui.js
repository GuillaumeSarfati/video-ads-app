import styled from 'styled-components/native'

export Title from 'components/Title'
export Subtitle from 'components/Subtitle'
export Bar from 'components/Header/Bar'

export const  NoBackground = styled.View`
                min-height: 300px;
                align-self: stretch;
                justify-content: flex-start;
                paddingTop: 25px;
              `

export const  Background = styled.ImageBackground`
                min-height: 300px;
                align-self: stretch;
                justify-content: flex-start;
                paddingTop: 25px;
              `

export const  Component = styled.TouchableOpacity`
                height: 200px;
                align-self: stretch;
                justify-content: flex-start;
                padding: 40px 15px;
              `
