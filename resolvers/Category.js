exports.Category = {
    products: ({ id }, { filter }, { products }) => {
        const categoryProducts = products.filter(product => product.categoryId === id) || null;
        let filteredCategoryProducts = categoryProducts;
        if(filter){
            if(filter.onSale){
                filteredCategoryProducts = filteredCategoryProducts.filter(product => {
                    return product.onSale;
                });
            }
        }
        return filteredCategoryProducts;
    }
}