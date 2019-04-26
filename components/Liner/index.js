import styled from 'styled-components/native'
import mixins from '../../constants/Mixins'

export default styled.View`
  align-self: stretch;
  background: ${props => props.dark ? 'rgba(0,47,120,0.1)': 'rgba(125, 125, 125, 0.5)'};
  height: 1px
  margin: 15px 0;
`
