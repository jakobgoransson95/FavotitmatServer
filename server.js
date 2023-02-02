// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt-nodejs');
// const cors = require('cors');
// const knex = require('knex');

// const db = knex({
//   client: 'pg',
//   connection: {
//     host: 'hattie.db.elephantsql.com',
//     port: 5432,
//     user: 'plcwwdix',
//     password: 'IW2fq8188nBZTNRTdxT-_bKFCwkh2FbR',
//     database: 'plcwwdix'
//   }
// });

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res) => {
//   res.send('ok');
// })

// app.post('/test', (req, res) => {
//   db('recept').insert({
//     maträtt: req.body.maträtt,
//   })
//     .then(function () {
//       db.select().from('recept')
//         .then(allMessage => {
//           res.json(allMessage)
//         })
//     })
// })


// app.listen(4000, () => {
//   console.log('working');
// })