import { DivMain,DivConteudos, ImagemMaior, TextVerao} from "../styles/StyledMain"
import { useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom';
import ImagemOculos from '../assets/oculos-de-sol-viva-la-vida-ods015-importe-go-142074.jpg'
import axios from 'axios'
import { Cards } from "./Cards";


export const Main = () => {
    
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const navegar = useNavigate();

    useEffect(() => { //Carrega a api quando a pagina e aberta
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

    const PassarProdutos = (produto) => { //Passsa o produto Clicado para a pagina de compra 
        navegar('/SegundaPagina', { state: { produtos: [produto] } });
    };

    return ( 
        <DivMain>
            
            <h1>Descubra novas roupas</h1>
            <Cards categoria={"men's clothing"} clike={PassarProdutos} produtos={produtos}/> {/*Coloca os dados da api em cards na sua respectiva categoria*/}
            <DivConteudos>
                <div>
                    <h2>Seja aberta a novas experiências</h2>
                    <TextVerao>Descubra o que há de melhor na moda de verão deste ano com a Fashion Modas. Experimente novas emoções com nossos produtos.</TextVerao>
                </div>
                <ImagemMaior alt="mulher de oculos" src={ImagemOculos}/>
            </DivConteudos>
        </DivMain>
    )
}
