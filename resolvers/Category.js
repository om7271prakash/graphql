exports.Category = {
    products: ({ id }, { filter }, { db }) => {
        const categoryProducts = db.products.filter(product => product.categoryId === id) || null;
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