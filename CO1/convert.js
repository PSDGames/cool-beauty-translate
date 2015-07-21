var fs = require('fs');
var args = process.argv;

var text = fs.readFileSync(args[2], 'utf8');
var json = JSON.parse(text);

var rfile =  fs.readFileSync(args[3], 'utf8');
var result =  JSON.parse(rfile);

var keys = Object.keys(result).sort();

var names = {
	'Kotori': 'Котори',
	'Aoi': 'Аои',
	'Ageha': 'Агеха',
	'Amane': 'Амане'?
	'Asa': 'Аса'?
	'Yoru': 'Ёру',
	'Kanako': 'Канако',
	'Hat': 'Хат',
	'Girl': 'Девушка',
	'Woman': 'Девушка',
	'Masatsugu': 'Масатсугу',
	'Mysterious beauty': 'Таинственная красотка',
	'Girls': 'Девушки'
};

for(var i = 0; i < keys.length; ++i) {
	var out = result[keys[i]];
	var cin = json[i];

	out.comments = cin.comments;
	out.state = cin.state;
	for(var lang in cin.line) {
		if(cin.line.hasOwnProperty(lang) && 
			lang !== 'state' && 
			lang !== 'comments') {
			out.data[lang].line = cin.line[lang];
			out.data[lang].name = out.data[lang].name || names[cin.name] || "";
		}
	}
}

fs.writeFileSync(args[3], JSON.stringify(result, null, 3));