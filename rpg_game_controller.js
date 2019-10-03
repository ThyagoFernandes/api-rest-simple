RPG = require('./RPGModel');    
exports.index = function (req, res) {
    RPG.find({}, function(err, task) {
        if (err)
          res.send(err);
        res.json({data:task});
      });
};
exports.new = function (req, res) {
    var rpg = new RPG(req.body);
    console.log(req.body)
    rpg.save(function (err) {
        if(err) console.log(err)
        res.json({  
            message: 'New rpg created!',
            data: rpg
         });
    });
};
exports.view = function (req, res) {
    RPG.findById(req.params.name, function (err, rpg) {
        if (err)
            res.send(err);
        res.json({
            message: 'rpg details loading..',
            data: rpg
        });
    });
};
