function getData(chart, x, y){
	var infoPaises;
	//leitura do arquivo csv
	d3.csv("../../data/data.csv", function(data) {
	  //conversão de string para numérico de alguns campos
	  data.forEach(function(d) {
			d.housing = +d.housing;
			d.income = +d.income;
			d.jobs = +d.jobs;
			d.community = +d.community;
			d.education = +d.education;
			d.environment = +d.environment;
			d["civic engagement"] = +d["civic engagement"];
			d.health = +d.health;
			d["life satisfaction"] = +d["life satisfaction"];
			d.safety = +d.safety;
			d["work-life balance"] = +d["work-life balance"];
	  });
	  infoPaises = data;
	  // Leitura do arquivo json
	  d3.json("../../data/countries.json", function(data) {
		var nomePaises = data;
		// Merge dos dois arquivos
		infoPaises.forEach(function(infoPais) {
				nomePaises.forEach(function(nomePais){
					// Substitui a sigla pelo nome em português
					if(nomePais.code == infoPais.country){
						infoPais.country = nomePais.pt;
					}
			});
		});

		infoPaises.sort(function(a, b) {			
			media1 = a.housing + a.income + a.jobs + a.community
                +a.education + a.environment + a["civic engagement"]
                +a.health + a["life satisfaction"] + a.safety
                +a["work-life balance"];
			media1 /= 11;
			
			media2 = b.housing + b.income + b.jobs + b.community
                +b.education + b.environment + b["civic engagement"]
                +b.health + b["life satisfaction"] + b.safety
                +b["work-life balance"];
			media2 /= 11;

			return (media1-media2);
		});
		// Chama a função de construção do gráfico quando já estiver finalizado
		createChart(infoPaises, chart, x, y);
	  });
	});
}

function createChart(infoPaises, chart, x, y){
	drawFlower(chart, infoPaises, x, y)
}