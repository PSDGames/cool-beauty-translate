## cool-beauty-translate
В репозитории находятся json-файлы, извлечённые из игры. 
## Format
```json
[
  {
    "id": "xxxx",
	"line": {
	  "en": "исходный текст на английском языке",
	  "ru": "перевод"
	},
	"name": "<имя персонажа>"
  }
]
```
## Translation
Переводим текст из **line.en** и добавляем в **line.ru**. Лучше делать в отдельных ветках и проводить что то типа review перед мержем.
## Deploy
Иногда будем делать сборки. Можно выложить сюда .arc файлы и проверять играбельность.
## Repository
Папки **CO1** и **CO2** содержат основные сюжетные ветки. В остальных ветки для конкретных персонажей.
## Responsibility
| Файл | Ответственный |
| --- | --- |
| CO1_001 | [mongolrgata](https://github.com/mongolrgata) |
