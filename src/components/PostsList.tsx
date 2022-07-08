import React from 'react'
import { Text, View, FlatList } from 'react-native';
import { IPost } from '../interfaces/IPosts'
import { PostsListItem } from './PostsListItem';


interface Props {
    posts: IPost[] | null,
    titulo?: string,
}

export const PostsList = ({ posts, titulo } : Props) => {

  // traer todos los post guardados
  return (
    <FlatList
        data={posts}
        renderItem={(item) => <PostsListItem post={item.item} />}
    ></FlatList>
  )
}
