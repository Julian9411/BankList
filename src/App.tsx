import React from 'react';
import StoreProvider from './redux/StoreProvider';
import AppNavigator from './navigation/AppNavigator';

function App(): JSX.Element {
  return (
    <StoreProvider>
      <AppNavigator />
    </StoreProvider>
  );
}

export default App;
