import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ProductDetails from "../screens/ProductDetails";

const ProductCard = ({ mealId, title, image, price }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("Product Details", { mealId, screenTitle: title })
      }
    >
      <Image source={{ uri: `${image}` }} style={styles.image} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title.substring(0, 15)}...</Text>
        <Text>
          {new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
          }).format(price)}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // borderColor: "red",
    // borderWidth: 2,
    borderRadius: 15,
    overflow: "hidden",
    margin: 8,
    elevation: 3,
  },

  image: {
    width: "100%",
    height: 150,
  },

  innerContainer: {
    padding: 10,
  },

  title: {
    fontWeight: 600,
  },
});

export default ProductCard;
