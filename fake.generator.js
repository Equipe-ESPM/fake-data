//https://github.com/boo1ean/casual
//https://github.com/Marak/faker.js
exports.geraDado = function (quant) {
	const casual = require("casual");
	const faker = require('faker');

    	let result = [];
	let tipos = ["abero","fechado","andamento"]
	let docs = ["errata","edital","chamada","outros"]
	for (var i = 0; i < quant; ++i) {
		let dado = {
    "status": casual.random_element(tipos),
    "nome": faker.company.companyName ,
    "profissoes": [
    ],
    "datas": [
      {
        "nome": "inicio",
        "data": casual.date(format = 'DD-MM-YYYY')
      },{
        "nome": "chamada",
        "data": casual.date(format = 'DD-MM-YYYY')
      },{
        "nome": "inscrição",
        "data": casual.date(format = 'DD-MM-YYYY')
      },
{
        "nome": "isenção",
        "data": casual.date(format = 'DD-MM-YYYY')
      },
    ],
    "cargos": [

    ],
    "anexos": [
    ]
  }
	for (var p = 0; p < casual.integer(from = 1, to = 4); ++p) {
		dado.cargos.push(faker.name.jobArea());
		dado.profissoes.push(faker.name.jobType());
}
for (var a = 0; a < casual.integer(from = 1, to = 12); ++a) {
		dado.anexos.push({documento:casual.random_element(docs),link:"https://selecao.es.gov.br/novo/Arquivo/Download/"+casual.integer(from = 1, to = 500)})
}
result.push(dado)
	
	}
	return result;
};
