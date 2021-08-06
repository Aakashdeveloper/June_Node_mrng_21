var graphql = require('graphql');
const axios = require('axios')

const{
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLNonNull
} =graphql



const RestaurantType = new GraphQLObjectType({
    name:'Restaurant',
    fields:{
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        city: {type: GraphQLString},
        locality: {type: GraphQLString},
        thumb: {type: GraphQLString},
        aggregate_rating: {type: GraphQLString},
        rating_text: {type: GraphQLString},
        min_price: {type: GraphQLInt},
    }
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        restaurants:{
            type:RestaurantType,
            args:{id:{type: GraphQLInt}},
            resolve(parentValue, args){
                return axios.get(`http://localhost:8700/restaurants/${args.id}`)
                    .then((res) => res.data)
            }
        }
    }
})

const mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
       addRestaurant:{
           type:RestaurantType,
           args:{
            id: {type: new GraphQLNonNull(GraphQLInt)},
            name: {type: GraphQLString},
            city: {type: GraphQLString},
            locality: {type: GraphQLString},
            thumb: {type: GraphQLString},
            aggregate_rating: {type: GraphQLString},
            rating_text: {type: GraphQLString},
            min_price: {type: GraphQLInt},
           },
           resolve(parentValue, {id,name,rating_text}){
            return axios.post(`http://localhost:8700/restaurants`,{id,name,rating_text})
                .then((res) => res.data)
        }
       } 
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
})