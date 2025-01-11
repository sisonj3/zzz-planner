class item {
    constructor(name, owned, needed) {
        this.name = name;
        this.owned = owned;
        this.needed = needed;
    }
}

const inventory = [
    new item("Dennies", 0, 0),
    // Talents
    new item("Basic Physical Chip", 0, 0),
    new item("Advanced Physical Chip", 0, 0),
    new item("Specialized Physical Chip", 0, 0),
    new item("Basic Burn Chip", 0, 0),
    new item("Advanced Burn Chip", 0, 0),
    new item("Specialized Burn Chip", 0, 0),
    new item("Basic Freeze Chip", 0, 0),
    new item("Advanced Freeze Chip", 0, 0),
    new item("Specialized Freeze Chip", 0, 0),
    new item("Basic Shock Chip", 0, 0),
    new item("Advanced Shock Chip", 0, 0),
    new item("Specialized Shock Chip", 0, 0),
    new item("Basic Ether Chip", 0, 0),
    new item("Advanced Ether Chip", 0, 0),
    new item("Specialized Ether Chip", 0, 0),
    new item("Hamster Cage Pass", 0, 0),
    // Ascension
    new item("Basic Attack Certification Seal", 0, 0),
    new item("Advanced Attack Certification Seal", 0, 0),
    new item("Pioneer's Certification Seal", 0, 0),
    new item("Basic Stun Certification Seal", 0, 0),
    new item("Advanced Stun Certification Seal", 0, 0),
    new item("Buster Certification Seal", 0, 0),
    new item("Basic Anomaly Certification Seal", 0, 0),
    new item("Advanced Anomaly Certification Seal", 0, 0),
    new item("Controller Certification Seal", 0, 0),
    new item("Basic Support Certification Seal", 0, 0),
    new item("Advanced Support Certification Seal", 0, 0),
    new item("Ruler Certification Seal", 0, 0),
    new item("Basic Defense Certification Seal", 0, 0),
    new item("Advanced Defense Certification Seal", 0, 0),
    new item("Defender Certification Seal", 0, 0),
    // Weapons
    new item("Attack Component", 0, 0),
    new item("Reinforced Attack Component", 0, 0),
    new item("Specialized Attack Component", 0, 0),
    new item("Stun Component", 0, 0),
    new item("Reinforced Stun Component", 0, 0),
    new item("Specialized Stun Component", 0, 0),
    new item("Anomaly Component", 0, 0),
    new item("Reinforced Anomaly Component", 0, 0),
    new item("Specialized Anomaly Component", 0, 0),
    new item("Support Component", 0, 0),
    new item("Reinforced Support Component", 0, 0),
    new item("Specialized Support Component", 0, 0),
    new item("Defense Component", 0, 0),
    new item("Reinforced Defense Component", 0, 0),
    new item("Specialized Defense Component", 0, 0),
    // Weekly
    new item("Ferocious Grip", 0, 0),
    new item("Living Drive", 0, 0),
    new item("Finale Dance Shoes", 0, 0),
    new item("Scarlet Engine", 0, 0),
    new item("Sycophant's Refinement", 0, 0),
    // Expert Challenge
    new item("Murderous Obituary", 0, 0),
    new item("Crimson Awe", 0, 0),
    new item("Ethereal Pursuit", 0, 0),
    new item("Steel Malice", 0, 0),
    new item("Destructive Advance", 0, 0),
    new item("Falling Fist", 0, 0),
    new item("Stealth Phantom", 0, 0),
    new item("Thunderous Dragon", 0, 0),
    // XP
    new item("Trainee Investigator Log", 0, 0),
    new item("Official Investigator Log", 0, 0),
    new item("Senior Investigator Log", 0, 0),
    new item("W-Engine Battery", 0, 0),
    new item("W-Engine Power Supply", 0, 0),
    new item("W-Engine Energy Module", 0, 0),
];

const inventoryJson = JSON.stringify(inventory);

module.exports = inventoryJson;