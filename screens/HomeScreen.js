import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import HeaderTitle from "../components/HeaderTitle";
import CategoriesList from "../components/CategoriesList";
import PopularList from "../components/PopularList";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, styles.innerContainer]}>
        <HeaderTitle />
        <CategoriesList />
        <PopularList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },

  innerContainer: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
