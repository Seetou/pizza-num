import uuid from "react-native-uuid";

export const CategoriesDatas = [
  {
    id: uuid.v4(),
    title: "Hamburger",
    imageUrl: require("../assets/CategoriesImages/burger.webp"),
  },

  {
    id: uuid.v4(),
    title: "Pizza",
    imageUrl: require("../assets/CategoriesImages/pizza.webp"),
  },

  {
    id: uuid.v4(),
    title: "Pasta",
    imageUrl: require("../assets/CategoriesImages/pasta.webp"),
  },

  {
    id: uuid.v4(),
    title: "Salad",
    imageUrl: require("../assets/CategoriesImages/salad.webp"),
  },

  {
    id: uuid.v4(),
    title: "Sushi",
    imageUrl: require("../assets/CategoriesImages/sushi.webp"),
  },

  {
    id: uuid.v4(),
    title: "Toast",
    imageUrl: require("../assets/CategoriesImages/toast.webp"),
  },
];
