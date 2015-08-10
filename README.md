## cool-beauty-translate
В репозитории находятся json-файлы с репликами персонажей.
Папки **CO1** и **CO2** содержат основные сюжетные ветки. В остальных ветки для конкретных персонажей.

## Формат
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

## Перевод
Переводим текст из **data.en.line**, сверяемся с **data.jp.line** и добавляем в **data.ru.line**. Делать в отдельных ветках и проводить что-то типа review перед мержем.
Для удобства перевода можно использовать это [веб-приложение](http://mongolrgata.github.io/mongolrgata-junkbox/trans-ws2json-v2/).

## Deploy
По завершению перевода первых 10 глав (до опенинга), будет выложен патч (будет применим к английской версии игры от MoeNovel).

## Соглашения по переводу
| На английском                                            | Вероятный перевод                         | На японском |
| -------------------------------------------------------- | ----------------------------------------- | ----------- |
| **Основные персонажи**                                   |                                           | |
| Aoi Minase                                               | Аои Минасе                                | 水瀬 碧（みなせ あおい） |
| [Kotori Habane](http://puu.sh/jrxc2/71c686a12f.png)      | Котори Хабане                             | 羽々音 小鳥（はばね ことり） |
| [Ageha Himegi](http://puu.sh/jrxc7/e6d6305735.png)       | Агеха Химеги                              | 姫城 あげは（ひめぎ あげは） |
| [Amane Mochizuki](http://puu.sh/jrxch/0b22c98835.png)    | Амане Мотидзуки                           | 望月 天音（もちづき あまね） |
| [Asa Kazato](http://puu.sh/jrxct/4b62c18cfd.png)         | Аса Кадзато                               | 風戸 亜紗（かざと あさ） |
| [Yoru Kazato](http://puu.sh/jrxcx/e60a68cc78.png)        | Ёру Кадзато                               | 風戸 依瑠（かざと よる） |
| **Сожители**                                             |                                           | |
| [Kanako Shigure](http://puu.sh/jrxcJ/de61ffe585.png)     | Канако Сигуре                             | 時雨 佳奈子（しぐれ かなこ） |
| [Ryouko](http://puu.sh/jrxd8/45a44ba5fe.png)             | Рёко                                      | 亮子（りょうこ） |
| [Sanae](http://puu.sh/jrxd4/a9e2338e4d.png)              | Санае                                     | 早苗（さなえ） |
| [Yuka](http://puu.sh/jrxde/d7c12046dd.png)               | Юка                                       | 由佳（ゆか） |
| **Второстепенные персонажи**                             |                                           | |
| [Hat](http://puu.sh/jrxdh/81e278893f.png)                | Хат                                       | ハット |
| [Hotaru Himegi](http://puu.sh/jrxcF/39bed8c19b.png)      | Хотару Химеги                             | 姫城 ほたる（ひめぎ ほたる） |
| [Masatsugu Tasaki](http://puu.sh/jrxcX/0dfbb06ea0.png)   | Масацугу Тасаки (он же Ма-бо)             | 田崎 柾次（たさき まさつぐ） |
| Ma-bou                                                   | Ма-бо                                     | マー坊 |
| [Tatsuya Igarasashi](http://puu.sh/jrxcS/c2110205ee.png) | Тацуя Игараси (он же Ан-тян)              | 五十嵐 達也（いがらし たつや） |
| An-chan                                                  | Ан-тян                                    | あんちゃん |
| **Третьестепенные персонажи**                            |                                           | |
| Eri-chan                                                 | Эри-тян                                   | えりちゃん |
| Sacchin                                                  | Саттин                                    | さっちん |
| Taguchi                                                  | Такути                                    | 田口 |
| Yamamoto                                                 | Ямамото                                   | 山本 |
| **Имена собственные**                                    |                                           | |
| Flying Fish Manor                                        | поместье «Летучая рыба»                   | トビウオ荘 |
| Hargen Darch                                             | Haagen-Dazs                               | ハーゲンダッチ |
| Kazami Shopping Street                                   | торговый квартал Кадзами                  | 風見商店街 |
| Kazegaura                                                | Кадзегаура                                | 風ヶ浦 |
| Keifuu                                                   | Кеифу                                     | 恵風（けいふう） |
| Keifuu Academy                                           | Академия Кеифу                            | 恵風学園 |
| Keifuu Private Academy Student Dormitory                 | частное школьное общежитие академии Кеифу | 私立恵風学園の学生寮 |
| Soaring Club                                             | Парящий клуб                              | ソアリング部 |
| Super Repeat Student                                     | **?**                                     | 超留年生 |
| Windmill Hill                                            | Мельничный холм                           | 風車の丘 |
| Windy                                                    | Ветра                                     | ウィンディ |
| Windy Kazegaura                                          | Ветра Кадзегауры                          | ウィンディ風ヶ浦 |
| Witch's Mansion                                          | ведьмин особняк                           | 魔女の館 |
| **Блюда и ингредиенты**                                  |                                           | |
|                                                          | соус сёгаяки                              | 生姜焼き |
| ginger pork                                              | сёгаяки                                   | 豚の生姜焼き |
| Neapolitan pasta                                         | напоритан                                 | ナポリタン |
| tomato sauce                                             | томатный соус                             | トマトソース |
| **Прочие**                                               |                                           | |
| -chan                                                    | -тян                                      | ちゃん |
| boarding students                                        | **?**                                     | 寮生 |
| cool 'allule'                                            | холодная крас**н**ота                     | くーるびゅーちー |
| disabled access                                          | **?**                                     | バリアフリー |
| dorm mother                                              | горничная                                 | 寮母 |
| girl                                                     | девушка                                   | 少女 |
| glider                                                   | планёр                                    | グライダー |
| lunchbox                                                 | бенто                                     | 弁当 |
| Miss Allule                                              | Красно-сан                                | びゅーちーさん |
| owner-caretaker                                          | хозяйка (хозяйка общежития)               | オーナー兼管理人さん |
| owner-janitor                                            | см. owner-caretaker                       | オーナー兼管理人さん |
| windmill                                                 | ветряк                                    | 風車 |
| withdrawal notice                                        | заявление об уходе                        | |
| yen                                                      | иена                                      | |
