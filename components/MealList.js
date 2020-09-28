import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import MealItem from "../components/MealItem";

const MealList = ({ listData, navigation }) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        {...itemData.item}
        onSelectMeal={() => {
          navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={listData}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
