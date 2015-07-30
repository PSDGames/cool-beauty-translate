## cool-beauty-translate
В репозитории находятся json-файлы, извлечённые из игры. 
## Format
```json
{
    "XXXX": {
        "comments": [
        	"Котори откашливается",
        	"Забыл кавычки"
        ],
        "data": {
            "en": {
                "line": "'Ahem. Um...'",
                "name": "Kotori"
            },
            "jp": {
                "line": "「コホン。えー……」",
                "name": "小鳥"
            },
            "ru": {
                "line": "Кхм. Эм...",
                "name": "Котори"
            }
        },
        "state": 0
    }
}
```
## Translation
Переводим текст из **data.en.line**, сверяемся с **data.jp.line** и добавляем в **data.ru.line**. Делать в отдельных ветках и проводить что-то типа review перед мержем.  
Для удобства перевода можно использовать [тулзу](http://mongolrgata.github.io/mongolrgata-junkbox/trans-ws2json-v2/)
## Deploy
Иногда будем делать сборки (really?). Можно выложить сюда .arc файлы и проверять играбельность.
## Repository
Папки **CO1** и **CO2** содержат основные сюжетные ветки. В остальных ветки для конкретных персонажей.
## Knowing Issues
| На английском | На японском | Вероятный перевод | Комментарий |
| ------------- | ----------- | ----------------- | ----------- |
| **Основные персонажи** | | | |
| Aoi Minase         | 水瀬　碧（みなせ　あおい）　　　 | Аои Минасе      | Главный герой  |
| Kotori Habane      | 羽々音　小鳥（はばね　ことり）　 | Котори Хабане   |                |
| Ageha Himegi       | 姫城　あげは（ひめぎ　あげは）　 | Агеха Химеги    |                |
| Amane Mochizuki    | 望月　天音（もちづき　あまね）　 | Амане Мотидзуки |                |
| Asa Kazato         | 風戸　亜紗（かざと　あさ）　　　 | Аса Кадзато     |                |
| Yoru Kazato        | 風戸　依瑠（かざと　よる）　　　 | Ёру Кадзато     |                |
| **Второстепенные персонажи** | | | |
| Kanako Shigure     | 時雨　佳奈子（しぐれ　かなこ）　 | Канако Сигуре   | Неглиже-семпай |
| Tatsuya Igarasashi | 五十嵐　達也（いがらし　たつや） | Тацуя Игараси   | Он же Ан-чан   |
| Hat                | ハット 　　　　　　　　　　　　　| Хат             | Селезень       |
| Sacchin | | Саччин | |
| **Имена собственные** | | |
| Flying Fish Manor | | поместье Летучей Рыбы | название женского общежития |
| Witch's Mansion | | особняк ведьмы | |
| Windmill Hill | | Холм Ветряков | |
| Soaring Club | | Парящий Клуб |  |
| Keifuu | | Кейфу | 軽風 «лёгкий ветер» |
| Kazegaura | | Казегаура | 風ヶ浦 Город |
| Kazami Shopping Street | | Торговый Квартал Казами | Старый рынок |
| **Прочие** | | | |
| cool 'allule' | | холодная краснота | в оригинале cool beauty |
| Miss Allule | | мисс Краснота | красно-сан? |
| dorm mother | | горничная (temp) | экономка/сестра-хозяйка/комендантша(sic!) |
| girl | | девушка | по отношению к героиням |
| owner-janitor | | **???** | мы верим в Tzapil'а |
| windmill | | ветряк | |
| glider | | планёр | |
| -chan | | -чан | |
