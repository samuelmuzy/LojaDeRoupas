import {P,Imagem,DivHeader} from '../styles/StyledHeader'
import { useNavigate } from 'react-router-dom';
import Imagem1 from '../assets/7570000.jpg'

export const Header = () =>{
    const navegar = useNavigate()
    
    const onClickPaginaPrincipal = () =>{
        navegar('/')
    }
    const onClickPaginaProdutos = () =>{
        navegar('/TerceiraPage')
    }


    return(
        <DivHeader>
            <Imagem onClick={onClickPaginaPrincipal} src={Imagem1} alt='imagem header'/>
            <P onClick={onClickPaginaPrincipal}>Pagína Principal</P>
            <P onClick={onClickPaginaProdutos}>Produtos</P>
        </DivHeader>
    )
}