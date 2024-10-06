import { DivMain,InputM} from "../styles/StyledMain"
import { useEffect,useState } from "react"
import axios from 'axios'
import { Cards } from "./Cards";

export const Main = () =>{
    
    const [produtos,setProdutos] = useState([]);
    const [loading,setLoading] = useState(true);
    
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(response=>{
            setProdutos(response.data)
            setLoading(false);
        })
        .catch(error=>{
            setLoading(false)
            console.log(error);
        })
    })

    if (loading) {
        return <div>Carregando...</div>;
    }

    return( 
        <DivMain>
            <InputM placeholder="Procurar produto"/>
            <Cards produtos={produtos}></Cards>
        </DivMain>
    )
}