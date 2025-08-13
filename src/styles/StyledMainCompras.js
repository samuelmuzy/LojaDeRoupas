import styled from "styled-components";

export const DivPrincipal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
    margin-top: 2%;
    margin-bottom: 2%;
    @media (max-width: 756px) {
        padding:5%;
        flex-direction: column;
    } 
`
export const TextoCompras = styled.p`
    font-size: 20px;
    width: 400px;
    padding: 1%;
    @media (max-width: 756px) {
        width: 90%;
        
    } 
`
export const Descricao = styled.p`
    font-size: 15px;
    width: 450px;
    padding: 1%;
    @media (max-width: 756px) {
        width: 90%;
        
    } 
`
export const ImagemCompras = styled.img`
    width: 35%;
    height: 70vh;
    padding: 3%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    @media (max-width: 756px) {
        width: 90%;
        
    } 
`