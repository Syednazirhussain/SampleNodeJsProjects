// -----------------------------      COMMAND --app ----------------------------- //
// Create express main class

// import express from 'express';

// //import routes from './routes';

// class Server {
//   constructor() {
//     this.server = express();
//     this.middlewares();
//     this.routes();
//   }

//   middlewares() {
//     this.server.use(express.json());
//   }

//   routes() {
//     //this.server.use(routes);
//   }
// }

// export default new Server().server;

// -----------------------------      COMMAND --routes ----------------------------- //
// Create express route class

// import { Router } from 'express';

// // import all controllers
// // import SessionController from './app/controllers/SessionController';

// const routes = new Router();

// // Add routes
// // routes.get('/', SessionController.store);
// // routes.post('/', SessionController.store);
// // routes.put('/', SessionController.store);
// // routes.delete('/', SessionController.store);

// module.exports = routes;

// -----------------------------      COMMAND --sch ----------------------------- //
// Create a mongoose schema

// import mongoose from 'mongoose';

// const ServerSchema = mongoose.Schema(
//   {
//     content: {},
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.model('Server', ServerSchema);

// -----------------------------      COMMAND --mod ----------------------------- //
// Create a sequelize model

// import { Model } from 'sequelize';

// class Server extends Model {
//   static init(sequelize) {
//     super.init(
//       {}, // attributes
//       {
//         sequelize,
//       }
//     );

//     return this;
//   }
// }

// export default Server;

// -----------------------------      COMMAND --db ----------------------------- //
// Create postgres/mongodb database connection class

// import Sequelize from 'sequelize';
// import mongoose from 'mongoose';

// // import database configuration
// //import configDatabase from '../config/database';

// // import all models sequelize
// //import User from '../app/models/User';

// // Add models to array
// const models = [];

// class Server {
//     constructor() {
//         //     this.init();
//         //     this.mongo();
//         //   }

//         //   init() {
//         //     //this.connection = new Sequelize(configDatabase);
//         //     //models.map(model => model.init(this.connection));
//         //   }

//         mongo() {
//             this.mongoConnection = mongoose.connect(
//                 'mongodb://localhost:27017/database',
//                 {
//                     useNewUrlParser: true,
//                     useFindAndModify: true,
//                 }
//             );
//         }
//     }
// }

// export default new Server();

// -----------------------------      COMMAND --cfc ----------------------------- //
// create a controller with all the methods

// class Server {
//   async store(req, res) {
//     return res.json();
//   }

//   async index(req, res) {
//     return res.json();
//   }

//   async create(req, res) {
//     return res.json();
//   }

//   async show(req, res) {
//     return res.json();
//   }

//   async edit(req, res) {
//     return res.json();
//   }

//   async update(req, res) {
//     return res.json();
//   }

//   async destroy(req, res) {
//     return res.json();
//   }

//   async view(req, res) {
//     return res.json();
//   }

//   async grid(req, res) {
//     return res.json();
//   }

//   async form(req, res) {
//     return res.json();
//   }
// }

// export default new Server();

// -----------------------------      COMMAND --cst ----------------------------- //
// Create a controller with the store method

// class Server {
//   async store(req, res) {
//     return res.json();
//   }
// }

// export default new Server();

// -----------------------------      COMMAND --cgt ----------------------------- //
// Create a controller with the grid method

// class Server {
//   async grid(req, res) {
//     return res.json();
//   }
// }

// export default new Server();

// -----------------------------      COMMAND --st ----------------------------- //

// async store(req, res) {
//   return res.json();
// }







