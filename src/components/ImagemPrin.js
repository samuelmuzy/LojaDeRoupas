import { DivPrincipal,Titulo,Texto,Button } from "../styles/StyleImgPrin"
import { useNavigate } from 'react-router-dom';

export const ImagemPrin = () =>{
    const navegar = useNavigate();

    const onClickPaginaProdutos = () =>{
        navegar('/TerceiraPagina')
    }
    return(
    <>
        <DivPrincipal>
            <Titulo>Moda com Estilo</Titulo>
            <Texto>A moda é sobre expressar sua identidade. Escolha peças que combinam com você </Texto>
            <Button onClick={onClickPaginaProdutos}>Clique aqui</Button>
        </DivPrincipal>
    </>
    )
}