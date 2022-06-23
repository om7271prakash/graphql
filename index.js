const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        hello: String,
        numberOfAnimals: Int,
        price: Float,
        onSale: Boolean,
    }
`;

const resolvers = {
    Query: {
        hello: () => {
            return "World!"
        },
        numberOfAnimals: () => {
            return 34;
        },
        price: () => {
            return 123.23;
        },
        onSale: () => {
            return true;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url}) => {
    console.log(`Server is ready at ${url}`);
});