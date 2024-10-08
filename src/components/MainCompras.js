import React from "react"
import { DivPrincipal,TextoCompras,ImagemCompras, Descricao } from "../styles/StyledMainCompras"
import { Button } from "../styles/StyleImgPrin"
import { Card } from "../styles/StyledMain"

export const MainCompras = (props) =>{
    
    return(
    <>
        {props.produtos.map((prod)=>{
                
            return(  
                <DivPrincipal key={prod.id}>
                    <ImagemCompras alt="imagem do item selecionado para compra" src={prod.image}></ImagemCompras>
                    <div>
                        <TextoCompras>{prod.title}</TextoCompras>
                        <TextoCompras>{"R$ " + prod.price}</TextoCompras>
                        <Descricao>{prod.description}</Descricao>
                        <Button width={'30%'} margin={'0px'}>Comprar</Button>
                    </div>
                </DivPrincipal>
                
                )
            })
            }
    </>
    )
}