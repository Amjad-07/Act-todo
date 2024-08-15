
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import { Login } from './pages/login';
import { Signup } from './pages/signup';
import { Landing } from './pages/landing';
import { useState } from 'react';

function App(){
  const [user,setUser] = useState(
    [
       { username:"john",
        password:"123"
       },
       { username:"amjad",
        password:"123"
       }
       

    ]
)
  return <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login user={user} setUser={setUser}/>}></Route>
    <Route path='/signup' element={<Signup user={user} setUser={setUser} />}> </Route>
    <Route path='/landing' element={<Landing/>}></Route>



    <Route></Route>

  </Routes>
  </BrowserRouter>
  </>
  
}

export default App;
