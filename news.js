/**
 * Created by Женя on 29.02.2016.
 */
var request = require('request');
var cheerio = require('cheerio');

request('http://www.livekuban.ru/news/', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        console.log("Новости кубани:\n");
        var $ = cheerio.load(html);
        $('.it').each(function () {
            var date = $(this).find('.date').text();
            var title = $(this).find(".head h3").text();
            var description = $(this).find(".head").next().text();
            console.log("Дата: " + date);
            console.log("Заголовок: " + title);
            console.log("Описание: " + description);
        });
    }
});