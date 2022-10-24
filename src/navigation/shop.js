import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, Product } from "../screens";
import { isAndroid } from "../utils";
import { colors } from "../constants/themes"

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Categorías"
            screenOptions={{
                headerStyle: {
                    backgroundColor: isAndroid ? colors.primary : colors.secondary,
                },
                headerTintColor: colors.white,
                headerTitleStyle: {
                    fontFamily: 'Lato-Bold',
                }
            }}
        >
            <Stack.Screen 
                name="Categorías" 
                component={Categories}
                options={{
                    title: 'Tipos de panes',

                }}
            />
            <Stack.Screen 
                name="Productos" 
                component={Products}
                options={({route}) => ({
                    title: route.params.name
                })}
            />
            <Stack.Screen name="Producto" component={Product}/>
        </Stack.Navigator>
    )
}

export default ShopNavigator;