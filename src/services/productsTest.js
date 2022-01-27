import { getCategories, getCategory, categories} from "./categoryTest"

export const products = [
    {
        _id: 1,
        name: "Dutch Milk",
        category: {id: 1, name: "Grocery"},
        price: "10$",
        inStock: "40",
        rate: 7
    },
    {
        _id: 2,
        name: "Helmet",
        category: {id: 2, name: "Skin Care"},
        price: "10$",
        inStock: "40",
        rate: 7
    },
    {
        _id: 3,
        name: "Iphone",
        category: {id: 6, name: "Cleaning Supplier"},
        price: "10$",
        inStock: "40",
        rate: 7
    },    
]
export function getProducts(){
    return products.map(product=> product)
}

export function getProduct(id){
    const product = products.find(product => product._id == id)
    return product
}
export function updateProduct(id, newProduct){
    const product = products.find(product => product._id == id)
    if (!product) return;
    product.name = newProduct.product
    product.category = categories.find(c=> c.id==newProduct.categoryId)
    product.price = newProduct.price
    product.inStock= newProduct.inStock
    product.rate = newProduct.rate

    return products 

}
export function addProduct(data){
    console.log(data)
    const newProduct = {
        _id: products.length+1,
        name: data.product,
        category: categories.find(c=> c.id==data.categoryId),
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