import { prettyDOM } from "@testing-library/react"
import { getCategories } from "./categoryTest"

export const products = [
    {
        _id: 1,
        name: "Dutch Milk",
        category: "Grocery",
        price: "10$",
        inStock: "40",
        rate: 7
    },
    
]

export function getProduct(id){
    const product = products.find(product => product._id == id)
    return product
}
export function updateProduct(id, newProduct){
    const product = products.find(product => product._id == id)
    if (!product) return;
    product.name = newProduct.product
    product.category = newProduct.category
    product.price = newProduct.price
    product.inStock= newProduct.inStock
    product.rate = newProduct.rate

    return products 

}
export function addProduct(data){
    const categories = getCategories()
    const newProduct = {
        _id: products.length+1,
        name: data.product,
        category: data.category,
        price: data.price,
        inStock: data.inStock,
        rate: data.rate
    }
    products.push(newProduct)
    return products
}
export function deleteProduct(id){
    const product = products.find(product => product._id === id)
    const index = products.indexOf(product)
    products.splice(index,1)
    return products
}