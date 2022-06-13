const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const query = `
  SELECT movies.title, movies.id, array_agg(name) AS genres
  FROM "movies"
  LEFT JOIN movies_genres ON movies_genres.movie_id = movies.id
  LEFT JOIN genres ON movies_genres.genre_id = genres.id
  GROUP BY movies.title, movies.id;`
  pool.query(query)
    .then(result => {
      res.send(result.rows);
      console.log(result.rows)
    }).catch(err =>{
      console.log('ERROR in GET genres', err);
      res.sendStatus(500)
    })
  // Add query to get all genres
});

module.exports = router;