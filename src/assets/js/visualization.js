FlowerVisualization = function (container) {
    /* "Constructor" method. 
    ** Initialization of values comes here.*/

    // Selectors
    this.d3 = d3.select(container);
    this.jquery = $(container); // Delete if it's not used.

    // SVG attr.       
    this.width  = "300px";
    this.height = "300px";
    this.base;

    // Data attrs.
    this.data = ['a', 'b', 'c'];
    this.x;         //
    this.y;         // 

    this.color;     // Color Palette.
}

FlowerVisualization.prototype.createBase = function () {

}

FlowerVisualization.prototype.createAxes = function () {

}

FlowerVisualization.prototype.createFlowers = function () {

}