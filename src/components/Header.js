import {P,Imagem,DivHeader,MenuButton,DrawerOverlay,DrawerPanel,NavList,NavItem} from '../styles/StyledHeader'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Imagem1 from '../assets/7570000-removebg-preview.png'

export const Header = () =>{
    const navegar = useNavigate()
    const [drawerAberto, setDrawerAberto] = useState(false)
    
    const onClickPaginaPrincipal = () =>{ //metod para passar o caminho para pagina principal
        navegar('/');
        setDrawerAberto(false);
    }
    const onClickPaginaProdutos = () =>{ //pagina produtos
        navegar('/TerceiraPagina');
        setDrawerAberto(false);
    }
    const toggleDrawer = () => setDrawerAberto(prev => !prev)


    return(
        <>
            <DivHeader>
                <Imagem onClick={onClickPaginaPrincipal} src={Imagem1} alt='imagem header'/>
                <P onClick={onClickPaginaPrincipal}>Pagína Principal</P>
                <P onClick={onClickPaginaProdutos}>Produtos</P>
                <MenuButton aria-label='Abrir menu' onClick={toggleDrawer}>
                    <span></span>
                </MenuButton>
            </DivHeader>
            <DrawerOverlay open={drawerAberto} onClick={() => setDrawerAberto(false)} />
            <DrawerPanel open={drawerAberto}>
                <NavList>
                    <NavItem onClick={onClickPaginaPrincipal}>Pagína Principal</NavItem>
                    <NavItem onClick={onClickPaginaProdutos}>Produtos</NavItem>
                </NavList>
            </DrawerPanel>
        </>
    )
}