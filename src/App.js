import 'bootstrap/dist/css/bootstrap.min.css';
import Mainpage from './components/Page/MainPage/MainPage';
import EditUser from './components/Page/EditUser/editUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Page/RegisPage/RegisPage';
import SyrtKntuan from './components/Page/SK/SyrtKntuan';
import CarItem from './components/Page/CarItem/CarItem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/editUser" element={<EditUser />} />
        <Route path="/regisPage" element={<Register />} />
        <Route path="/SyrtKntuan" element={<SyrtKntuan />} />
        <Route path="/CarItem" element={<CarItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
