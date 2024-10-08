import styled from 'styled-components'
import ImagemP from '../assets/freepik-export-202410052112196ykP.png'

export const Button = styled.button`
    height: 6vh;
    width: ${(props) => props.width  || '15%'};
    margin-top: 3%;
    border-radius: 8px;
    background-color: white;
    border: solid 1px #DB8D0F;
    color: #07548c;
    transition: 500ms;
    border:solid 1px black;
    margin-left: ${(props) => props.margin || '8%'};
    cursor: pointer;
    &:hover{
        color: white;
        background-color: #49d1d1;
    }
`

export const DivPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    width: 100%;
    height: 85vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${ImagemP});
    background-size: cover;
`;
export const Texto = styled.p`
    font-size: 26px;
    width: 32%;
    margin-left: 8%;
    margin-top: 3%;

`
export const Titulo = styled.h1`
    margin-left: 8%;
    font-size: 40px;
`