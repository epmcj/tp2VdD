function getData(){
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
	  //leitura do arquivo json
	  d3.json("../../data/countries.json", function(data) {
		var nomePaises = data;
		//merge dos dois arquivos
		infoPaises.forEach(function(infoPais) {
				nomePaises.forEach(function(nomePais){
					if(nomePais.code == infoPais.country){
						infoPais.country=nomePais.pt;//substitui a sigla pelo nome em português
					}
			});
		});
		infoPaises.sort(function(a, b) {//ordena os países (pt extra)
			return a["country"].localeCompare(b["country"]);
		});
		createChart(infoPaises);//chama a função de construção do gráfico quando já estiver finalizado
	  });
	});
}

function createChart(infoPaises){
	console.log(infoPaises);
	//crie o gráfico aqui.
}