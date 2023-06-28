import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { PopularDatas } from "../datas/popularDatas";
import axios from "axios";
import ProductCard from "./ProductCard";

const queryTag = PopularDatas[Math.floor(Math.random() * PopularDatas.length)];
const PopularList = () => {
  const [popularList, setPopularList] = useState([]);

  const getItems = async () => {
    const response = await axios.get(
      `https://forkify-api.herokuapp.com/api/search?q=${queryTag}`
    );
    setPopularList(response.data.recipes);
  };

  useEffect(() => {
    getItems();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Popular ${queryTag}`}</Text>

      <FlatList
        style={styles.flatContainer}
        numColumns={2}
        data={popularList}
        keyExtractor={(item) => item.recipe_id}
        renderItem={({ item }) => (
          <ProductCard
            mealId={item.recipe_id}
            title={item.title}
            image={item.image_url}
            price={item.social_rank}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 400,
  },

  flatContainer: {
    marginTop: 10,
    flex: 1,
  },
});

export default PopularList;
