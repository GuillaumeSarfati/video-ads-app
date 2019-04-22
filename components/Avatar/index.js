import styled from 'styled-components/native';

export default styled.Image`
  background: #d7d7d7;
  border-radius: ${props => (props.size || 40) / 2}px;
  width: ${props => props.size || 40}px;
  height: ${props => props.size || 40}px;
`
