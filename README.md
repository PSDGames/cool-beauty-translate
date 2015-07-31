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
<!--
## Deploy
Иногда будем делать сборки (really?). Можно выложить сюда .arc файлы и проверять играбельность.
-->
## Соглашения по переводу
| На английском | Вероятный перевод | На японском |
| ------------- | ----------------- | ----------- |
| **Основные персонажи** | | |
| Aoi Minase                               | Аои Минасе                                    | 水瀬 碧（みなせ あおい） |
| Kotori Habane                            | Котори Хабане                                 | 羽々音 小鳥（はばね ことり） |
| Ageha Himegi                             | Агеха Химеги                                  | 姫城 あげは（ひめぎ あげは） |
| Amane Mochizuki                          | Амане Мотидзуки                               | 望月 天音（もちづき あまね） |
| Asa Kazato                               | Аса Кадзато                                   | 風戸 亜紗（かざと あさ） |
| Yoru Kazato                              | Ёру Кадзато                                   | 風戸 依瑠（かざと よる） |
| **Второстепенные персонажи** | | |
| Kanako Shigure                           | Канако Сигуре                                 | 時雨 佳奈子（しぐれ かなこ） |
| Masatsugu Tasaki                         | Масацугу Тадзаки                              | 田崎 柾次（たざき まさつぐ） |
| Ma-bou                                   | Ма-бо                                         | マー坊 |
| Tatsuya Igarasashi                       | Тацуя Игараси                                 | 五十嵐 達也（いがらし たつや） |
| An-chan                                  | Ан-тян                                        | あんちゃん |
| Hat                                      | Хат                                           | ハット |
| **Третьестепенные персонажи** | | |
| Eri-chan                                 | Эри-тян                                       | えりちゃん |
| Sacchin                                  | Саттин                                        | さっちん |
| Taguchi                                  | Такути                                        | 田口 |
| Yamamoto                                 | Ямамото                                       | 山本 |
| **Имена собственные** | | |
| Flying Fish Manor                        | поместье «Летучая Рыба»                       | トビウオ荘 |
| Hargen Darch                             | Haagen-Dazs                                   | ハーゲンダッチ |
| Kazami Shopping Street                   | торговый квартал Кадзами                      | 風見商店街 |
| Kazegaura                                | Кадзегаура                                    | 風ヶ浦 |
| Keifuu                                   | Кеифу                                         | 恵風（けいふう） |
| Keifuu Academy                           | академия Кеифу                                | 恵風学園 |
| Keifuu Private Academy Student Dormitory | частное студенческое общежитие академии Кеифу | 私立恵風学園の学生寮 |
| Windmill Hill                            | Мельничный холм                               | 風車の丘 |
| Witch's Mansion                          | ведьмин особняк                               | 魔女の館 |
| Soaring Club                             | Парящий Клуб |
| **Прочие** | | |
| -chan                                    | -тян                                          | ちゃん |
| boarding students                        |                                               | 寮生 |
| cool 'allule'                            | холодная крас**н**ота                         | くーるびゅーちー |
| dorm mother                              | горничная                                     | 寮母 |
| girl                                     | девушка                                       | 少女 |
| glider                                   | планёр                                        | グライダー |
| Miss Allule                              | красно-сан                                    | びゅーちーさん |
| owner-caretaker                          |                                               | オーナー兼管理人さん |
| owner-janitor                            | см. owner-caretaker                           | オーナー兼管理人さん |
| windmill                                 | ветряк                                        | 風車 |
| withdrawal notice                        | заявление об уходе                            | |
| yen                                      | иена                                          | |
