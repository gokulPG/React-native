import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Posts from "../screens/Posts";
import PostDetails from "../screens/PostDetails";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="posts">
        <Stack.Screen
          name="posts"
          component={Posts}
          options={{
            title: "User Posts",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen name="detail" component={PostDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
