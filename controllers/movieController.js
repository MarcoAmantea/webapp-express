const dbConnection = require("../data/db-connection");

const index = (req, res) => {
   const sql = "SELECT * FROM movies"

   dbConnection.query(sql, (err, movies) =>{
    if(err){
        return res.status(500).json({
            message: "HAI ROTTO IL SERVER, PEZZO DI IDIOTA!"
        })
    }else {
        return res.status(200).json({
            status: "success",
            message:"ECCO A TE TUTTI I FILM, MA ESCI UN PO' DI CASA!",
            data: movies,
        })
    }
    
   })
}

const show = (req, res) => {
    const id = req.params.id;   
    const sql = `SELECT * FROM movies WHERE id = ? `;
    const sqlReviews = `
    SELECT reviews. *
    FROM movies
    JOIN reviews
    ON movies.id = reviews.movie_id
    WHERE movies.id = ?
    `
    dbConnection.query(sql, [id], (err, movies) => {
        if(err) {
            return res.status(500).json({
            message: "HAI ROTTO IL SERVER! MALEDETTO IDIOTA!"
        })
    }
    if (movies.length === 0) {
        return res.status(404).json({
            message: "IL FILM NON E' PRESENTE IN LIBRERIA. VAI A FARE UNA PASSEGGIATA!"
        })
    }

    dbConnection.query(sqlReviews, [id], (err,reviews) =>{
        if(err){
            return res.status(500).json({
                message: "HAI ROTTO IL SERVER! MALEDETTO IDIOTA!"
            })
        }
        return res.status(200).json({
            status: "success",
            data: {
                ...movies[0],
                reviews
            }
        })
    })
    })
}

module.exports = {
    index,
    show,
}