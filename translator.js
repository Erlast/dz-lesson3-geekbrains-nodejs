/**
 * Created by Женя on 29.02.2016.
 */
var request = require('request');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin, // ввод из стандартного потока
    output: process.stdout // вывод в стандартный поток
});

console.log("Введите английское слово для перевода (нажите 0 для выхода)");
rl.on('line', function (cmd) {
    if (cmd != "0") {
        console.log("\nВарианты перевода:");
        request({
                method: "GET",
                uri: 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160229T055223Z.b9366a080b9aa8de.ff94e1782e1a2debf05b1e084ce8b8dd9b29f34f&text=' + cmd + '&lang=en-ru',
            }, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var txt = JSON.parse(body);
                    txt.text.forEach(function (t) {
                        console.log(t);
                    });
                }
            }
        );
    } else {
        rl.close();
    }

});


