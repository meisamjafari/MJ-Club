import Home from "./pages/Home"
import Category from "./pages/category"
import ProductInfo from './pages/ProductInfo'

const routes = [
    {path:'/' , element : <Home/> },
    {path:'/category/:categoryName' , element:<Category/>},
    {path:'productInfo/:productName' , element :<ProductInfo/>}
]


export default routes