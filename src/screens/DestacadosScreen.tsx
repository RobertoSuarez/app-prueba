import React from 'react'
import { Text, View } from 'react-native'
import { PostsList } from '../components/PostsList';
import { usePost } from '../context/ContextPosts';

export const DestacadosScreen = () => {

  const { postsDestacados } = usePost();
  return (
    <View style={{ flex: 1}}>
        <Text style={{ fontSize: 30, textAlign: 'center', marginVertical: 10, color: 'black'}}>Post Destacados</Text>
        
        <View style={{flex: 1}}>
          <PostsList posts={postsDestacados}></PostsList>

        </View>
    </View>
  )
}
