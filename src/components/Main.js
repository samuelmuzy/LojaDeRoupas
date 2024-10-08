import { DivMain} from "../styles/StyledMain"
import { useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Cards } from "./Cards";

export const Main = () => {
    
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const navegar = useNavigate();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=3")
            .then(response => {
                setProdutos(response.data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
            });
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    const PassarProdutos = (produto) => {
        navegar('/SecondPage', { state: { produtos: [produto] } });
    };

    return ( 
        <DivMain>
            
            <h1>Roupas masculinas</h1>
            <Cards categoria={"men's clothing"} clike={PassarProdutos} produtos={produtos}/>
            
        </DivMain>
    )
}
