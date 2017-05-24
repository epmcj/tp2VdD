//Draw
var drawFlower = function(chart, data, x, y) {

    var rFlowerBud = 2;
    var ryPetal = 5;

    var color = d3.scaleOrdinal(d3.schemeCategory20);

    x.domain(data.map(function(d) { return d.country; }));
    y.domain([0, 1]);

    chart.base.append("g")
         .attr("class", "axis axis--x")
         .attr("transform", "translate(0," + chart.height + ")")
         .call(d3.axisBottom(x)).selectAll('text').remove();

    chart.base.append("g")
         .attr("class", "axis axis--y")
         .call(d3.axisLeft(y));

    /*var elements = chart.selectAll('g.infoPaises').data(data);
    elements.exit().remove();
    elements = elements.enter().append('g').attr('class', 'infoPaises').merge(elements);*/

    /*var flowers = d3.select('#wrapper').selectAll('g.flowers').data(data); //UPDATE
    flowers.exit().remove(); //EXIT
    flowers = flowers.enter().append('g').attr('class', 'flowers').merge(flowers); //ENTER*/

    chart.base.selectAll('g.flowers')
      .data(data).enter()
      .append('svg')
      .attr('class', 'flowers')
      .attr('x', function(d) { return x(d.country)})
      .attr('y', function(d) { 
            //d3.mean(Object.values(e).filter(function(v) { return v; }) )
            media = d.housing + d.income + d.jobs + d.community
                +d.education + d.environment + d["civic engagement"]
                +d.health + d["life satisfaction"] + d.safety
                +d["work-life balance"];
            media /= 11;

            return y(media) - (x.bandwidth()/2); })
     .each(function (e) {
        //center
        var flowerBud  = d3.select(this).selectAll('circle.flower-bud').data([e]); //UPDATE
        flowerBud.exit().remove(); //EXIT
        flowerBud = flowerBud.enter().append('circle').attr('class', 'flower-bud').merge(flowerBud); //ENTER

        flowerBud.attr('cx', x.bandwidth()/2).attr('cy', x.bandwidth()/2).attr('r', rFlowerBud);

        //TODO change this metrics
        var metrics = Object.keys(e).filter(function (k) { return k !== 'country';});
        //console.log(metrics);

        //Petals ellipse
        /*var flowerPetal = d3.select(this).selectAll('.flower-petal').data(metrics); //UPDATE
        flowerPetal.exit().remove(); //EXIT
        flowerPetal = flowerPetal.enter()
        .append('ellipse').attr('class', 'flower-petal').merge(flowerPetal); //ENTER
        flowerPetal
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('rx', function(k) { return (x.bandwidth() * e[k] / 2); }) //length of ellipse TODO petalScale(k)+e[k]
        .attr('ry', 2) //width fix 
        .style('fill', function (k){ return color(k);})//function (i){ return "steelblue"; }) //do color scale
        .attr( 'transform', function (k, i) {
            return 'translate( ' + x.bandwidth()/2 + ',' + x.bandwidth()/2 + ' ) translate(' + (rFlowerBud + 
                    ((x.bandwidth() * e[k] / 2))) * Math.cos(((2 * Math.PI)/metrics.length) * i) + ',' +(rFlowerBud + 
                    ((x.bandwidth() * e[k] / 2))) * Math.sin(((2 * Math.PI)/metrics.length) * i)+ ') rotate(' + (360/metrics.length) + ')';
        });*/

        
        var flowerPetal = d3.select(this).selectAll(".flower-petal").data(metrics); //UPDATE
        flowerPetal.exit().remove(); //EXIT
        flowerPetal = flowerPetal.enter().append('line').attr('class', 'flower-petal').merge(flowerPetal); //ENTER
        flowerPetal.attr('x1', x.bandwidth()/2)
        .attr('y1', x.bandwidth()/2)
        .attr('x2', function(k, i) {return x.bandwidth()/2 + ((x.bandwidth()/2) * e[k]) * Math.cos(((2 * Math.PI)/metrics.length) * i)})
        .attr('y2', function(k, i) {return x.bandwidth()/2 + ((x.bandwidth()/2) * e[k]) * Math.sin(((2 * Math.PI)/metrics.length) * i)})
        .style('fill', 'none')
        .style('stroke', function (k){ return color(k); });
        

        //label
        var Label = d3.select(this).selectAll('.flower-label').data([e]); //UPDATE
        Label.exit().remove(); //EXIT
        Label = Label.enter().append('text').attr('class', 'flower-label').merge(Label); //ENTER

        Label.attr('transform', 'rotate(90) translate(' + x.bandwidth() + ',-' + x.bandwidth()/4 + ')').text(function(d) { 
            return d.country;});

    })
}

