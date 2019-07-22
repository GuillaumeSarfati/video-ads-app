import { Dimensions, View, Animated, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

export Welcome from 'modals/Welcome';
export Success from 'modals/Success';
export Error from 'modals/Error';
export Loading from 'components/Loading';

export const FullScreen = styled(Animated.View)`
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

// export const TouchableBackdrop = styled(TouchableWithoutFeedback)`
export const TouchableBackdrop = styled(TouchableOpacity)`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
export const Backdrop = styled(Animated.View)`
  flex: 1;
  align-self: stretch;
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export const Children = styled(Animated.View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  z-index: 9999;
`;

export default {
  FullScreen,
  Backdrop,
  Children,
};
