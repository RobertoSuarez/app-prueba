import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useMemo, useState } from "react";
import { IPost } from "../interfaces/IPosts";


const PostsContext = React.createContext(null);

export const PostsProvider = (props: any) => {

    const [postsDestacados, setPostsDestacados] = useState<IPost[] | null>(null);

    const getPostDestacados = async () => {
        try {
            const destacados = await AsyncStorage.getItem('destacados')
            //console.log(destacados)
            if (destacados) {
                let data = JSON.parse(destacados)
                setPostsDestacados(data)
                console.log('get destacados: ', data)
            } else {
                // nada
            }
        } catch(e) {
            console.log(e);
        }
    }

    const eliminarDestacado = (post: IPost) => {
        const nuevos = postsDestacados?.filter((item) => item.id !== post.id)
        if (nuevos) {
            setPostsDestacados(nuevos);
            console.log(postsDestacados)
            AsyncStorage.setItem('destacados', JSON.stringify(nuevos))
        }
    }

    const agregarDestacado = async (post: IPost) => {
        const data = await AsyncStorage.getItem('destacados')
        if (data) {
            let posts : IPost[] = JSON.parse(data)
            posts.push(post);
            await AsyncStorage.setItem('destacados', JSON.stringify(posts))
        } else {
            await AsyncStorage.setItem('destacados', JSON.stringify([post]))
        }
        console.log('se ha agregado')
        getPostDestacados();
    }

    useEffect(() => {
        console.log('inicia el contexto')
        getPostDestacados();
        //console.log('Destacados en local store', postsDestacados)
    }, [])
    
    // memo
    const value = useMemo(() => {
        return ({
            postsDestacados,
            agregarDestacado,
            eliminarDestacado
        })

    }, [agregarDestacado, eliminarDestacado])

    return <PostsContext.Provider value={value} {...props}/>
}


export const usePost = () : { 
    postsDestacados: IPost[], 
    agregarDestacado: (post: IPost) => void, 
    eliminarDestacado: (post: IPost) => void} => {

    const context = React.useContext(PostsContext)
    if (!context) {
        throw new Error('El componente no esta dentro del contexto')
    }

    return context
}