const index = (req, res) => {
    res.json({
        message: "index di film"
    })
}

const show = (req, res) => {
    res.json({
        message: "show dei film"
    })
}

module.exports = {
    index,
    show,
}