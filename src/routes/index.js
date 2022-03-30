import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'; // importando componente drawer
import { MaterialCommunityIcons } from '@expo/vector-icons'; // importando icones

import Movies from '../pages/Movies';
import StackRoutes from './stackRoutes';

const Drawer = createDrawerNavigator();

function Routes() {
    return(
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle:{
                    backgroundColor: '#090A0E',
                    paddingTop: 20,
                },
                drawerActiveBackgroundColor: '#E72F49',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#fff'
            }}

        >

            <Drawer.Screen // configuração para o componente de home
                name="HomeDrawer" 
                component={StackRoutes} 
                options={{
                    title: 'Home',
                    drawerIcon: ({focused, size, color}) => (
                        <MaterialCommunityIcons

                            name={focused ? 'movie-open' : 'movie-outline'} // trocando de icon dependendo o componente em foco
                            size={size}
                            color={color}

                        />
                    )
                }}
            />

            <Drawer.Screen // configuração para o componente de movies

                name="Movies"
                component={Movies}
                options={{
                    title: 'Meus Filmes',
                    drawerIcon: ({focused, size, color}) => (
                        <MaterialCommunityIcons

                            name={focused ? 'archive' : 'archive-outline'} // trocando de icon dependendo o componente em foco
                            size={size}
                            color={color}

                        />
                    )
                }}

            />

        </Drawer.Navigator>
    )
}

export default Routes;