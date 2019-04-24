import styled from 'styled-components/native';

export Avatar from 'components/Avatar';
export { Video } from 'expo';

export const  Component = styled.TouchableOpacity`
                width: 300px;
                flex-direction:row;
                border: 3px solid red;
              `

export const  Informations = styled.View`
                flex: 1;
                justify-content:center;
                align-items: flex-start;
                padding-left: 15px;
              `

              Informations.Title = styled.Text`

              `

              Informations.Subtitle = styled.Text`

              `

export const  Price = styled.View`
                align-items: center;
                justify-content:center;
              `
              Price.Value = styled.Text`

              `
              Price.Time = styled.Text`

              `
