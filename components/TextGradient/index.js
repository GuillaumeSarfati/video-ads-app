import React from 'react';
import { LinearTextGradient } from "react-native-text-gradient";

export default ({style, children}) => (
  <LinearTextGradient
    style={style}
    locations={[0, 1]}
    colors={['#A97CCC', '#2F89F8']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  >
    { children }
  </LinearTextGradient>
)
