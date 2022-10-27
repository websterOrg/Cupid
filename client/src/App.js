import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Form from './Pages/Form';
import Profile from './Pages/Profile';
import Modalpopup from './Components/Modalpopup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path = "/SignUp" element = {} */}
        <Route path="/form" element={<Form />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/modalpopup" element={<Modalpopup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
