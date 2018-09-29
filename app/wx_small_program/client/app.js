//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
//wx5f79aff405fa2907
//e8e22f29d7025197b3aab1f9b56d7a40
App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
    }
})