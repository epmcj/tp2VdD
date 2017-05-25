FlowerVisualization = function (container) {
    // "Constructor" method. 

    // Selectors
    this.d3 = d3.select(container);

    // SVG attr.       
    this.width  = window.innerWidth * 0.85;
    this.height = window.innerHeight * 0.8;
    this.margin = {top: 20, right: 20, bottom:30, left: 30};
    this.svg;

    // Data attrs.
    this.x;
    this.y;         

    this.chart = {base: "", width: "", height: ""};

    this.createBase();
    this.createAxes();
    this.createFlowers();
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
                   .attr("class", "wraper")
                   .attr("transform", "translate(" + this.margin.left 
                         + "," + this.margin.top + ")");
}

FlowerVisualization.prototype.createAxes = function () {
    this.x = d3.scaleBand().rangeRound([0, this.chart.width]).padding(0.1);
    this.y = d3.scaleLinear().rangeRound([this.chart.height, 0]);
}

FlowerVisualization.prototype.createFlowers = function () {
    getData(this.chart, this.x, this.y);
}                           