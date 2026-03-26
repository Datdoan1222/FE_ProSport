import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigation from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppNavigation />
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
