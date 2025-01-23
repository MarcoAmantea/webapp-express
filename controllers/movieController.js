const dbConnection = require("../data/db-connection");

const index = (req, res) => {
   const sql = "SELECT * FROM movies"

   dbConnection.query(sql, (err, movies) =>{
    if(err){
        return res.status(500).json({
            message: "Errore interno del server"
        })
    }else {
        return res.status(200).json({
            status: "success",
            data: movies,
        })
    }
    
   })
}

const show = (req, res) => {
    const id = req.params.id;
    console.log('id', id);
    
    const sql = `SELECT * FROM movies WHERE id = ? `;
    dbConnection.query(sql, [id], (err, movies) => {
        if(err) {
            return res.status(500).json({
            message: "errore interno del server"
        })
    }
    if (movies.length === 0) {
        return res.status(404).json({
            message: "film non trovato"
        })
    }else {
        return res.status(200).json({
            status: "success",
            data: movies[0]
        })
    }
    })
}

module.exports = {
    index,
    show,
}