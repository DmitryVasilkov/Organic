import { useSelector } from "react-redux"


export const useCart = () => {
    const list = useSelector(({cart}) => cart.list)
    const products  = useSelector(({products}) => products.list)
    const result = list.map(item => {
        const product = products.find(({id}) => id === item.id)
        return {...item, ...product}
    })


    if(products.length === 0){
        return []
    }
return result

}