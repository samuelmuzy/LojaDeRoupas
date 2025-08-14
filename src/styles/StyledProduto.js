import styled from "styled-components";

export const DivProduto = styled.div`
    display: flex;
    padding: 1%;
    @media (max-width: 756px) {
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction:column ;
        padding: 0%;
    } 
`
export const DivCategorias = styled.div`
    margin-right: 10%;
    border: solid 1px black;
    padding: 1%;
    width: 25%;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    @media (max-width: 756px) {
        width: 90%;
        margin-right:0;
        padding: 2%;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        height: auto;
        border: 0;
    } 
`
export const DivCategoriasMenor = styled.div`

    @media (max-width: 756px) {
        width: 90%;
        margin-right:0;
        padding: 4%;
        display: flex;
        flex-direction: column;
        height: 20%;
        text-align: center;
    } 
`
export const TextosCategorias = styled.p`
    font-size: 20px;
    cursor: pointer;
    transition: 200ms;
    border-bottom: #49d1d1 solid 1px;
    padding: 3%;
    margin-top: 5%;
    &:hover{
        color: #49d1d1;
    }
    &:after{
        border-bottom: #49d1d1 solid 1px;
    }
    @media (max-width: 756px) {
        padding: 1%;
        font-size: 17px;
        border-bottom: #49d1d1 solid 1px;
    } 

`