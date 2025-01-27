class character {
    // String, int, ..., int, bool
    constructor(name, s1_c, s1_g, s2_c, s2_g, s3_c, s3_g, s4_c, s4_g, s5_c, s5_g,
        asc_c, asc_g, lvl_c, lvl_g, core_c, core_g, isTracked) {
        
        this.name = name;
        this.s1_c = s1_c;
        this.s1_g = s1_g;
        this.s2_c = s2_c;
        this.s2_g = s2_g;
        this.s3_c = s3_c;
        this.s3_g = s3_g;
        this.s4_c = s4_c;
        this.s4_g = s4_g;
        this.s5_c = s5_c;
        this.s5_c = s5_g;
        this.asc_c = asc_c;
        this.asc_g = asc_g;
        this.lvl_c = lvl_c;
        this.lvl_g = lvl_g;
        this.core_c = core_c;
        this.core_g = core_g;
        this.isTracked = isTracked;
        
    }
}

module.exports = character;