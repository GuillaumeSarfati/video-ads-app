import styled from 'styled-components/native';

export Screen from 'components/Screen';
export Component from 'components/Component';
export Record from 'components/Record';
export Video from 'components/Video';

export const  Tab = styled.TouchableOpacity`
              `

              Tab.Title = styled.Text`
                color: ${props => props.selected ? '#384E71' : '#c7c7c7' };
                font-size: ${props => props.selected ? 22 : 16 };
                font-weight: 700;
                padding-left: 15px;
              `
