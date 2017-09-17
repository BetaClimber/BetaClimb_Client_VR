import React,{ Component } from 'react';
import {
  AppRegistry,
  asset,
  Text,
  Pano,
  View,
} from 'react-vr';

export default class panorama extends Component {
  render() {
    return (
      <View>
          <Pano source={asset('panoramic.jpg')}/>
       </View>
    );
  }
};

AppRegistry.registerComponent('panorama', () => panorama);
