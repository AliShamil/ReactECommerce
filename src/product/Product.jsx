import ProductInfo from './components/ProductInfo'
import Navbar from '../common/Navbar'

function Product() {
    return (
        <div className="lg:px-[117px]">
            <Navbar />
            <ProductInfo />
        </div>
    )
}

export default Product