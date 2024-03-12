import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import HomeScreen from './views/HomeScreen';
import { ThemeProvider } from './utils/ContextProviderThemes';

function App() {

  return (
    <ErrorBoundary fallback={<div><h1>Error Boundry.....!!</h1></div>}>
      <div>
        <ThemeProvider>
        <HomeScreen />
        </ThemeProvider>        
      </div>
    </ErrorBoundary>
  );
}

export default App;
