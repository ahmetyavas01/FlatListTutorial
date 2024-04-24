import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';
import { StoryItem } from './Story/storyItem';

import { FeedList } from './Feed/feedList';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./Image/instagram.png')} style={styles.header} />
      <View>
      <StoryItem />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    paddingLeft: 7,
    paddingRight: 7
  },
  header: {
    width: "50%",
    height: 60,
    paddingTop: 50,
  }
});
