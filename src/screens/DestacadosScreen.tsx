import React from 'react'
import { Text, View } from 'react-native'
import { PostsList } from '../components/PostsList';
import { usePost } from '../context/ContextPosts';
import { styles } from '../theme/AppTheme';

export const DestacadosScreen = () => {

  const { postsDestacados } = usePost();

  console.log(postsDestacados);
  return (
    <View style={{ flex: 1}}>
        <Text style={{ fontSize: 30, textAlign: 'center', marginVertical: 10, color: 'black'}}>Post Destacados</Text>
        
        <View style={{flex: 1}}>
          { postsDestacados.length !== 0 ?
            <PostsList posts={postsDestacados}></PostsList>
          :  
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.titulo}>No tienes publicaciones destacadas.</Text>
              <Text style={styles.texto1}>Puedes agregar a destacados en la vista de Posts.</Text>
            </View>
          }

        </View>
    </View>
  )
}
