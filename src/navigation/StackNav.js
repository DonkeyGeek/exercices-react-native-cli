import React from 'react';
import TabNav from './TabNav';
import navigationPaths from '../constants/navigationPaths';

export default function(Stack) {
    return (
        <Stack.Screen 
            name={navigationPaths.TABNAV} 
            component={TabNav}
        />
    )
}