import material from "../classes/material";

export default function getAgentMats(token, name) {
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

            // Array to hold materials
            let materials = [];

            // Dennies
            materials.push(new material("Dennies", 3705000));

            // XP
            materials.push(new material("Trainee Investigator Log"));
            materials.push(new material("Official Investigator Log"));
            materials.push(new material("Senior Investigator Log", 300));

            // Ascension
            switch (response.role) {
                case "ATTACK":
                    materials.push(new material("Basic Attack Certification Seal", 4));
                    materials.push(new material("Advanced Attack Certification Seal", 32));
                    materials.push(new material("Pioneer's Certification Seal", 30));
                    break;
                case "STUN":
                    materials.push(new material("Basic Stun Certification Seal", 4));
                    materials.push(new material("Advanced Stun Certification Seal", 32));
                    materials.push(new material("Buster Certification Seal", 30));
                    break;
                case "ANOMALY":
                    materials.push(new material("Basic Anomaly Certification Seal", 4));
                    materials.push(new material("Advanced Anomaly Certification Seal", 32));
                    materials.push(new material("Controller Certification Seal", 30));
                    break;
                case "SUPPORT":
                    materials.push(new material("Basic Support Certification Seal", 4));
                    materials.push(new material("Advanced Support Certification Seal", 32));
                    materials.push(new material("Ruler Certification Seal", 30));
                    break;
                case "DEFENDER":
                    materials.push(new material("Basic Defense Certification Seal", 4));
                    materials.push(new material("Advanced Defense Certification Seal", 32));
                    materials.push(new material("Defender Certification Seal", 30));
                    break;
            }

            // Skills + Cage Pass
            switch (response.attribute) {
                case "PHYSICAL":
                    materials.push(new material("Basic Physical Chip", 25));
                    materials.push(new material("Advanced Physical Chip", 75));
                    materials.push(new material("Specialized Physical Chip", 250));
                    break;
                case "FIRE":
                    materials.push(new material("Basic Burn Chip", 25));
                    materials.push(new material("Advanced Burn Chip", 75));
                    materials.push(new material("Specialized Burn Chip", 250));
                    break;
                case "ICE":
                    materials.push(new material("Basic Freeze Chip", 25));
                    materials.push(new material("Advanced Freeze Chip", 75));
                    materials.push(new material("Specialized Freeze Chip", 250));
                    break;
                case "ELECTRIC":
                    materials.push(new material("Basic Shock Chip", 25));
                    materials.push(new material("Advanced Shock Chip", 75));
                    materials.push(new material("Specialized Shock Chip", 250));
                    break;
                case "ETHER":
                    materials.push(new material("Basic Ether Chip", 25));
                    materials.push(new material("Advanced Ether Chip", 75));
                    materials.push(new material("Specialized Ether Chip", 250));
                    break;
            }

            materials.push(new material("Hamster Cage Pass", 5));

            // Expert
            materials.push(new material(response.expert, 60));

            // Weekly
            materials.push(new material(response.weekly, 9));

            return materials;
            
        })
        .catch(error => console.error(error));
}