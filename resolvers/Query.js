exports.Query = {
    hello: (parent, args, context) => "World!",
    products: (parent, {filter}, { products, reviews }) => {
        let filteredProducts = products;
        if(filter){

            const { onSale, avgRating } = filter

            if(onSale){
                filteredProducts = filteredProducts.filter(product => {
                    return product.onSale;
                });
            }
            if([1,2,3,4,5].includes(avgRating)){
                filteredProducts = filteredProducts.filter(product => {
                    let count = 0;
                    let totalRatings = reviews.reduce((total, review) => {
                        if(review.productId === product.id){
                            count++;
                            return total += Number(review.rating);
                        }
                        return total;
                    }, 0);
                    return Math.round(totalRatings / count) === avgRating ? true : false;
                });
            }
        }
        return filteredProducts;
    },
    product: (parent, { id }, { products }) => {
        return products.find(product => product.id === id) || null;
    },
    categories: (parent, args, { categories }) => categories,
    category: (parent, { id }, { categories }) => {
        return categories.find(category => category.id === id) || null;
    },
    reviews: (parent, args, { reviews }) => reviews,
    review: (parent, { id }, { reviews }) => {
        return reviews.find(review => review.id === id);
    },

    
}