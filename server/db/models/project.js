var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('project', {
    title:{
      type:Sequelize.STRING
    },
    template:{
        type: Sequelize.ENUM('simple','Grayscale', 'store', 'blog', 'freelancer', 'Templify', 'bare-essentials')
    }
}, {
});
