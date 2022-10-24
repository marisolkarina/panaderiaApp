import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, Product } from "../screens";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categorías">
            <Stack.Screen name="Categorías" component={Categories}/>
            <Stack.Screen name="Productos" component={Products}/>
            <Stack.Screen name="Producto" component={Product}/>
        </Stack.Navigator>
    )
}

export default ShopNavigator;