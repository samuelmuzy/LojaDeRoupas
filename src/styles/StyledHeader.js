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
  
`
export const Imagem = styled.img`
    width: 10%;
    height: 100%;
    cursor: pointer;
    margin-left: 5%;
`
export const DivHeader = styled.div`
    height: 15vh;
    border-bottom: solid 1px #49d1d1;
    display: flex;
    align-items: center;
    justify-content: space-around;
`