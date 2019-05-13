const http = require("http");
const url = require("url");
const dir = ("./tmp");

function start(route, handler){
    function onRequest(request, response){
        let postData = "";
        let pathname = url.parse(request.url).pathname;
        console.log("Request for" + pathname + " received");

        request.setEncoding("utf8");

        request.addListener("data", postDataChunk =>{
            postData += postDataChunk;
            console.log("Received POST data chunk '" + postDataChunk + "'.");
        });

        //при надобности форматируем полученные данные(postData) в JSON строку и разделяем по частям(элементам)
        //первый - название папки, второй - название файла, а все остальное как передаваемы объект
        let dataJSON = JSON.stringify(postData);

        //проверка наличия папки, если требуется создание новой папки 
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
    }

    http.createServer(onRequest).listen(8000);
    console.log("Server has started");
}

exports.start = start;