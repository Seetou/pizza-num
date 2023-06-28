import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { CategoriesDatas } from "../datas/categoriesDatas";

const CategoriesList = () => {
  return (
    <View>
      <FlatList
        horizontal={true}
        data={CategoriesDatas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard imageSrc={item.imageUrl} title={item.title} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoriesList;
