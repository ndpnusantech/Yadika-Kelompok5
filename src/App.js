import 'bootstrap/dist/css/bootstrap.min.css';
import Mainpage from './components/Page/MainPage/MainPage';
import ProfilMobil from './components/Page/ProfilMobil/ProfilMobil';
import EditUser from './components/Page/EditUser/editUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/profilMobil" element={<ProfilMobil />} />
        <Route path="/editUser" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
