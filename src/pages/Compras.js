import { useLocation } from 'react-router-dom';
import { MainCompras } from '../components/MainCompras';
import { Header } from '../components/Header';

export const Compras = () => {
    
    const location = useLocation();
    const { produtos } = location.state || {};
    
    if (!produtos) {
        return <div>Nenhum produto selecionado</div>;
    }

    return (
        <>
            <Header></Header>
            <MainCompras produtos={produtos}></MainCompras>
        </>
    );
}

