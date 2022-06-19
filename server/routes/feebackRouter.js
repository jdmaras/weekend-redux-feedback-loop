const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    //console.log('GET /feedback');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

router.post('/', (req,res) => {
    let queryText = `INSERT into "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, 
        [req.body.feeling, 
        req.body.understanding, 
        req.body.support, 
        req.body.comments])
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log (`ERR POSTing in router`, err);
        res.sendStatus(500);
    })
})
module.exports = router;