import React from 'react';
import { LinearTextGradient } from "react-native-text-gradient";

export default ({style, dark, children}) => (
  <LinearTextGradient
    style={style}
    locations={[0, 1]}
    colors={dark
      ? ['#A97CCC', '#2F89F8']
      : ['#D9dCdC', '#dFd9d8']
    }
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  >
    { children }
  </LinearTextGradient>
)
