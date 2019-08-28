import React from 'react';
import Component from 'components/Component';
import styled from 'styled-components/native';

const Image = styled.Image`
  background: #d7d7d7;
  border-radius: ${props => (props.size || 40) / 2}px;
  width: ${props => props.size || 40}px;
  height: ${props => props.size || 40}px;
`

const Avatar = ({ onSnapshot, source, ...props }) => (
  <Component.TouchableOpacity disabled={!onSnapshot} onPress={onSnapshot}>
    <Image source={source} {...props} />
  </Component.TouchableOpacity>
)
export default Avatar
