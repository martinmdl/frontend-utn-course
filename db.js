// const mongoose = require('mongoose');
// require('dotenv').config();
// const DB_URI = process.env.ENVURI;

// module.exports = () => {

//     const connect = () => {
//         mongoose.connect(
//             DB_URI,
//             {
//                 keepAlive: true,
//                 useNewUrlParser: true,
//                 useUnifiedTopology: true
//             },
//             (err) => {
//                 if (err) {
//                     console.log('DB_ERROR');
//                 } else {
//                     console.log('BASE DE DATOS CONECTADA');
//                 }
//             }
//         )
//     }
//     connect();
// }