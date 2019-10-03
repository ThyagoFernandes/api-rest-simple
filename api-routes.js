let router = require('express').Router();
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});
var RPGController = require('./rpg_game_controller');
module.exports = router;
router.route('/rpgs')
    .get(RPGController.index)
    .post(RPGController.new);

router.route('/rpgs/:name')
    .get(RPGController.view);
module.exports = router;