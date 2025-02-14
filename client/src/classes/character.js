import material from '../classes/material';

export default class character {
    // String, int, ..., int, bool
    constructor(token, name, s1_c = 1, s1_g = 12, s2_c = 1, s2_g = 12, s3_c = 1,
        s3_g = 12, s4_c = 1, s4_g = 12, s5_c = 1, s5_g = 12,
        asc_c = 0, asc_g = 6, lvl_c = 1, lvl_g = 60, core_c = 0, core_g = 6, isTracked = false) {
        
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
        this.s5_g = s5_g;
        this.asc_c = asc_c;
        this.asc_g = asc_g;
        this.lvl_c = lvl_c;
        this.lvl_g = lvl_g;
        this.core_c = core_c;
        this.core_g = core_g;
        this.isTracked = isTracked;

        // Array to hold materials
        this.materials = [];

        // Fetch list of agent attributes
        fetch(`http://localhost:3000/character/${name}`, {
                mode: 'cors',
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${token}`,
                },
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);

                // Dennies
                this.materials.push(new material("Dennies", 3705000));

                // XP
                this.materials.push(new material("Trainee Investigator Log"));
                this.materials.push(new material("Official Investigator Log"));
                this.materials.push(new material("Senior Investigator Log", 300));

                // Ascension
                switch (response.role) {
                    case "ATTACK":
                        this.materials.push(new material("Basic Attack Certification Seal", 4));
                        this.materials.push(new material("Advanced Attack Certification Seal", 32));
                        this.materials.push(new material("Pioneer's Certification Seal", 30));
                        break;
                    case "STUN":
                        this.materials.push(new material("Basic Stun Certification Seal", 4));
                        this.materials.push(new material("Advanced Stun Certification Seal", 32));
                        this.materials.push(new material("Buster Certification Seal", 30));
                        break;
                    case "ANOMALY":
                        this.materials.push(new material("Basic Anomaly Certification Seal", 4));
                        this.materials.push(new material("Advanced Anomaly Certification Seal", 32));
                        this.materials.push(new material("Controller Certification Seal", 30));
                        break;
                    case "SUPPORT":
                        this.materials.push(new material("Basic Support Certification Seal", 4));
                        this.materials.push(new material("Advanced Support Certification Seal", 32));
                        this.materials.push(new material("Ruler Certification Seal", 30));
                        break;
                    case "DEFENDER":
                        this.materials.push(new material("Basic Defense Certification Seal", 4));
                        this.materials.push(new material("Advanced Defense Certification Seal", 32));
                        this.materials.push(new material("Defender Certification Seal", 30));
                        break;
                }

                // Skills + Cage Pass
                switch (response.attribute) {
                    case "PHYSICAL":
                        this.materials.push(new material("Basic Physical Chip", 25));
                        this.materials.push(new material("Advanced Physical Chip", 75));
                        this.materials.push(new material("Specialized Physical Chip", 250));
                        break;
                    case "FIRE":
                        this.materials.push(new material("Basic Burn Chip", 25));
                        this.materials.push(new material("Advanced Burn Chip", 75));
                        this.materials.push(new material("Specialized Burn Chip", 250));
                        break;
                    case "ICE":
                        this.materials.push(new material("Basic Freeze Chip", 25));
                        this.materials.push(new material("Advanced Freeze Chip", 75));
                        this.materials.push(new material("Specialized Freeze Chip", 250));
                        break;
                    case "ELECTRIC":
                        this.materials.push(new material("Basic Shock Chip", 25));
                        this.materials.push(new material("Advanced Shock Chip", 75));
                        this.materials.push(new material("Specialized Shock Chip", 250));
                        break;
                    case "ETHER":
                        this.materials.push(new material("Basic Ether Chip", 25));
                        this.materials.push(new material("Advanced Ether Chip", 75));
                        this.materials.push(new material("Specialized Ether Chip", 250));
                        break;
                }

                this.materials.push(new material("Hamster Cage Pass", 5));

                // Expert
                this.materials.push(new material(response.expert, 60));

                // Weekly
                this.materials.push(new material(response.weekly, 9));
                
            })
            .catch(error => console.error(error));
        
    }

}