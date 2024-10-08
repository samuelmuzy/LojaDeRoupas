import { Compras } from "./pages/Compras";
import { Loja } from "./pages/Loja";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Produtos } from "./pages/Produtos";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loja/>}/>
          <Route path='/SecondPage' element={<Compras/>}/>
          <Route path='/TerceiraPage' element={<Produtos/>}/>
          <Route path='*' element={<h1>Not found</h1>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
