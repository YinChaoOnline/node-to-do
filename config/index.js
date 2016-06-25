var configValues = require("./config");

module.exports = {
    getDbConnectionString: function () {
        return "mongodb://" + configValues.userName + ":" + configValues.userPassword + "@ds015902.mlab.com:15902/node-to-do";
    }
};