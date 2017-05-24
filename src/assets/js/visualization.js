FlowerVisualization = function (container) {
    /* "Constructor" method. 
    ** Initialization of values comes here.
    ** Alexander e Vitor Cezar */

    // Selectors
    this.d3 = d3.select(container);
  
    this.jquery = $(container); // Delete if it's not used.

    // SVG attr.       
    this.width  = window.innerWidth * 0.8;
    this.height = window.innerHeight * 0.75;
    this.margin = {top: 20, right: 20, bottom:30, left: 30};
    this.svg;

    // Data attrs.
    this.data = ['a', 'b', 'c'];
    this.x;
    this.y;         

    this.color;     // Color Palette.
    this.chart = {base: "", width: "", height: ""};

    this.createBase();
    this.createAxes();
}

FlowerVisualization.prototype.createBase = function () {
    this.svg = this.d3.append("svg")
                      .attr("width", this.width)
                      .attr("height", this.height);
    
    this.chart.width  = +this.svg.attr("width") - this.margin.left 
                                                - this.margin.right;
                                              
    this.chart.height = +this.svg.attr("height") - this.margin.top 
                                                 - this.margin.bottom;

    this.chart.base = this.svg.append("g")
                   .attr("transform", "translate(" + this.margin.left 
                         + "," + this.margin.top + ")");
}

FlowerVisualization.prototype.createAxes = function () {
    this.x = d3.scaleBand().rangeRound([0, this.chart.width]).padding(0.1);
    this.y = d3.scaleLinear().rangeRound([this.chart.height, 0]);

    // Axis X
    this.chart.base.append("g")
                 .attr("class", "axis axis--x")
                 .attr("transform", "translate(0," + this.chart.height + ")")
                 .call(d3.axisBottom(this.x));

    // Axis Y
    this.chart.base.append("g")
                 .attr("class", "axis axis--y")
                 .call(d3.axisLeft(this.y));
}

/** Otavio */
FlowerVisualization.prototype.createFlowers = function () {

}                           