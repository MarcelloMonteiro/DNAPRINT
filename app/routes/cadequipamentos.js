module.exports = function(app){
    app.get('/cadequipamentos', function(req, res){
        res.render("cadastro_equipamentos/cadequipamentos")
    })
}