import 'bootstrap/dist/css/bootstrap.min.css';
import TopHeader from './TopHeader';
import NavigationBar from './NavigationBar';
import WebChannels from './WebChannels';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shows from '../other/Shows';
import People from '../other/People';
import Network from '../other/Network';
import DetailsScreen from './DetailScreen';

const HomeScreen = () => {
    return (
        <div>
            <BrowserRouter>
                <TopHeader />
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<WebChannels />} />
                    <Route index path="webChannels" element={<WebChannels />} />
                    <Route path="/shows" element={<Shows />} />
                    <Route path="/people" element={<People />} />
                    <Route path="/network" element={<Network />} />
                    <Route path="/detailScreen" element={<DetailsScreen />} />
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default HomeScreen
