import { createContext, useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext();
export default Context;

export const GlobalContext = ({ children }) => {
 
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState("All")
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const navigate = useNavigate();

    async function getProducts() {
        const response = await fetch("http://localhost:5000/api/products");
        if (response.ok) {
            const data = await response.json()
            setProducts(data.product)
        }
        else {
            console.log(response.status)
            console.log(response.json())
        }
    }

    async function getCategories() {
        const response = await fetch("http://localhost:5000/api/products");
        if (response.ok) {
            const data = await response.json()
            const { product } = data;
            const cat = Array.from(new Set(product.map(p => p.category)));
            setCategories(["All", ...cat])
        }
        else {
            console.log(response.status)
            console.log(response.json())
        }
    }

    async function filterProducts(category) {
        if (category === "All")
            setFilteredProducts([...products])
        else {
            var filtered = products.filter((p) => p.category === category);
            console.log([...filtered])
            setFilteredProducts(filtered);
        }
    }

    useEffect(()=>{
        getProducts()
    },[])

    const contextData = {
        getCategories: getCategories,
        categories: categories,
        navigate: navigate,
        currentCategory: currentCategory,
        setCurrentCategory: setCurrentCategory,
        filterProducts: filterProducts,
        filteredProducts: filteredProducts,
        products: products,
        getProducts: getProducts
    }

    return (
        <Context.Provider value={contextData}>{children}</Context.Provider>
    )
}