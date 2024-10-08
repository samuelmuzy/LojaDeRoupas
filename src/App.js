import { Compras } from "./pages/Compras";
import { Loja } from "./pages/Loja";
import {BrowserRouter, Route, Routes} from 'react-router-dom' //Importacão para navegar entre paginas
import { Produtos } from "./pages/Produtos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loja/>}/>
          <Route path='/SegundaPagina' element={<Compras/>}/>
          <Route path='/TerceiraPagina' element={<Produtos/>}/> {/*Encaminha para uma nova pagina */}
          <Route path='*' element={<h1>Not found</h1>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
