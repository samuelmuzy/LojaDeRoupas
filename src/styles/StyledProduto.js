import styled from "styled-components";

export const DivProduto = styled.div`
    display: flex;
    padding: 1%;
`
export const DivCategorias = styled.div`
    margin-right: 10%;
    border: solid 1px black;
    padding: 1%;
    width: 25%;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;;
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

`