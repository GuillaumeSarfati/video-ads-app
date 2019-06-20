import React from 'react';
import { LinearTextGradient } from "react-native-text-gradient";

const icons  = {
  FlowPro: "\&#xf443;"
}

export default ({current, children}) => (
  <LinearTextGradient
    style={{ fontWeight: "bold", fontFamily: 'Ionicons', fontSize: 26 }}
    locations={[0, 1]}
    colors={current ? ['#A97CCC', '#2F89F8'] : ['#d7d7d7', '#d7d7d7']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  >
    &#xf443;
  </LinearTextGradient>
)
