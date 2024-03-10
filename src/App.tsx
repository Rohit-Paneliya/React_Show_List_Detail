import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import HomeScreen from './views/HomeScreen';

function App() {

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };

  // const errorBoundryUI = () => {
  //   return (<div>
  //     {/* <Lottie options={defaultOptions}
  //       height={400}
  //       width={400} /> */}
  //       <Lottie animationData={defaultOptions} loop={true} />
  //     <h1>Error while fetching the data.........!!</h1>
  //   </div>)
  // }


  return (
    <ErrorBoundary fallback={<div><h1>Error Boundry.....!!</h1></div>}>
     {/* <ErrorBoundary fallback={errorBoundryUI()}> */}
      <div>
        <HomeScreen />
      </div>
    </ErrorBoundary>
  );
}

export default App;
