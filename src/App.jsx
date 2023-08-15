import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Rootlayout from './layout/Rootlayout';

import Home from './pages/Home';
import Info from './pages/Info';
import Nutritionalinfo from './pages/Nutritionalinfo';
import Processduration from './pages/Processduration';
import Varieties from './pages/Varieties';
import Production from './pages/Production';
import Aboutblacksalt from './pages/Aboutblacksalt';
import Methods from './pages/Methods';
import Benefits from './pages/Benefits';
import Privacypolicy from './pages/Privacypolicy';
import Disclaimer from './pages/Disclaimer';
import About_us from './pages/About_us';
import Aim_Objects from './pages/Aim_Objects';
import Functions from './pages/Functions';
import Management_Committee from './pages/Management_Committee';
import Permanent_Members from './pages/Permanent_Members';
import Powers_and_Duties from './pages/Powers_and_Duties';

function App() {


  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Rootlayout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='general-info' element={<Info />}></Route>
          <Route path='nutritionalinfo' element={<Nutritionalinfo />} ></Route>
          <Route path='benefits' element={<Benefits />} ></Route>
           <Route path='process-duration' element={<Processduration />} ></Route>
          <Route path='varieties' element={<Varieties />} ></Route>
          <Route path='production' element={<Production />} ></Route>
          <Route path='methods' element={<Methods />} ></Route>
          <Route path='aboutblacksalt' element={<Aboutblacksalt />} ></Route>
          <Route path='About_us' element={<About_us />} ></Route>
          <Route path='Aim_Objects' element={<Aim_Objects />} ></Route>

          <Route path='Permanent_Members' element={<Permanent_Members />} ></Route>
          <Route path='Powers_and_Duties' element={<Powers_and_Duties />} ></Route>
          <Route path='Management_Committee' element={<Management_Committee />} ></Route>
          <Route path='Functions' element={<Functions />} ></Route>




          <Route path='disclamer' element={<Disclaimer />} ></Route>
          <Route path='privacypolicy' element={<Privacypolicy />} ></Route>
         

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
