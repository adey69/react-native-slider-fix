/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
// @ts-ignore
import {SliderBox} from 'react-native-image-slider-box';

const images = [
  require('./assets/1.jpeg'),
  require('./assets/2.jpeg'),
  require('./assets/3.jpeg'),
  require('./assets/4.webp'),
  require('./assets/5.jpeg'),
];

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <SliderBox
        images={images}
        resizeMode="cover"
        sliderBoxHeight={400}
        circleLoop
        dotColor="green"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
