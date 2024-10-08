import styled from "styled-components";

export const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3%;
`
export const DivConteudos = styled.div`
    display: flex;
    flex-direction: row;
    padding: 3%;
    align-items: center;
    justify-content: space-around;
    margin-top: 3%;
`

export const DivProdutos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
`
export const Card = styled.div`
    flex: 1 1 280px;
    margin: 10px;
    max-width: 300px;
    border: 1px solid #ddd;
    padding: 15px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    &:hover{
        box-shadow:rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; 
    }
`

export const Imagem = styled.img`
    width: 100%;
    height: 300px;
`
export const ImagemMaior = styled.img`
    width: 40%;
`

export const TextVerao = styled.p`
    width: 600px;
`



