module.exports = function(app,path){
    app.get('/login', function(req,res){
        let filepath = path.resolve('./www/index.html');
        res.sendFile(filepath);
    });
 }