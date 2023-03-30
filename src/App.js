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
import Testimoni from './components/Page/Testimoni/Testimoni.js';
import Login from './components/Page/Login/Login.js';
import History from './components/Page/History/History';
// 
import AdmLogin from './components/Page/Admin/adminLogin';
import AdminPage from './components/Page/Admin/AdminPage';
import DataMobilAdm from './components/Page/Admin/DataMobilAdm';
import DataPenyewa from './components/Page/Admin/DataPenyewaAdm';
import ListMobilTersewa from './components/Page/Admin/ListMobilTersewa';

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
        <Route path="/Testimoni" element={<Testimoni />} />
        <Route path="/Login" element={<Login />} />
        {/* Admin */}
        <Route path="/Adm" element={<AdmLogin />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/dataMobil" element={<DataMobilAdm />} />
        <Route path="/admin/dataPenyewa" element={<DataPenyewa />} />
        <Route path="/admin/mobilTersewa" element={<ListMobilTersewa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
