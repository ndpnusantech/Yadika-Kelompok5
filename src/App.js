import 'bootstrap/dist/css/bootstrap.min.css';
import Mainpage from './components/Page/MainPage/MainPage';
import EditUser from './components/Page/EditUser/editUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Page/RegisPage/RegisPage';
import SyrtKntuan from './components/Page/SK/SyrtKntuan';
import CarItem from './components/Page/CarItem/CarItem';
import CheckOut from './components/Page/CheckOut/CheckOut';
import ProfilMobil from './components/Page/ProfilMobil/ProfilMobil';
import Faq from './components/Page/Faq/Faq';
import History from './components/History/History';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/editUser" element={<EditUser />} />
        <Route path="/regisPage" element={<Register />} />
        <Route path="/SyrtKntuan" element={<SyrtKntuan />} />
        <Route path="/CarItem" element={<CarItem />} />
        <Route path="/profilMobil" element={<ProfilMobil />} />
        <Route path="/CheckOut" element={<CheckOut />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/History" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
