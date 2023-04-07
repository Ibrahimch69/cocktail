import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Créer un Stack Navigator
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Définir vos écrans ici */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
