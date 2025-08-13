import styled from 'styled-components'

export const P = styled.p`
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    margin-right: 5%;
    transition: 200ms;
    &:hover{
        color: #49d1d1;
    }
    
    @media (max-width: 768px){
        display: none;
    }
    
    @media (max-width: 480px){
        font-size: 12px;
    }
  
`
export const Imagem = styled.img`
    width: 10%;
    height: 100%;
    cursor: pointer;
    margin-left: 5%;
    object-fit: contain;

    @media (max-width: 768px){
        width: 64px;
        height: auto;
        margin-left: 0;
    }

    @media (max-width: 480px){
        width: 56px;
    }
`
export const DivHeader = styled.div`
    height: 15vh;
    border-bottom: solid 1px #49d1d1;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 768px){
        height: 64px;
        padding: 0 16px;
        justify-content: space-between;
        gap: 12px;
    }

    @media (max-width: 480px){
        height: 56px;
        padding: 0 12px;
        gap: 8px;
    }
`

export const MenuButton = styled.button`
    display: none;
    background: transparent;
    border: none;
    width: 40px;
    height: 40px;
    position: relative;
    cursor: pointer;
    padding: 0;
    
    @media (max-width: 768px){
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    span, span::before, span::after{
        content: '';
        display: block;
        width: 22px;
        height: 2px;
        background: #222;
        position: absolute;
        transition: 200ms;
    }
    span{
        top: 50%;
        transform: translateY(-50%);
    }
    span::before{
        top: -7px;
        position: absolute;
    }
    span::after{
        bottom: -7px;
        position: absolute;
    }
`

export const DrawerOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    opacity: ${props => props.open ? 1 : 0};
    pointer-events: ${props => props.open ? 'auto' : 'none'};
    transition: opacity 200ms ease;
    z-index: 1000;
`

export const DrawerPanel = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 75vw;
    max-width: 320px;
    background: #fff;
    box-shadow: -2px 0 12px rgba(0,0,0,0.15);
    transform: translateX(${props => props.open ? '0' : '100%'});
    transition: transform 220ms ease;
    z-index: 1001;
    display: flex;
    flex-direction: column;
    padding: 24px 16px;
`

export const NavList = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const NavItem = styled.button`
    background: transparent;
    border: none;
    text-align: left;
    font-size: 16px;
    padding: 12px 8px;
    cursor: pointer;
    border-radius: 8px;
    transition: background 160ms;
    
    &:hover{
        background: #f2f2f2;
        color: #49d1d1;
    }
`