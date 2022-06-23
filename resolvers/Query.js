exports.Query = {
    hello: (parent, args, context) => "World!",
    products: (parent, args, { products }) => products,
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