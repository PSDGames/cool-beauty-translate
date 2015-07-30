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
| На английском | На японском | Вероятный перевод |
| ------------- | ----------- | ----------------- |
| **Основные персонажи** | | |
| Aoi Minase                               | 水瀬　碧（みなせ　あおい）　　　 | Аои Минасе              |
| Kotori Habane                            | 羽々音　小鳥（はばね　ことり）　 | Котори Хабане           |
| Ageha Himegi                             | 姫城　あげは（ひめぎ　あげは）　 | Агеха Химеги            |
| Amane Mochizuki                          | 望月　天音（もちづき　あまね）　 | Амане Мотидзуки         |
| Asa Kazato                               | 風戸　亜紗（かざと　あさ）　　　 | Аса Кадзато             |
| Yoru Kazato                              | 風戸　依瑠（かざと　よる）　　　 | Ёру Кадзато             |
| **Второстепенные персонажи** | | |
| Kanako Shigure                           | 時雨　佳奈子（しぐれ　かなこ）　 | Канако Сигуре           |
| Tatsuya Igarasashi                       | 五十嵐　達也（いがらし　たつや） | Тацуя Игараси           |
| Hat                                      | ハット　　　　　　　　　　　　　 | Хат                     |
| Sacchin                                  | 　　　　　　　　　　　　　　　　 | Саччин                  |
| **Имена собственные** | | |
| Flying Fish Manor                        | トビウオ荘　　　　　　　　　　　 | поместье «Летучая Рыба» |
| Kazegaura                                | 風ヶ浦　　　　　　　　　　　　　 |                         |
| Keifuu                                   | 恵風（けいふう）　　　　　　　　 | Кеифу                   |
| Keifuu Academy                           | 恵風学園　　　　　　　　　　　　 | академия Кеифу          |
| Keifuu Private Academy Student Dormitory | 私立恵風学園の学生寮　　　　　　 |                         |
| Windmill Hill                            | 風車の丘　　　　　　　　　　　　 | Мельничный холм         |
| Witch's Mansion                          | 魔女の館　　　　　　　　　　　　 | ведьмин особняк         |
| Soaring Club           | | Парящий Клуб |
| Kazami Shopping Street | | Торговый Квартал Казами |
| **Прочие** | | |
| -chan                                    | ちゃん　　　　　　　　　　　　　 | -тян                    |
| boarding students                        | 寮生　　　　　　　　　　　　　　 |                         |
| cool 'allule'                            | くーるびゅーちー　　　　　　　　 | холодная крас**н**ота   |
| dorm mother                              | 寮母　　　　　　　　　　　　　　 | горничная               |
| glider                                   | グライダー　　　　　　　　　　　 | планёр                  |
| Miss Allule                              | びゅーちーさん　　　　　　　　　 | красно-сан              |
| windmill                                 | 風車　　　　　　　　　　　　　　 | ветряк                  |
| girl          | | девушка |
| owner-janitor | | **???** |
