import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { StackApp } from "./src/stack/StackApp";
import { Provider as PaperProvider } from 'react-native-paper';
import { PostsProvider } from "./src/context/ContextPosts";

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <PostsProvider>
          <StackApp></StackApp>
        </PostsProvider>
      </PaperProvider>
    </NavigationContainer>
  )  
};


export default App;
