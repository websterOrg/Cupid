import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home.js';
import Form from './Pages/Form.js';
import Profile from './Pages/Profile.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />} />
        {/* <Route path = "/SignUp" element = {} */}
        <Route path="/Form" element={<Form />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
