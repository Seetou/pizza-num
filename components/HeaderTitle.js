import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderTitle = () => {
  return (
    <View>
      <Text style={styles.title}>All the best food</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginVertical: 10,
  },
});

export default HeaderTitle;
