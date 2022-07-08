import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { IPost } from '../interfaces/IPosts';
import { usePost } from '../context/ContextPosts';

interface Props {
    post: IPost,
    //destacados: IPost[] | null,
}

export const PostsListItem = ( { post } : Props ) => {
    
    const [destado, setDestado] = useState(false)
    const {agregarDestacado, postsDestacados, eliminarDestacado} = usePost();

    useEffect(() => {
        let ok = postsDestacados.some(e => {
            return e.id === post.id
        })
        setDestado(ok)
    }, [postsDestacados])

    const handleAgregar = async () => {
        setDestado(true)
        agregarDestacado(post);
    }

    const handleQuitar = () => {
        setDestado(false)
        eliminarDestacado(post);

    }

    return (
        <View style={styleItem.contenedor}>
            <Text>ID: {post.id}</Text>
            <Text>Usuario ID: {post.userId}</Text>
            <Text style={styleItem.title}>{post.title}</Text>
            <Text>{post.body}</Text>
            { !destado? 
                <Button onPress={handleAgregar} mode='contained'>Agregar a destacados</Button>
                :
                <Button onPress={handleQuitar}>Quitar de destacados</Button>
            }
        </View>
    )
}

const styleItem = StyleSheet.create({
    contenedor: {
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 10
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})