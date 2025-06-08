// const http = require("http");
// const app = require(`./app`);
// const mongodb = require("mongodb");

// let db;
// const connectionString =
//   "mongodb+srv://bosco_77:rZSZ6aAt4tuSLoGs@cluster0.iq6ouqq.mongodb.net/";

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
//       const app = require(".app");
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

const http = require("http");
// const app = require("./app");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://bosco_77:rZSZ6aAt4tuSLoGs@cluster0.iq6ouqq.mongodb.net/";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log("ERROR on connection MongoDB");
    } else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      const app = require("./app"); // BU YERNI OLIB TASHLANG!
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
