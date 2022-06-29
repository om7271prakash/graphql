exports.Query = {
    hello: (parent, args, context) => "World!",
    products: (parent, {filter}, { db }) => {
        let filteredProducts = db.products;
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
                    let totalRatings = db.reviews.reduce((total, review) => {
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
    product: (parent, { id }, { db }) => {
        return db.products.find(product => product.id === id) || null;
    },
    categories: (parent, args, { db }) => db.categories,
    category: (parent, { id }, { db }) => {
        return db.categories.find(category => category.id === id) || null;
    },
    reviews: (parent, args, { db }) => db.reviews,
    review: (parent, { id }, { db }) => {
        return reviews.find(review => db.review.id === id);
    },
}