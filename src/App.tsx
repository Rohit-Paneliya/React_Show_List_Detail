import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import HomeScreen from './views/HomeScreen';
import { DarkLightThemeProvider } from './utils/ContextProviderThemes';

function App() {

  return (
    <ErrorBoundary fallback={<div><h1>Error Boundry.....!!</h1></div>}>
      <div>
        <DarkLightThemeProvider>
          <HomeScreen />
        </DarkLightThemeProvider>
      </div>
    </ErrorBoundary>
  );
}

export default App;
