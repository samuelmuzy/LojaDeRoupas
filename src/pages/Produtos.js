import { DivMain} from "../styles/StyledMain"
import { useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Cards } from "../components/Cards";
import { Header } from "../components/Header";
import { DivProduto } from "../styles/StyledProduto";


export const Produtos = () =>{
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categorias,setCategorias] = useState("Mulheres");
    
    const navegar = useNavigate();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
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
    const MudarCategoriaMulheres = () =>{
        setCategorias("Mulheres");
    }
    const MudarCategoriaHomens = () =>{
        setCategorias("Homens");
    }
    const MudarCategoriaJoias = () =>{
        setCategorias("Joias");
    }
    return(
        <>
            <Header></Header>
            <DivProduto>
            <div>
                    <p onClick={MudarCategoriaMulheres}>Roupas para mulheres</p>
                    <p onClick={MudarCategoriaHomens}>Roupas para homens</p>
                    <p onClick={MudarCategoriaJoias}>Joias</p>
                </div>
                <div>
                    {categorias === 'Mulheres' && 
                        <Cards categoria={"women's clothing"} clike={PassarProdutos} produtos={produtos} />
                    }
                    {categorias === 'Homens' && 
                        <Cards categoria={"men's clothing"} clike={PassarProdutos} produtos={produtos} />
                    }
                    {categorias === 'Joias' && 
                        <Cards categoria={"jewelery"} clike={PassarProdutos} produtos={produtos} />
                    }
                </div>
            </DivProduto>
        </>
    )
}
