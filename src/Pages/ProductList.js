import CardList from '../components/CardList/CardList'
import {useState, useEffect} from 'react';
import productos from '../utils/productsMock'
import { useParams } from 'react-router-dom'


const ProductList = () => {
    const [products, setProducts] = useState([])
    const { categoria } = useParams()

    useEffect( () => {
        getProducts()
       .then( (response) => {
        setProducts([])
        filtrarCategoria(response)
    })   
    }, [categoria])

    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            resolve(productos)
        })
    }

    const filtrarCategoria = (arrayProductos) => {
        return arrayProductos.map( (item) =>{
            if(item.categoria == categoria) {
                return setProducts(products => [...products, item])
            }
        })
    }

    return(
        <>
        <h2>Suplementos de {categoria}</h2>
        <div>
        <CardList products={products}/>
        </div>
        </>
    )
}

export default ProductList