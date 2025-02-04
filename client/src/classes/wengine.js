export default class wengine {
    // String, int, ..., int, bool
    constructor(name, asc_c = 1, asc_g = 1, lvl_c = 1, lvl_g = 1, isTracked = false) {
        this.name = name;
        this.asc_c = asc_c;
        this.asc_g = asc_g;
        this.lvl_c = lvl_c;
        this.lvl_g = lvl_g;
        this.isTracked = isTracked;
    }
};