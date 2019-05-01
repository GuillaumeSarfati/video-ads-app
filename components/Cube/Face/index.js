import React from 'react'

import * as UI from './ui';

export default class Face extends React.Component {

  status = {
    errorCount: 0
  }

  isNext = props => {
    const { current, index } = props
    return current + 1 === index
  }

  isCurrent = props => {
    const { current, index } = props
    return current === index
  }

  isPrevious = props => {
    const { current, index } = props
    return current - 1 === index
  }

  isShouldPlay = () => {
    return this.status.shouldPlay
  }

  isLoaded = () => {
    return this.status.isLoaded
  }

  isPlaying = () => {
    return this.video && this.status.isPlaying
  }

  isMoving = () => {
    return this.status.isMoving
  }

  isPaused = () => {
    return !this.video || !this.status.isPlaying
  }

  onPressIn = async () => {
    this.onPressTime = new Date().getTime()
    if (this.isCurrent(this.props) && this.isPlaying()) {
      await this.pauseAsync()
    }
  }

  onPressOut = async () => {
    console.log('onPressOut', this.props.index, this.props.current);

    if (!this.isMoving() && new Date().getTime() - this.onPressTime < 1000) {
      console.log('IF');
      this.props.onPress(this.props.index)
    }
    else if (this.isCurrent(this.props) && this.isPaused()) {
      console.log('ELSE IF');
      await this.playAsync()
    }
  }

  onGrant = () => {
    console.log('onGrant', this.props.index);
    this.status.isMoving = true
  }

  onRelease = async () => {
    this.status.isMoving = false
    console.log('onRelease', this.props.index);
    if (this.isCurrent(this.props) && this.isPaused()) {
      // console.log(`[ FACE ${this.props.index} ] onRelease`);
      await this.playAsync()
    }

  }

  onMove = () => {
    console.log('onMove', this.props.index);
    if (this.isCurrent(this.props) && this.isPlaying()) {
      // console.log(`[ FACE ${this.props.index} ] onMove`);
      this.video.pauseAsync()
    }
  }

  onPlaybackStatusUpdate = status => {
    this.status.rate = status.rate
    this.status.isMuted = status.isMuted
    this.status.isLoaded = status.isLoaded
    this.status.isLooping = status.isLooping
    this.status.isPlaying = status.isPlaying
    this.status.isBuffering = status.isBuffering
    this.status.didJustFinish = status.didJustFinish
    this.status.durationMillis = status.durationMillis
    this.status.positionMillis = status.positionMillis
    this.status.shouldCorrectPitch = status.shouldCorrectPitch
    this.status.playableDurationMillis = status.playableDurationMillis
    this.status.hasJustBeenInterrupted = status.hasJustBeenInterrupted
    this.status.progressUpdateIntervalMillis = status.progressUpdateIntervalMillis

    if (this.status.didJustFinish) {
      // console.log(`[ FACE ${this.props.index} ] onFinsh`);
      this.props.onFinish(this.props.index)
    }
  }

  onReadyForDisplay = async e => {
    this.status.isReadyForDisplay = true

    // console.log(`[ FACE ${this.props.index} ] onReadyForDisplay :`, this.status.isReadyForDisplay, {
      // durationMillis: e.status.durationMillis,
      // playableDurationMillis: e.status.playableDurationMillis,
      // percent: 100 / e.status.durationMillis * e.status.playableDurationMillis
    // })

    if (this.isCurrent(this.props)) {
      await this.playAsync()
    }
    // console.timeEnd(`loading ${this.props.index}`)
  }

  onLoadStart = () => {
  }

  onLoad = status => {
  }

  onError = e => {
  }


  loadAsync = async (...args) => {
    try {
      if (this.video && !this.isLoaded()) {
        // console.log(`[ FACE ${this.props.index} ] loadAsync : `, ...args);
        return await this.video.loadAsync(...args)
      }
    } catch (e) {
      this.status.errorCount++
      // console.log(`[ FACE ${this.props.index} ] loadError : `, this.status.errorCount);
      return await this.loadAsync(...args)
    }
  }

