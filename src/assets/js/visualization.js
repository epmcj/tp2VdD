FlowerVisualization = function (container) {
    /* "Constructor" method. 
    ** Initialization of values comes here.*/

    // Selectors
    this.d3 = d3.select(container);
  
    this.jquery = $(container); // Delete if it's not used.

    // SVG attr.       
    this.width  = 800;
    this.height = 600;
    this.margin = {top: 20, right: 20, bottom:20, left: 20};
    this.svg;

    // Data attrs.
    this.data = ['a', 'b', 'c'];
    this.x;
    this.y;         

    this.color;     // Color Palette.
    this.vis = {base: "", width: "", height: ""};

    this.createBase();
    this.createAxes();
}

FlowerVisualization.prototype.createBase = function () {
    this.svg = this.d3.append("svg")
                      .attr("width", this.width)
                      .attr("height", this.height);
    console.log(this.svg.attr("width"));
    this.vis.width  = +this.svg.attr("width") - this.margin.left - this.margin.right;
    this.vis.height = +this.svg.attr("height") - this.margin.top - this.margin.bottom;
    console.log(this.vis.width);

    this.vis.base = this.svg.append("g")
                   .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
}

FlowerVisualization.prototype.createAxes = function () {
    this.x = d3.scaleBand().rangeRound([0, this.vis.width]).padding(0.1);
    this.y = d3.scaleLinear().rangeRound([this.vis.height, 0]);

    // Axis X
    this.vis.base.append("g")
                 .attr("class", "axis axis--x")
                 .attr("transform", "translate(0," + this.vis.height + ")")
                 .call(d3.axisBottom(this.x));

    // Axis Y
    this.vis.base.append("g")
                 .attr("class", "axis axis--y")
                 .call(d3.axisLeft(this.y));
}

FlowerVisualization.prototype.createFlowers = function () {

}


   d3.select("#visualization")                           