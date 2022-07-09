import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { ActivityIndicator, Button } from 'react-native-paper'
import { PostsList } from '../components/PostsList'
import { PostsListItem } from '../components/PostsListItem'
import { PostsProvider } from '../context/ContextPosts'
import { http } from '../http/http'
import { IPost } from '../interfaces/IPosts'
import { RootStackParamList } from '../stack/StackApp'

type PostsScreen = NativeStackNavigationProp<RootStackParamList, 'PostsScreen'>;

export const PostsScreen = () => {

    const [posts, setPosts] = useState<IPost[] | null>(null);
    const [postsDestacados, setPostsDestacados] = useState<IPost[] | null>(null);
    const navigator = useNavigation<PostsScreen>();
    

    useEffect(() => {
        http.get<IPost[]>('/posts')
            .then(response => {
                setPosts(response.data)
            })


    }, [])

    return (
        <View style={{flex: 1}}>
            <View style={{ marginHorizontal: 10, marginVertical: 20}}>
                <Button 
                    mode='outlined'
                    onPress={() => navigator.navigate('DestacadosScreen')}
                >
                    Posts Destacados
                </Button>
            </View>
            { posts ? 
                <View style={{flex: 1}}>
                    <PostsList posts={posts}></PostsList>
                </View>
                : 
                <View style={{ flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size="large" />
                </View>
            }
        </View>
    )
}
