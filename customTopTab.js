import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FocusedGradient = ['#03E88B', '#0640B5'];
const NotFocusedGradient = ['#423e3e', '#423e3e'];

function CustomTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row',backgroundColor:'#423e3e',borderRadius:25,marginLeft:8,marginRight:8,marginTop:5 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
            colors={isFocused ? FocusedGradient : NotFocusedGradient}
            style={{
              flex: 1,
              backgroundColor: isFocused ? 'dodgerblue' : '#423e3e',
              borderRadius:25,
              
            }}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                minHeight: 45,
                justifyContent: 'center',
                alignItems: 'center',
}}>
              <Text style={{ color: isFocused ? 'white' : 'white',}}>
                {label}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        );
      })}
    </View>
  );
}

export default CustomTabBar;