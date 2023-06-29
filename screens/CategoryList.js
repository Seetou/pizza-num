import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const CategoryList = ({ route }) => {
  const { categoryName } = route.params;
  const [products, setProducts] = useState();

  const getCategoryProducts = async () => {
    try {
      const response = await axios.get(
        `https://forkify-api.herokuapp.com/api/search?q=${categoryName}`
      );
      setProducts(response.data.recipes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategoryProducts();
  }, []);

  return (
    products && (
      <View>
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.recipe_id}
          renderItem={({ item }) => (
            <ProductCard
              mealId={item.recipe_id}
              title={item.title}
              image={item.image_url}
              price={item.social_rank}
            />
          )}
        ></FlatList>
      </View>
    )
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
