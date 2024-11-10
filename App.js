import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './store';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Page1" component={Page1} options={{ headerShown: false }} />
          <Stack.Screen name="Page2" component={Page2} options={{ headerShown: false }} />
          <Stack.Screen name="Page3" component={Page3} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
