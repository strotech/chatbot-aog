require('app-module-path').addPath(__dirname);
const app = require('src/app')

app.listen(process.env.PORT || 7000,function(){
    console.log("server has started");
})