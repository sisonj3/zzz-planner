class wengine {
    // String, int, ..., int, bool
    constructor(name, asc_c, asc_g, lvl_c, lvl_g, isTracked) {
        this.name = name;
        this.asc_c = asc_c;
        this.asc_g = asc_g;
        this.lvl_c = lvl_c;
        this.lvl_g = lvl_g;
        this.isTracked = isTracked;
    }
}

module.exports = wengine;