  playAsync = (position) => {
    if (this.status.isReadyForDisplay) {
      this.status.shouldPlay = false
      // console.log(`[ FACE ${this.props.index} ] playAsync : `, ...args);
      position
      ? this.video.playFromPositionAsync(0)
      : this.video.playAsync()
    }
    else {
      this.status.shouldPlay = true
    }
  }

  pauseAsync = async (...args) => {
    if (this.isPlaying()) {
      // console.log(`[ FACE ${this.props.index} ] pauseAsync : `, ...args);
      return await this.video.pauseAsync(...args)
    }
  }

  shouldComponentUpdate = (nextProps) => {
    return this.isPrevious(nextProps) || this.isCurrent(nextProps) || this.isNext(nextProps)
  }

  componentWillMount = async () => {
    console.time(`loading ${this.props.index}`)
    const { model, index, current } = this.props;
  }

  componentDidMount = async () => {
    const { model, index, current } = this.props;


    if (this.isCurrent(this.props)) {
      // console.log(`[ FACE ${index} ] componentDidMount`);
      await this.loadAsync({uri: 'https://s3.eu-west-3.amazonaws.com/' + model.video})
    }
    // if (this.isCurrent(this.props)) {
    //   console.log(`[ FACE ${index} ] componentDidMount -> playAsync : `);
    //   this.playAsync()
    // }
    if (this.isNext(this.props)) {
      // console.log(`[ FACE ${index} ] componentDidMount`);
      await this.loadAsync({uri: 'https://s3.eu-west-3.amazonaws.com/' + model.video})
    }

  }

  componentWillUpdate = async (nextProps) => {
    const { model, index, current } = nextProps;

    // console.log(`[ FACE ${index} ] componentWillUpdate`);
    if (!this.isCurrent(nextProps) && this.isPlaying()) {
      await this.pauseAsync()
    }
    if (this.isCurrent(nextProps)) {
      console.log(index, 'IS CURRENT', this.isCurrent(this.props));
      this.isCurrent(this.props)
        ? await this.playAsync()
        : await this.playAsync(true)
    }
    if (this.isNext(nextProps)) {
      await this.loadAsync({uri: 'https://s3.eu-west-3.amazonaws.com/' + model.video})
    }
  }

  render() {
    const { model, index, current } = this.props;

    return (
      <UI.Screen.Content debug="blue" style={{backgroundColor: 'red'}}>
        <UI.Component.TouchableWithoutFeedback
          onPressIn={this.onPressIn}
          onPressOut={this.onPressOut}
        >
          <UI.Screen.Content debug="yellow" style={{ backgroundColor: '#2E3B55' }}>
          <UI.Video
            ref={ref => this.video = ref}
            source={{uri: 'https://s3.eu-west-3.amazonaws.com/' + model.video}}
            onPlaybackStatusUpdate={this.onPlaybackStatusUpdate}
            onReadyForDisplay={this.onReadyForDisplay}
            onLoadStart={this.onLoadStart}
            onLoad={this.onLoad}
            onError={this.onError}


            style={{position: 'absolute', top: 0, left: 0, width: 414, height: 734, opacity: 0.5}}
            // shouldPlay={current === i}
            // onPlaybackStatusUpdate={playbackStatus => current === i && playbackStatus.didJustFinish && onPressNext(i, false)()}
            resizeMode="cover"
          />
          <UI.Image
            source={require('assets/images/gradient.png')}
            pointerEvents="none"
            style={{
              top: 734 - 200,
              position:'absolute',
              width: UI.Dimensions.get("window").width,
              height: 200,
            }}
          />
          </UI.Screen.Content>
        </UI.Component.TouchableWithoutFeedback>
      </UI.Screen.Content>
    )
  }
}
