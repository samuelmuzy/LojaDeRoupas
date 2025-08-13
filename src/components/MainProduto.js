import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Cards } from "../components/Cards";
import { DivCategorias, DivCategoriasMenor, DivProduto, TextosCategorias } from "../styles/StyledProduto";


export const MainProduto = () => {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categorias, setCategorias] = useState("Mulheres");

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
        navegar('/SegundaPagina', { state: { produtos: [produto] } });
    };
    const MudarCategoriaMulheres = () => {
        setCategorias("Mulheres");
    }
    const MudarCategoriaHomens = () => {
        setCategorias("Homens");
    }
    const MudarCategoriaJoias = () => {
        setCategorias("Joias");
    }
    return (

        <DivProduto>
            <DivCategorias>
                <h2>Categorias</h2>
                <DivCategoriasMenor>
                    <TextosCategorias onClick={MudarCategoriaMulheres}>Roupas para mulheres</TextosCategorias> {/*Muda a ctegoria quando o texto for clicado*/}
                    <TextosCategorias onClick={MudarCategoriaJoias}>Joias</TextosCategorias>
                    <TextosCategorias onClick={MudarCategoriaHomens}>Roupas para homens</TextosCategorias>
                </DivCategoriasMenor>
            </DivCategorias>
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
    )
}