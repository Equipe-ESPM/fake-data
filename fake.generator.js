//https://github.com/boo1ean/casual
exports.geraDado = function (quant) {
	const casual = require("casual");
	const faker = require('faker');

    	let result = [];
	let tipos = ["abero","fechado","andamento"]
	for (var i = 0; i < quant; ++i) {
		result.push( {
    "status": casual.random_element(tipos),
    "nome": faker.company.companyName ,
    "profissoes": [
      faker.name.jobArea(),
      faker.name.jobArea()
    ],
    "datas": [
      {
        "nome": "inicio",
        "data": casual.date(format = 'DD-MM-YYYY')
      }
    ],
    "cargos": [
      faker.name.jobType(),
      faker.name.jobType()
    ],
    "anexos": [
      {
        "documento": "edital",
        "link": "https://selecao.es.gov.br/novo/Arquivo/Download/"+casual.integer(from = 1, to = 500)
      }
    ]
  }, );
	}
	return result;
};
