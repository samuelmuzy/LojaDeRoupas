import {DivProdutos,Card,Imagem} from "../styles/StyledMain"

export const Cards = (props) =>{
    return(
        <DivProdutos>
            {props.produtos.map((prod)=>{
                return(
                <>
                    <Card>
                        <Imagem src={prod.image}/>
                        <p>{prod.title}</p>
                        <p>{"R$ " + prod.price}</p>
                    </Card>
                </>
                )
            })
            }
        </DivProdutos>
    )
}