import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ imageSrc, title }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Category", { categoryName: title })}
    >
      <ImageBackground
        source={imageSrc}
        resizeMode="cover"
        style={styles.image}
      >
        <LinearGradient
          colors={["#000", "transparent"]}
          style={styles.background}
        >
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    borderRadius: 15,
    marginRight: 16,
    marginVertical: 8,
    overflow: "hidden",
    elevation: 3,
    backgroundColor: "white",
  },

  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: 200,
  },

  title: {
    fontSize: 20,
    fontWeight: 900,
    color: "white",
  },
});

export default CategoryCard;
