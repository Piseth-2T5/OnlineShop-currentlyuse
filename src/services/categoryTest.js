export const categories = [
    {id: 1, name: "Grocery"},
    {id: 2, name: "Skin Care"},
    {id: 3, name: "Jewelry"},
    {id: 4, name: "DIY"},
    {id: 5, name: "Fabric"},
    {id: 6, name: "Cleaning Supplier"},
    {id: 7, name: "Decor"},
    {id: 8, name: "Electronic"},
    {id: 9, name: "Sport"},
]

export function getCategories(){
    return categories.map(c=> c)
}

export function getCategory(id){
    return categories.find(c => c.id === id)
}