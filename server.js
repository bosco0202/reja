const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://bosco:wXNjHBSFU0cd9NSt@cluster0.pdyrnl9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log("Error on connection to Mongodb");
    } else {
      console.log("connected to database successfully");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `the server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);

// const http = require("http");
// // const app = require(`./app`);
// const mongodb = require("mongodb");

// let db;
// const connectionString =
//   "mongodb+srv://bosco_77:ingpNzHiBYj3l6dQ@cluster0.iq6ouqq.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

// mongodb.connect(
//   connectionString,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err, client) => {
//     if (err) console.log("ERROR on connection MongoDB");
//     else {
//       console.log("MongoDB connection succeed");
//       module.exports = client;
//       const app = require("./app");
//       const server = http.createServer(app);
//       let PORT = 3000;
//       server.listen(PORT, function () {
//         console.log(
//           `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
//         );
//       });
//     }
//   }
// );
