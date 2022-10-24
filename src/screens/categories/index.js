import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

const Categories = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categorías</Text>
            <Button
                title="Ir a Productos"
                onPress={() => navigation.navigate("Productos")}
            />
        </View>
    )
}

export default Categories;