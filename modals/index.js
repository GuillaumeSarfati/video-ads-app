import React from 'react';
import { Animated, Dimensions } from 'react-native';
import connect from 'utils/connect';

import * as UI from './ui';

class Modal extends React.Component {

  static defaultProps = {
    isOpen: null,
    children: null,
    backdrop: null,
  }

  state = {
    isOpen: false,
    backdrop: new Animated.Value(0),
    children: new Animated.Value(0),
    allowBackdropPress: true,
  }

  componentRef = React.createRef();

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen) {
      this.appear(this.isAllowedToBackdropPress)
    }
  }

  isAllowedToBackdropPress = () => {
    const allowBackdropPress = this.componentRef?.current?.props?.allowBackdropPress;

    if (typeof allowBackdropPress === 'boolean') this.setState({ allowBackdropPress });
  }

  appear = callback => this.setState({ isOpen: true }, Animated.sequence([
    Animated.timing(this.state.children, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }),
    Animated.timing(this.state.backdrop, {
      toValue: 1,
      duration: 300,
    }),
  ]).start(callback))

  disappear = () => Animated.sequence([
    Animated.timing(this.state.children, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }),
    Animated.timing(this.state.backdrop, {
      toValue: 0,
      duration: 200,
    }),
  ]).start(() => this.setState({ isOpen: false }, () => {
    console.log('disappear CLOSE');
    this.props.Modal.close()
  }))

  Modal = () => {
    const {
      // backdrop,
      children,
      Modal,
    } = this.props;
    const backgroundColor = this.state.backdrop.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.2)'],
    });
    // const scale = this.state.children.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [0, 1],
    // });
    const translateY = this.state.children.interpolate({
      inputRange: [0, 1],
      outputRange: [Dimensions.get("window").height, 0],
    });
    const Component = children ? React.cloneElement(children, {
      ref: this.componentRef,
      close: this.disappear,
    }) : children;

    return (
      <UI.FullScreen>
        <UI.TouchableBackdrop
          disabled={!this.state.allowBackdropPress}
          onPress={this.state.allowBackdropPress ? () => this.disappear() : null}
        >
          <UI.Backdrop style={{ backgroundColor }} />
        </UI.TouchableBackdrop>
        <UI.Children
          pointerEvents="box-none"
          style={{
            transform: [
              // { scaleX: scale },
              // { scaleY: scale },
              { translateY: translateY },
            ],
          }}
        >
          { Component }
        </UI.Children>
      </UI.FullScreen>
    );
  }

  render = () => (this.state.isOpen ? this.Modal() : null);
}

Modal.Welcome = UI.Welcome;
Modal.Success = UI.Success;
Modal.Error = UI.Error;

export default connect(
  state => ({
    isOpen: state.modal.isOpen,
    children: state.modal.children,
  }),
  (dispatch, props, models) => ({
    Modal: models.Modal,
  })
)(Modal)
