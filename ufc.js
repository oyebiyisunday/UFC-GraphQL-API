// ufc.js

const { ApolloServer, gql } = require("apollo-server");

// Fighter data (20 active UFC fighters)

const fighters = [
  {
    id: 1,
    firstName: "Alexander",
    lastName: "Volkanovski",
    nickname: "The Great",
    wins: 27,
    losses: 4,
    heightMeters: 1.68,
    weightClass: "Featherweight",
    fightingOutOf: "Windang, New South Wales, Australia",
  },
  {
    id: 2,
    firstName: "Islam",
    lastName: "Makhachev",
    nickname: "N/A",
    wins: 28,
    losses: 1,
    heightMeters: 1.78,
    weightClass: "Welterweight",
    fightingOutOf: "Makhachkala, Dagestan, Russia",
  },
  {
    id: 3,
    firstName: "Leon",
    lastName: "Edwards",
    nickname: "Rocky",
    wins: 22,
    losses: 6,
    heightMeters: 1.88,
    weightClass: "Welterweight",
    fightingOutOf: "Birmingham, England",
  },
  {
    id: 4,
    firstName: "Max",
    lastName: "Holloway",
    nickname: "Blessed",
    wins: 27,
    losses: 8,
    heightMeters: 1.8,
    weightClass: "Lightweight",
    fightingOutOf: "Waianae, Hawaii, United States",
  },
  {
    id: 5,
    firstName: "Charles",
    lastName: "Oliveira",
    nickname: "Do Bronx",
    wins: 36,
    losses: 11,
    heightMeters: 1.78,
    weightClass: "Lightweight",
    fightingOutOf: "Guarujá, São Paulo, Brazil",
  },
  {
    id: 6,
    firstName: "Justin",
    lastName: "Gaethje",
    nickname: "The Highlight",
    wins: 26,
    losses: 5,
    heightMeters: 1.81,
    weightClass: "Lightweight",
    fightingOutOf: "Denver, Colorado, United States",
  },
  {
    id: 7,
    firstName: "Sean",
    lastName: "O'Malley",
    nickname: "Suga",
    wins: 18,
    losses: 3,
    heightMeters: 1.8,
    weightClass: "Bantamweight",
    fightingOutOf: "Phoenix, Arizona, United States",
  },
  {
    id: 8,
    firstName: "Kamaru",
    lastName: "Usman",
    nickname: "The Nigerian Nightmare",
    wins: 21,
    losses: 4,
    heightMeters: 1.83,
    weightClass: "Welterweight",
    fightingOutOf: "Denver, Colorado, United States",
  },
  {
    id: 9,
    firstName: "Israel",
    lastName: "Adesanya",
    nickname: "The Last Stylebender",
    wins: 24,
    losses: 5,
    heightMeters: 1.93,
    weightClass: "Middleweight",
    fightingOutOf: "Auckland, New Zealand",
  },
  {
    id: 10,
    firstName: "Alex",
    lastName: "Pereira",
    nickname: "Poatan",
    wins: 13,
    losses: 3,
    heightMeters: 1.93,
    weightClass: "Light Heavyweight",
    fightingOutOf: "Danbury, Connecticut, United States",
  },
  {
    id: 11,
    firstName: "Sean",
    lastName: "Strickland",
    nickname: "Tarzan",
    wins: 29,
    losses: 6,
    heightMeters: 1.85,
    weightClass: "Middleweight",
    fightingOutOf: "Corona, California, United States",
  },
  {
    id: 12,
    firstName: "Belal",
    lastName: "Muhammad",
    nickname: "Remember the Name",
    wins: 24,
    losses: 4,
    heightMeters: 1.8,
    weightClass: "Welterweight",
    fightingOutOf: "Chicago, Illinois, United States",
  },
  {
    id: 13,
    firstName: "Brandon",
    lastName: "Moreno",
    nickname: "The Assassin Baby",
    wins: 23,
    losses: 8,
    heightMeters: 1.7,
    weightClass: "Flyweight",
    fightingOutOf: "Tijuana, Baja California, Mexico",
  },
  {
    id: 14,
    firstName: "Alexa",
    lastName: "Grasso",
    nickname: "N/A",
    wins: 16,
    losses: 5,
    heightMeters: 1.65,
    weightClass: "Women's Flyweight",
    fightingOutOf: "Guadalajara, Jalisco, Mexico",
  },
  {
    id: 15,
    firstName: "Weili",
    lastName: "Zhang",
    nickname: "Magnum",
    wins: 26,
    losses: 4,
    heightMeters: 1.63,
    weightClass: "Women's Flyweight",
    fightingOutOf: "Beijing, China",
  },
  {
    id: 16,
    firstName: "Valentina",
    lastName: "Shevchenko",
    nickname: "Bullet",
    wins: 26,
    losses: 4,
    heightMeters: 1.65,
    weightClass: "Women's Flyweight",
    fightingOutOf: "Bishkek, Kyrgyzstan",
  },
  {
    id: 17,
    firstName: "Tom",
    lastName: "Aspinall",
    nickname: "N/A",
    wins: 15,
    losses: 3,
    heightMeters: 1.96,
    weightClass: "Heavyweight",
    fightingOutOf: "Salford, Lancashire, England",
  },
  {
    id: 18,
    firstName: "Ilia",
    lastName: "Topuria",
    nickname: "El Matador",
    wins: 17,
    losses: 0,
    heightMeters: 1.7,
    weightClass: "Lightweight",
    fightingOutOf: "Alicante, Spain",
  },
  {
    id: 19,
    firstName: "Merab",
    lastName: "Dvalishvili",
    nickname: "The Machine",
    wins: 21,
    losses: 4,
    heightMeters: 1.68,
    weightClass: "Bantamweight",
    fightingOutOf: "Long Island, New York, United States",
  },
  {
    id: 20,
    firstName: "Alexandre",
    lastName: "Pantoja",
    nickname: "The Cannibal",
    wins: 30,
    losses: 5,
    heightMeters: 1.65,
    weightClass: "Flyweight",
    fightingOutOf: "Rio de Janeiro, Brazil",
  },
];

// GraphQL schema

const typeDefs = gql`
  type Fighter {
    id: ID!
    firstName: String!
    lastName: String!
    nickname: String!
    wins: Int!
    losses: Int!
    heightMeters: Float!
    weightClass: String!
    fightingOutOf: String!
    fullName: String!
  }

  type Query {
    fighterByName(name: String!): Fighter
    fightersByWeightClass(weightClass: String!): [Fighter!]!
    fighters: [Fighter!]!
  }
`;

// Resolvers

const resolvers = {
  Fighter: {
    fullName: (parent) => `${parent.firstName} ${parent.lastName}`,
  },
  Query: {
    fighterByName: (_, { name }) => {
      const normalized = name.trim().toLowerCase();
      return (
        fighters.find((f) => {
          const full = `${f.firstName} ${f.lastName}`.toLowerCase();
          return full === normalized;
        }) || null
      );
    },
    fightersByWeightClass: (_, { weightClass }) => {
      const normalized = weightClass.trim().toLowerCase();
      return fighters.filter(
        (f) => f.weightClass.toLowerCase() === normalized
      );
    },
    fighters: () => fighters,
  },
};


// Start Apollo Server

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen({ port: 4000 })
  .then(({ url }) => {
    console.log(`UFC GraphQL server running at ${url}`);
  })
  .catch((err) => {
    console.error("Error starting server:", err);
  });
