import React from 'react';
import { Animated, Dimensions } from 'react-native';
import connect from 'utils/connect';

import * as UI from './ui';

class LoadingModal extends React.Component {

  static defaultProps = {
    isLoading: null,
    children: null,
    backdrop: null,
  }

  state = {
    isLoading: false,
    backdrop: new Animated.Value(0),
    children: new Animated.Value(0),
  }

  componentRef = React.createRef();

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoading) {
      this.appear()
    }
    else if (this.props.isLoading && !nextProps.isLoading) {
      this.disappear()
    }
  }

  appear = callback => this.setState({ isLoading: true }, Animated.sequence([
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
  ]).start(() => this.setState({ isLoading: false }, () => this.props.Modal.close()))

  Modal = () => {
    const {
      children,
      Modal,
    } = this.props;

    const opacity = this.state.children.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    const translateY = this.state.children.interpolate({
      inputRange: [0, 1],
      outputRange: [Dimensions.get("window").height, 0],
    });


    return (
      <UI.FullScreen>
        <UI.Children
          pointerEvents="box-none"
          style={{
            opacity,
            transform: [
              { translateY },
            ],
          }}
        >
          <UI.Loading />
        </UI.Children>
      </UI.FullScreen>
    );
  }

  render = () => (this.state.isLoading ? this.Modal() : null);
}

export default connect(
  state => ({
    isLoading: state.loading.isLoading,
  }),
  (dispatch, props, models) => ({
    Modal: models.Modal,
  })
)(LoadingModal)
