//Draw
var draw = function() {
    
    var rFlowerBud = 1;
    var ryPetal = 5;
    var xScale;
    var yScale;

    var elements = g.selectAll("g.vis-elements").data(["vis-elements"]);
    elements.exit().remove();
    elements = elements.enter().append('g').attr('class', "vis-elements").merge(elements);

    var flowers = elements.selectAll("g.flower").data(data); //UPDATE
    flowers.exit().remove(); //EXIT
    flowers = flowers.enter().append('g').attr('class', "flowers").merge(flowers); //ENTER
    
    flowers.attr('transform', function(d) {
        //xScale and yScale must be change to flowerVisualization.x and y
        return "translate("+ (xScale(d.country)) + (xScale.bandwidth()/2)+ "," + (yScale(+d.mean))+ ")";
    }).each(function (e) {
        
        //center
        var flowerBud  = d3.select(this).selectAll("circle.flower-bud").data([e]); //UPDATE
        flowerBud.exit().remove(); //EXIT
        flowerBud = flowerBud.enter.append('circle').attr('class', "flower-bud").merge(flowerBud); //ENTER

        flowerBud.attr('x', 0).attr('y', 0).attr('r', rFlowerBud);

        //TODO change this metrics
        var metrics = Object.keys(e).filter(function (k) { return k !== "country";});

        /*
        //Petals line
        var flowerPetal = d3.select(this).selectAll(".flower-petal").data(metrics); //UPDATE
        flowerPetal.exit().remove(); //EXIT
        flowerPetal = flowerPetal.enter().append('line').attr('class', 'flower-petal').merge(flowerPetal); //ENTER
        flowerPetal.attr()
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', function(k, i) {return petalScale(k)+e[k] * Math.cos(((2 * Math.PI)/metrics.length) * i)})
        .attr('y2', function(k, i) {return petalScale(k)+e[k] * Math.sin(((2 * Math.PI)/metrics.length) * i)})
        .style('fill', 'none')
        .style('stroke', function (k){ return colorScale(k); });
        */
        
        //Petals ellipse 
        var flowerPetal = d3.select(this).selectAll(".flower-petal").data(metrics); //UPDATE
        flowerPetal.exit().remove(); //EXIT
        flowerPetal = flowerPetal.enter()
        .append('ellipse').attr('class', 'flower-petal').merge(flowerPetal); //ENTER
        flowerPetal
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('rx', petalScale(k)+e[k]) //length of ellipse TODO
        .attr('ry', 5) //width fix 
        .style('fill',function (k){ return colorScale(k); })
        .attr( 'transform', function (k, i) {
            return d3.svg.transform()
            .rotate( (360/metrics.length) * i)
            .translate((rFlowerBud + (d3.select(this).rx / 2)) * Math.cos(((2 * Math.PI)/metrics.length) * i)
            ,(rFlowerBud + (d3.select(this).rx / 2)) * Math.sin(((2 * Math.PI)/metrics.length) * i));
        })

        //label
        var Label = d3.select(this).selectAll(".flower-label").data([e]); //UPDATE
        Label.exit().remove(); //EXIT
        Label = Label.enter().append('text').attr('class', "flower-label").merge(Label); //ENTER

        Label.attr('transform', 'rotate(90) translate(20, 4)').text(function(d) { return countries[d.country].pt;});

    })
}

