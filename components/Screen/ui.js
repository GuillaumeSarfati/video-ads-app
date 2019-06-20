import styled from 'styled-components/native';

export InputScrollView from 'react-native-input-scroll-view';
export Header from 'components/Header';
export Shadow from 'components/Shadow';
export Title from 'components/Title';
export Description from 'components/Description';
export Liner from 'components/Liner';
export Label from 'components/Label';

export const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
`

export const View = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-self: stretch;
  overflow: hidden;
`

export const Content = styled.View`
  flex: 1;
  align-self: stretch;
  ${props => props.debug ? `border: 3px solid ${props.debug === true ? 'red' : props.debug};` : ''};
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  padding:  ${props => props.padding || '0px'};
  margin:  ${props => props.margin || '0px'};
  ${props => props.debug ? `border: 3px solid ${props.debug === true ? 'red' : props.debug};` : ''};
`

export const Column = styled.View`
  align-self: stretch;
  flex-direction: column;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  ${props => props.debug ? `border: 3px solid ${props.debug === true ? 'red' : props.debug};` : ''};
`

export const Footer = styled.View`
  padding: 30px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`

export const ScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
  height: 100%;
`
