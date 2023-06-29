import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProductDetails from "../screens/ProductDetails";
import CategoryList from "../screens/CategoryList";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product Details"
        component={ProductDetails}
        options={({ route }) => ({ title: route.params.screenTitle })}
      />

      <Stack.Screen
        name="Category"
        component={CategoryList}
        options={({ route }) => ({ title: route.params.categoryName })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
