# Trabalho Prático 2 da Disciplina de Visualização de Dados

**Objetivo**: reproduzir uma visualização de dados utilizando D3.js.
 
**Requisitos**: os pontos abaixo devem ser tomados como requisitos.
* Utilizar apenas HTML, JavaScript e CSS.
* Deverá ser utilizado Bootstrap 3 e um dos seus templates.
* Poderão ser utilizados JQuery, D3.js e FontAwesome.
* É proibido a utilização de plugins e outras bibliotecas adicionais.

**Descrição**: implementar a visualização de flores do site Better Life Index em que cada flor representa um país e cada uma de suas pétalas representa o valor de uma métrica para aquele país. Deverão ser criados dois eixos (X e Y): X para o nome dos países e Y para a média das métricas representadas pelas flores.  As pétalas das flores poderão ser representadas por linhas retas.
 
**Dados**: serão disponibilizados dois arquivos de dados. É necessária a importação e utilização de ambos arquivos no trabalho.  
* data.csv: arquivo csv contendo o código do país e os valores para os indicadores.
* countries.json: arquivo json contendo o código e o nome do país.
 
**Pontos extra**: as seguintes funcionalidades poderão ser implementadas como pontos extra.
* Ordenação: o usuário deverá ser capaz de ordenar as flores por ordem alfabética (nome do país), pela média das métricas ou por uma das métricas.
* Highlight: ao passar o mouse sobre uma pétala, todas as outras pétalas de todas as flores deverão ficar com opacidade reduzida (0.4). Apenas as pétalas de todas as flores referentes à métrica da pétala em questão deverão ficar com opacidade normal (1). Ao mover o mouse para fora da pétala, a opacidade de todas as pétalas devem voltar ao normal (1).
* Tooltip: ao passar o mouse sobre uma flor deverá aparecer uma caixa no local do mouse com todas as informações daquela flor (semelhante ao que ocorre na visualização original).
