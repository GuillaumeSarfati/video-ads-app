import styled from 'styled-components/native';

export Header from 'components/Header';
export Shadow from 'components/Shadow';
export Description from 'components/Description';
export Label from 'components/Label';
export Image from 'components/Image';
export Text from 'components/Text';
export TextInput from 'components/TextInput';

export {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

export { Ionicons as Icon } from '@expo/vector-icons';

export const Component = styled.View`
  flex: 1;
  align-self: stretch;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  padding:  ${props => props.padding || '0px'};
  margin:  ${props => props.margin || '0px'};
  ${props => props.debug ? 'border: 1px solid red;' : ''};
`

export const Column = styled.View`
  align-self: stretch;
  flex-direction: column;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  ${props => props.debug ? 'border: 1px solid red;' : ''};
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
