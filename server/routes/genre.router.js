const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/details/:id', (req, res) => {
  console.log('The movie ID selected was', req.params.id)
  // Add query to get all genres
  //JOIN tables to get relationship between genres
  //and movies
  const query = `SELECT "genres"."name"
    FROM "genres"
    JOIN "movies_genres"
    ON "genres".id = "movies_genres"."genre_id"
    JOIN "movies"
    ON "movies_genres"."movie_id" = "movies"."id"
    WHERE "movies"."id" = $1;`;
  pool.query(query, [req.params.id])
    .then(result => {
      res.send(result.rows);
    })//send back genre rows that have a matching movie ID
    .catch(error => {
      console.log('Error in getting movie in router', error);
      res.sendStatus(500);
    })
});

module.exports = router;