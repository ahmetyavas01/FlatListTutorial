import { Text, View, Image, StyleSheet } from 'react-native';
import React from 'react';

export const Feed = ({ image, name }) => {
  return (
    <View>
      <Image source={{ uri: image }} />
      <Text>{name}</Text>
    </View>
  );
};
