import {DivProdutos,Card,Imagem} from "../styles/StyledMain"

export const Cards = (props) => {
    return (
        <DivProdutos>
            {props.produtos
                .filter((prod) => {
                    return prod.category === props.categoria; // Filtra os produtos pela categoria
                })
                .map((prod) => { // Mapeia os produtos filtrados para criar os componentes Card
                    return (
                        <Card onClick={() => props.clike(prod)} key={prod.id}>
                            <Imagem src={prod.image} alt={prod.title} />
                            <p>{prod.title}</p>
                            <p>{"R$ " + prod.price}</p>
                        </Card>
                    );
                })
            }
        </DivProdutos>
    );
}
