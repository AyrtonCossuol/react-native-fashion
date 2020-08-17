import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";

import OutfitIdeas from './OutfitIdeas';

const Drawer = createDrawerNavigator();
export const HomerNavigator = () => (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    </Drawer.Navigator>
);
