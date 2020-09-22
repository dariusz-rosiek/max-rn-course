import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CategoryMealScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate({ routeName: "MealDetail" })}
      />
      <Button title="Go Back" onPress={() => navigation.pop()} />
    </View>
  );
};

export default CategoryMealScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
