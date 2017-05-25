//Draw
var drawFlower = function(chart, data, x, y) {

    var rFlowerBud = 2;
    var ryPetal = 5;

    var color = d3.scaleOrdinal(d3.schemeCategory20);

    x.domain(data.map(function(d) { return d.country; }));
    y.domain([0, 1]);

    var max_width = x.bandwidth();

    // Axis X
    chart.base.append("g")
         .attr("class", "axis axis--x")
         .attr("transform", "translate(0," + chart.height + ")")
         .call(d3.axisBottom(x))
         .selectAll('text').remove();

    // Axis Y
    chart.base.append("g")
         .attr("class", "axis axis--y")
         .call(d3.axisLeft(y));

    // Flowers
    chart.base.selectAll('g.flowers')
      .data(data).enter()
      .append('svg')
      .attr('class', 'flowers')
      .attr('x', function(d) { return x(d.country)})
      .attr('y', function(d) { 
            media = d.housing + d.income + d.jobs + d.community
                +d.education + d.environment + d["civic engagement"]
                +d.health + d["life satisfaction"] + d.safety
                +d["work-life balance"];
            media /= 11;

            return y(media) - (max_width/2); })
     .each(function (e) {
        // Center
        var flowerBud  = d3.select(this).selectAll('circle.flower-bud').data([e]); //UPDATE
        flowerBud.exit().remove(); //EXIT
        flowerBud = flowerBud.enter().append('circle').attr('class', 'flower-bud').merge(flowerBud); //ENTER
        flowerBud.attr('cx', max_width/2).attr('cy', max_width/2).attr('r', rFlowerBud);

        var metrics = Object.keys(e).filter(function (k) { return k !== 'country';});
        
        var flowerPetal = d3.select(this).selectAll(".flower-petal").data(metrics); //UPDATE
        flowerPetal.exit().remove(); //EXIT
        flowerPetal = flowerPetal.enter().append('line').attr('class', 'flower-petal').merge(flowerPetal); //ENTER
        flowerPetal.attr('x1', max_width/2)
        .attr('y1', max_width/2)
        .attr('x2', function(k, i) {
            return max_width/2 + ((max_width/2) * e[k]) * Math.cos(((2 * Math.PI)/metrics.length) * i);
        })
        .attr('y2', function(k, i) {
            return max_width/2 + ((max_width/2) * e[k]) * Math.sin(((2 * Math.PI)/metrics.length) * i)
        })
        .style('fill', 'none')
        .style('stroke', function (k){ return color(k); });
        

        // Label
        var Label = d3.select(this).selectAll('.flower-label').data([e]); //UPDATE
        Label.exit().remove(); //EXIT
        Label = Label.enter().append('text').attr('class', 'flower-label').merge(Label); //ENTER

        Label.attr('transform', 'rotate(90) translate(' + max_width + ',-' + max_width/4 + ')').text(function(d) { 
            return d.country;});

    })
}

