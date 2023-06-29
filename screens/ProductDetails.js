import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useState, useLayoutEffect } from "react";
import axios from "axios";

const ProductDetails = ({ route }) => {
  const { mealId } = route.params;
  const [mealDetails, setMealDetails] = useState();

  const getDetails = async () => {
    try {
      const response = await axios.get(
        `https://forkify-api.herokuapp.com/api/get?rId=${mealId}`
      );

      setMealDetails(response.data.recipe);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    mealDetails && (
      <View style={styles.container}>
        <Image
          source={{ uri: `${mealDetails.image_url}` }}
          style={styles.image}
        />

        <Text style={styles.title}>{mealDetails.title}</Text>
        <View style={styles.content}>
          <Text>Description:</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nostrum quod iusto nam veritatis! Quisquam fugit quaerat deleniti
            laboriosam et aliquam quidem sint, tenetur, illo aperiam quasi,
            ullam voluptate harum? Numquam eveniet voluptatum sint sit animi
            eius sequi at perspiciatis perferendis ea eaque dicta repellendus
            molestias mollitia dolores delectus rem reprehenderit, sunt
            consequuntur libero dignissimos, quasi odio praesentium. Numquam,
            hic.
          </Text>
          {/* <FlatList
            numColumns={2}
            data={mealDetails.ingredients}
            keyExtractor={(ingredient, index) => `${ingredient} + ${index}`}
            renderItem={({ ingredient }) => console.log(ingredient)}
          /> */}
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Add to list</Text>
          </Pressable>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // borderColor: "red",
    // borderWidth: 2,
  },

  image: {
    width: "100%",
    height: "50%",
    borderRadius: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: 600,
    marginTop: 20,
  },

  content: {
    marginVertical: 10,
  },

  buttonContainer: {
    width: "100%",
    marginTop: 20,
  },

  button: {
    backgroundColor: "salmon",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  buttonText: {
    textTransform: "uppercase",
    color: "white",
    fontSize: 16,
    fontWeight: 600,
  },
});

export default ProductDetails;
