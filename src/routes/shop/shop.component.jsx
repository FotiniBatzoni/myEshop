const { useContext }= require('react');

const { ProductsContext } = require('../../context/products.context');
const {ProductCard}  = require( '../../components/product-card/product-card.component');

const Shop = () => {
    const  {products}  = useContext(ProductsContext);

    return (
        <div>
        {products.map(({product}) =>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}


export default Shop;