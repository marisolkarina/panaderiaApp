import React from "react";
import { FlatList } from "react-native";
import { CategoryItem } from "../../components";
import { styles } from "./styles";
import { categories } from "../../constants/data";

const Categories = ({navigation, route}) => {
    const onSelected = (item) => {
        navigation.navigate('Productos', {name: item.title})
    }
    const renderItem = ({item}) => <CategoryItem item={item} onSelected={onSelected} />
    return (

        <FlatList 
            data={categories} 
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            style={styles.containerlist}
        />
    )
}

export default Categories;