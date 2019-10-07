export default class CoordinateSystem {
    /**
     * Generates and draws a new coordinate system within graphs of functions can be plotted.
     * 
     * @param width Width of the coordinate system.
     * @param height Height of the coordinate system.
     * @param border Needs to be an object with x- and y-properties. Specifies the padding on the x- and y-axis between the border and the location of the last possible number.
     * @param canvasContext 2D-drawing-context of the canvas.
     * @param unitScale Increment of each unit.
     * @param unit Space between the units.
     * @param plotStepsPerUnitPercentage Specifies how many points of a graph are drawn within one unit.
     * @param unitLineSize Size of the line on the axis at each number.
     * @param arrowScale Needs to be an object with width- and height-properties. Specifies the dimensions of the arrows on the axis.
     * @param numberOffset Needs to be an object with x- and y-properties. Specifies the offset between the point of the unit and the corresponding number label.
     * @param gridBorder Padding of the grid.
     */
    constructor(width, height, border, canvasContext, unitScale = 1, unit = 40, plotStepsPerUnitPercentage = 0.01, unitLineSize = 10, arrowScale = { width: 15, height: 10 }, numberOffset = { x: 12, y: 21 }, gridBorder = 0) {
        this.WIDTH = width;
        this.HEIGHT = height;
        this.BORDER_X = border.x;
        this.BORDER_Y = border.y;
        this.UNIT_SCALE = unitScale;
        this.UNIT = unit;
        this.PLOT_STEPS_PER_UNIT_PERCENTAGE = plotStepsPerUnitPercentage;
        this.UNIT_DISPLAY_SIZE = unitLineSize;
        this.ARROW_WIDTH = arrowScale.width;
        this.ARROW_HEIGHT = arrowScale.height;
        this.NUMBER_XOFFSET = numberOffset.x;
        this.NUMBER_YOFFSET = numberOffset.y;
        this.CTX = canvasContext;
        this.GRID_BORDER = gridBorder;

        //

        this.recalculate();

        this.functions = [];

        this.unitSave = this.UNIT;
        this.unitScaleSave = this.UNIT_SCALE;
        this.plotStepPercentageSave = this.PLOT_STEPS_PER_UNIT_PERCENTAGE;

        this.CTX.lineCap = 'round';
        this.CTX.lineJoin = 'round';

        //

        this.zoom = 1;
        let zoomMultiplicator = 0.0005;

        this.CTX.canvas.addEventListener('mousewheel', e => {
            e.preventDefault();

            this.zoom -= e.deltaY * zoomMultiplicator;

            if (this.zoom <= 0.25) this.zoom = 0.25;
            if (this.zoom >= 16) this.zoom = 16;

            this.scale(this.zoom);
        });

        //

        this.redraw();
    }

    drawCoordianteSystem() {
        this.clearBackground();
        this.drawGrid();

        // STYLE SETTINGS
        this.CTX.strokeStyle = '#C2C5CC';
        this.CTX.fillStyle = '#C2C5CC';
        this.CTX.font = '14px Nunito';
        this.CTX.textAlign = 'center';
        this.CTX.lineWidth = 1;

        // DRAW AXIS
        this.drawLine(this.WIDTH / 2, 0, this.WIDTH / 2, this.HEIGHT);
        this.drawLine(0, this.HEIGHT / 2, this.WIDTH, this.HEIGHT / 2);

        // DRAW UNIT-LINES ON AXIS
        for (let x = -this.xUnits * this.UNIT_SCALE; x <= this.xUnits * this.UNIT_SCALE; x += this.UNIT_SCALE) {
            let realX = this.getRealCoords(x, 0).x;
            this.drawLine(realX, this.HEIGHT / 2 - this.UNIT_DISPLAY_SIZE / 2, realX, this.HEIGHT / 2 + this.UNIT_DISPLAY_SIZE / 2);

            if (Math.round(x * 100) / 100 === 0) this.CTX.fillText(x, realX + 8, this.HEIGHT / 2 + this.NUMBER_YOFFSET);
            else this.CTX.fillText(Math.round(x * 100) / 100, realX, this.HEIGHT / 2 + this.NUMBER_YOFFSET);
        }

        this.CTX.textAlign = 'left';
        for (let y = -this.yUnits * this.UNIT_SCALE; y <= this.yUnits * this.UNIT_SCALE; y += this.UNIT_SCALE) {
            let realY = this.getRealCoords(0, y).y;
            this.drawLine(this.WIDTH / 2 - this.UNIT_DISPLAY_SIZE / 2, realY, this.WIDTH / 2 + this.UNIT_DISPLAY_SIZE / 2, realY);

            if (Math.round(y * 100) / 100 !== 0) this.CTX.fillText(Math.round(y * 100) / 100, this.WIDTH / 2 + this.NUMBER_XOFFSET, realY + 4);
        }

        // ARROW TOP
        this.CTX.beginPath();
        this.CTX.moveTo(this.WIDTH / 2 - this.ARROW_WIDTH / 2, this.ARROW_HEIGHT);
        this.CTX.lineTo(this.WIDTH / 2, 0);
        this.CTX.lineTo(this.WIDTH / 2 + this.ARROW_WIDTH / 2, this.ARROW_HEIGHT);
        this.CTX.stroke();

        // ARROW RIGHT
        this.CTX.beginPath();
        this.CTX.moveTo(this.WIDTH - this.ARROW_HEIGHT, this.HEIGHT / 2 - this.ARROW_WIDTH / 2);
        this.CTX.lineTo(this.WIDTH, this.HEIGHT / 2);
        this.CTX.lineTo(this.WIDTH - this.ARROW_HEIGHT, this.HEIGHT / 2 + this.ARROW_WIDTH / 2);
        this.CTX.stroke();
    }

    recalculate() {
        this.xUnits = Math.floor((this.WIDTH / 2 - this.BORDER_X) / this.UNIT);
        this.yUnits = Math.floor((this.HEIGHT / 2 - this.BORDER_Y) / this.UNIT);
    }

    clearBackground() {
        this.CTX.clearRect(0, 0, this.WIDTH, this.HEIGHT);
    }

    drawGrid() {
        this.CTX.strokeStyle = '#2C313C';
        this.CTX.lineWidth = 2;

        for (let x = -this.xUnits * this.UNIT_SCALE; x <= this.xUnits * this.UNIT_SCALE; x += this.UNIT_SCALE) {
            let realX = this.getRealCoords(x, 0).x;
            this.drawLine(realX, this.GRID_BORDER, realX, this.HEIGHT - this.GRID_BORDER);
        }

        for (let y = -this.yUnits * this.UNIT_SCALE; y <= this.yUnits * this.UNIT_SCALE; y += this.UNIT_SCALE) {
            let realY = this.getRealCoords(0, y).y;
            this.drawLine(this.GRID_BORDER, realY, this.WIDTH - this.GRID_BORDER, realY);
        }
    }

    drawLine(x1, y1, x2, y2) {
        this.CTX.beginPath();
        this.CTX.moveTo(x1, y1);
        this.CTX.lineTo(x2, y2);
        this.CTX.stroke();
    }

    getRealCoords(x, y) {
        let lowestRealX = this.WIDTH / 2 - this.xUnits * this.UNIT;
        let highestRealX = this.WIDTH / 2 + this.xUnits * this.UNIT;
        let percentageX = (x + this.xUnits * this.UNIT_SCALE) / (this.xUnits * this.UNIT_SCALE * 2);
        let realX = Math.floor(this.inverseLerp(lowestRealX, highestRealX, percentageX));

        let lowestRealY = this.HEIGHT / 2 + this.yUnits * this.UNIT;
        let highestRealY = this.HEIGHT / 2 - this.yUnits * this.UNIT;
        let percentageY = (y + this.yUnits * this.UNIT_SCALE) / (this.yUnits * this.UNIT_SCALE * 2);
        let realY = Math.floor(this.inverseLerp(lowestRealY, highestRealY, percentageY));

        return { x: realX, y: realY }
    }

    inverseLerp(min, max, p) {
        return min + (max - min) * p;
    }

    drawGraph(f) {
        this.CTX.strokeStyle = '#C24034';
        this.CTX.lineWidth = 2;

        let firstPointDrawn = false;

        for (let x = -(this.xUnits + 1) * this.UNIT_SCALE; x <= (this.xUnits + 1) * this.UNIT_SCALE; x += this.PLOT_STEPS_PER_UNIT_PERCENTAGE * this.UNIT_SCALE) {
            let point = this.getRealCoords(x, f(x));

            if (!firstPointDrawn) {
                this.CTX.beginPath();
                this.CTX.moveTo(point.x, point.y);
                firstPointDrawn = true;

            } else {
                this.CTX.lineTo(point.x, point.y);
                this.CTX.stroke();

                this.CTX.beginPath();
                this.CTX.moveTo(point.x, point.y);
            }
        }
    }

    /**
     * Plots a graph of a function in the coordinate system.
     * 
     * @param f A function depending on x.
     */
    plot(f) {
        this.functions.push(f);
        this.redraw();
    }

    /**
     *  Redraws the coordinate system, including the grid, the axis, and the graphs.
     */
    redraw() {
        this.drawCoordianteSystem();

        for (let f of this.functions)
            this.drawGraph(f);
    }

    /**
     * Scales the coordinate system. 
     * 
     * @param factor
     */
    scale(factor) {
        if (factor <= 0.25) factor = 0.25;
        if (factor >= 16) factor = 16;

        let multiplier = 1;

        if (factor >= 8) multiplier = 0.25;
        else if (factor < 8 && factor >= 4) multiplier = 0.5;
        else if (factor < 4 && factor > 0.75) multiplier = 1;
        else if (factor <= 0.75 && factor > 0.5) multiplier = 2;
        else if (factor <= 0.5 && factor > 0.25) multiplier = 4;
        else if (factor <= 0.25) multiplier = 8;

        this.UNIT = Math.round(this.unitSave * factor * multiplier);
        this.UNIT_SCALE = this.unitScaleSave * multiplier;
        this.PLOT_STEPS_PER_UNIT_PERCENTAGE = this.plotStepPercentageSave / (multiplier > 1 ? multiplier : 1);

        this.recalculate();
        this.redraw();
    }
}