import React from 'react';
import {StatusBar, StyleSheet, View,} from 'react-native';

import VideoPlayer from 'react-native-video-controls';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <View style={styles.body}>
        <VideoPlayer
          source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default App;
