import { useLocation } from 'react-router-dom';
import { MainCompras } from '../components/MainCompras';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Compras = () => {
    
    const location = useLocation();
    /*Recebe o arry da pagina Loja*/
    const { produtos } = location.state || {}; 
    
    if (!produtos) {
        return <div>Nenhum produto selecionado</div>;
    }

    return (
        <>
            <Header></Header>
            <MainCompras produtos={produtos}></MainCompras> 
            <Footer></Footer>
        </>
    );
}

