module.exports = function(app){
    app.get('/equipamentos', function(req, res){
        res.render("equipamentos/equipamentos")
    })
}