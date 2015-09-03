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
| [Kumoi Akari](http://puu.sh/jW5f0/ace8f677ae.png)        | Кумои Акари                               | 雲居 朱莉（くもい あかり） |
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
| Seisen Girls High School                                 | Старшая школа для девушек Сейсен          | 清泉（せいせん） |
| Super Repeat Student                                     | Абсолютный Семпай                         | 超留年生 |
| Taiyouken                                                | Таиёкен                                   | 太陽軒 |
| Windmill Hill                                            | Мельничный холм                           | 風車の丘 |
| Windy                                                    | Ветра                                     | ウィンディ |
| Windy Kazegaura                                          | Ветра Кадзегауры                          | ウィンディ風ヶ浦 |
| Witch's Mansion                                          | ведьмин особняк                           | 魔女の館 |
| **Блюда и ингредиенты**                                  |                                           | |
|                                                          | соус сёгаяки                              | 生姜焼き |
| Basque-style chicken stew                                | курица по-баскски                         | 鶏肉のバスク風煮込み |
| Cookies and Cream                                        | ванильное с кусочками печенья             | クッキー＆クリ―ム |
| cured ham                                                | ветчина                                   | 生ハム |
| curry                                                    | карри                                     | カレー |
| beef curry                                               | карри с мясом                             | ビーフカレー |
| seafood curry                                            | карри с рыбой                             | シーフードカレー |
| fried rice                                               | жаренный рис                              | チャーハン |
| ginger pork                                              | сёгаяки                                   | 豚の生姜焼き или 豚のショウガ焼き |
| green pepper                                             | зелёный перец                             | ピーマン |
| ground meat                                              | фарш                                      | 挽肉 |
| Neapolitan pasta                                         | напоритан                                 | ナポリタン |
| onion                                                    | лук                                       | タマネギ |
| paprika powder                                           | паприка                                   | パプリカパウダー |
| pork ramen                                               | свиной рамен                              | とんこつラーメン |
| potato chips                                             | чипсы (картофельные чипсы)                | ポテチ |
| red peppers                                              | красный перец                             | パプリカ |
| sukiyaki                                                 | сукияки                                   | すき焼き |
| tomato sauce                                             | томатный соус                             | トマトソース |
| whole tomatoes                                           | маринованные томаты                       | ホールトマト |
| yakisoba                                                 | якисоба                                   | 焼きそば |
| **Терминология**                                         |                                           | |
| fighter plane                                            | истребитель                               | 戦闘機 |
| Jumbo jet                                                | Джамбо Джет                               | ジャンボジェット |
| Cessna                                                   | Сессна                                    | セスナ |
| body                                                     | фюзеляж                                   | 胴体 |
| tailplanes                                               | хвостовое оперение                        | 尾翼 |
| horizontal tailplane                                     | стабилизатор                              | 水平尾翼 |
| vertical tailplane                                       | киль                                      | 垂直尾翼 |
| lift                                                     | подъёмная сила                            | 揚力 |
| Bernoulli's theorem                                      | закон Бернулли                            | ベルヌイの定理 |
| **Клубы и кружки**                                       |                                           | |
| Soaring Club                                             | Парящий клуб                              | ソアリング部 |
| Taiko Drum Study Society                                 | **?**                                     | |
| **Прочие**                                               |                                           | |
| -chan                                                    | -тян                                      | ちゃん |
| -senpai                                                  | -семпай                                   | 先輩 |
| abolish, repeal, revoke                                  | **?**                                     | 廃部 |
| boarding students                                        | **?**                                     | 寮生 |
| circle                                                   | кружок                                    | サークル |
| convenience store                                        | круглосуточный магазин                    | コンビニ |
| cool 'allule'                                            | холодная крас**н**ота                     | くーるびゅーちー |
| disabled access                                          | **?**                                     | バリアフリー |
| dorm mother                                              | горничная                                 | 寮母 |
| girl                                                     | девушка                                   | 少女 |
| glider                                                   | планёр                                    | グライダー |
| lunchbox                                                 | бенто                                     | 弁当 |
| Miss Allule                                              | Красно-сан                                | びゅーちーさん |
| owner-caretaker                                          | хозяйка (хозяйка общежития)               | オーナー兼管理人さん |
| owner-janitor                                            | см. owner-caretaker                       | オーナー兼管理人さん |
| shopping mall                                            | торговый центр                            | ショッピングモール |
| student council                                          | ученический совет                         | 生徒会 |
| supermarket                                              | супермаркет                               | スーパー |
| vice president                                           | заместитель президента                    | 副会長 |
| windmill                                                 | ветряк                                    | 風車 |
| withdrawal notice                                        | заявление об уходе                        | 退学届け |
| yen                                                      | иена                                      | 円 |
