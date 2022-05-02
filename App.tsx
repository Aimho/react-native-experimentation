/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Pressable,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';

const Separator = () => <View style={styles.itemSeparator} />;
const rightSwipeActions = () => {
  return (
    <Pressable
      style={{height: '100%'}}
      onPress={() => console.log('onPress Right')}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#ff8303',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            color: '#1b1a17',
            fontWeight: '600',
            paddingHorizontal: 30,
            paddingVertical: 20,
          }}>
          Delete
        </Text>
      </View>
    </Pressable>
  );
};
const swipeFromRightOpen = () => {
  console.log('Swipe from right');
};

type Item = {
  text: string;
};
const ListItem = ({item: {text}, drag, isActive}: RenderItemParams<Item>) => {
  return (
    <ScaleDecorator>
      <Swipeable
        renderRightActions={rightSwipeActions}
        onSwipeableRightOpen={swipeFromRightOpen}>
        <Pressable onLongPress={drag} disabled={isActive}>
          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 20,
              backgroundColor: 'white',
            }}>
            <Text style={{fontSize: 24}}>{text}</Text>
          </View>
        </Pressable>
      </Swipeable>
    </ScaleDecorator>
  );
};

const App = () => {
  const [todos, setTodos] = React.useState([
    {id: '1', text: 'Learn JavaScript'},
    {id: '2', text: 'Learn React'},
    {id: '3', text: 'Learn TypeScript'},
  ]);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <Text style={{color: '#000', textAlign: 'center', marginVertical: 20}}>
          Swipe right or left
        </Text>

        <DraggableFlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={ListItem}
          ItemSeparatorComponent={() => <Separator />}
          onDragEnd={({data}) => setTodos(data)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: '#444',
  },
});

export default App;
