const { PrismaClient, Role, Rank } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedWengines() {
    console.log('Seeding W-engines...');

    // B Ranks
    const lunarPleniluna = await prisma.wengine.upsert({
        where: { name: '[Lunar] Pleniluna' },
        update: {},
        create: {
            name: '[Lunar] Pleniluna',
            rank: Rank.B,
            role: Role.ATTACK,
        },
    });

    const lunarDecrescent = await prisma.wengine.upsert({
        where: { name: '[Lunar] Decrescent' },
        update: {},
        create: {
            name: '[Lunar] Decrescent',
            rank: Rank.B,
            role: Role.ATTACK,
        },
    });

    const lunarNoviluna = await prisma.wengine.upsert({
        where: { name: '[Lunar] Noviluna' },
        update: {},
        create: {
            name: '[Lunar] Noviluna',
            rank: Rank.B,
            role: Role.ATTACK,
        },
    });

    const reverbI = await prisma.wengine.upsert({
        where: { name: '[Reverb] Mark I' },
        update: {},
        create: {
            name: '[Reverb] Mark I',
            rank: Rank.B,
            role: Role.SUPPORT,
        },
    });

    const reverbII = await prisma.wengine.upsert({
        where: { name: '[Reverb] Mark II' },
        update: {},
        create: {
            name: '[Reverb] Mark II',
            rank: Rank.B,
            role: Role.SUPPORT,
        },
    });

    const reverbIII = await prisma.wengine.upsert({
        where: { name: '[Reverb] Mark III' },
        update: {},
        create: {
            name: '[Reverb] Mark III',
            rank: Rank.B,
            role: Role.SUPPORT,
        },
    });

    const vortexRevolver = await prisma.wengine.upsert({
        where: { name: '[Vortex] Revolver' },
        update: {},
        create: {
            name: '[Vortex] Revolver',
            rank: Rank.B,
            role: Role.STUN,
        },
    });

    const vortexArrow = await prisma.wengine.upsert({
        where: { name: '[Vortex] Arrow' },
        update: {},
        create: {
            name: '[Vortex] Arrow',
            rank: Rank.B,
            role: Role.STUN,
        },
    });

    const vortexHatchet = await prisma.wengine.upsert({
        where: { name: '[Vortex] Hatchet' },
        update: {},
        create: {
            name: '[Vortex] Hatchet',
            rank: Rank.B,
            role: Role.STUN,
        },
    });

    const magneticStormAlpha = await prisma.wengine.upsert({
        where: { name: '[Magnetic Storm] Alpha' },
        update: {},
        create: {
            name: '[Magnetic Storm] Alpha',
            rank: Rank.B,
            role: Role.ANOMALY,
        },
    });

    const magneticStormBravo = await prisma.wengine.upsert({
        where: { name: '[Magnetic Storm] Bravo' },
        update: {},
        create: {
            name: '[Magnetic Storm] Bravo',
            rank: Rank.B,
            role: Role.ANOMALY,
        },
    });

    const magneticStormCharlie = await prisma.wengine.upsert({
        where: { name: '[Magnetic Storm] Charlie' },
        update: {},
        create: {
            name: '[Magnetic Storm] Charlie',
            rank: Rank.B,
            role: Role.ANOMALY,
        },
    });

    const identityBase = await prisma.wengine.upsert({
        where: { name: '[Identity] Base' },
        update: {},
        create: {
            name: '[Identity] Base',
            rank: Rank.B,
            role: Role.DEFENDER,
        },
    });

    const identityInflection = await prisma.wengine.upsert({
        where: { name: '[Identity] Inflection' },
        update: {},
        create: {
            name: '[Identity] Inflection',
            rank: Rank.B,
            role: Role.DEFENDER,
        },
    });

    // A Rank
    const streetSuperstar = await prisma.wengine.upsert({
        where: { name: 'Street Superstar' },
        update: {},
        create: {
            name: 'Street Superstar',
            rank: Rank.A,
            role: Role.ATTACK,
        },
    });

    const starlightEngine = await prisma.wengine.upsert({
        where: { name: 'Starlight Engine' },
        update: {},
        create: {
            name: 'Starlight Engine',
            rank: Rank.A,
            role: Role.ATTACK,
        },
    });

    const gildedBlossom = await prisma.wengine.upsert({
        where: { name: 'Gilded Blossom' },
        update: {},
        create: {
            name: 'Gilded Blossom',
            rank: Rank.A,
            role: Role.ATTACK,
        },
    });

    const marcatoDesire = await prisma.wengine.upsert({
        where: { name: 'Marcato Desire' },
        update: {},
        create: {
            name: 'Marcato Desire',
            rank: Rank.A,
            role: Role.ATTACK,
        },
    });

    const housekeeper = await prisma.wengine.upsert({
        where: { name: 'Housekeeper' },
        update: {},
        create: {
            name: 'Housekeeper',
            rank: Rank.A,
            role: Role.ATTACK,
        },
    });

    const starlightEngineReplica = await prisma.wengine.upsert({
        where: { name: 'Starlight Engine Replica' },
        update: {},
        create: {
            name: 'Starlight Engine Replica',
            rank: Rank.A,
            role: Role.ATTACK,
        },
    });

    const drillRig = await prisma.wengine.upsert({
        where: { name: 'Drill Rig - Red Axis' },
        update: {},
        create: {
            name: 'Drill Rig - Red Axis',
            rank: Rank.A,
            role: Role.ATTACK,
        },
    });

    const cannonRotor = await prisma.wengine.upsert({
        where: { name: 'Cannon Rotor' },
        update: {},
        create: {
            name: 'Cannon Rotor',
            rank: Rank.A,
            role: Role.ATTACK,
        },
    });

    const steamOven = await prisma.wengine.upsert({
        where: { name: 'Steam Oven' },
        update: {},
        create: {
            name: 'Steam Oven',
            rank: Rank.A,
            role: Role.STUN,
        },
    });

    const fossilizedCore = await prisma.wengine.upsert({
        where: { name: 'Precious Fossilized Core' },
        update: {},
        create: {
            name: 'Precious Fossilized Core',
            rank: Rank.A,
            role: Role.STUN,
        },
    });

    const demaraBattery = await prisma.wengine.upsert({
        where: { name: 'Demara Battery Mark II' },
        update: {},
        create: {
            name: 'Demara Battery Mark II',
            rank: Rank.A,
            role: Role.STUN,
        },
    });

    const sixShooter = await prisma.wengine.upsert({
        where: { name: 'Six Shooter' },
        update: {},
        create: {
            name: 'Six Shooter',
            rank: Rank.A,
            role: Role.STUN,
        },
    });

    const rainforestGourmet = await prisma.wengine.upsert({
        where: { name: 'Rainforest Gourmet' },
        update: {},
        create: {
            name: 'Rainforest Gourmet',
            rank: Rank.A,
            role: Role.ANOMALY,
        },
    });

    const weepingGemini = await prisma.wengine.upsert({
        where: { name: 'Weeping Gemini' },
        update: {},
        create: {
            name: 'Weeping Gemini',
            rank: Rank.A,
            role: Role.ANOMALY,
        },
    });

    const electroLipGloss = await prisma.wengine.upsert({
        where: { name: 'Electro-Lip Gloss' },
        update: {},
        create: {
            name: 'Electro-Lip Gloss',
            rank: Rank.A,
            role: Role.ANOMALY,
        },
    });

    const roaringRide = await prisma.wengine.upsert({
        where: { name: 'Roaring Ride' },
        update: {},
        create: {
            name: 'Roaring Ride',
            rank: Rank.A,
            role: Role.ANOMALY,
        },
    });

    const sliceOfTime = await prisma.wengine.upsert({
        where: { name: 'Slice of Time' },
        update: {},
        create: {
            name: 'Slice of Time',
            rank: Rank.A,
            role: Role.SUPPORT,
        },
    });

    const theVault = await prisma.wengine.upsert({
        where: { name: 'The Vault' },
        update: {},
        create: {
            name: 'The Vault',
            rank: Rank.A,
            role: Role.SUPPORT,
        },
    });

    const bashfulDemon = await prisma.wengine.upsert({
        where: { name: 'Bashful Demon' },
        update: {},
        create: {
            name: 'Bashful Demon',
            rank: Rank.A,
            role: Role.SUPPORT,
        },
    });

    const kaboomTheCannon = await prisma.wengine.upsert({
        where: { name: 'Kaboom the Cannon' },
        update: {},
        create: {
            name: 'Kaboom the Cannon',
            rank: Rank.A,
            role: Role.SUPPORT,
        },
    });

    const unfetteredGameBall = await prisma.wengine.upsert({
        where: { name: 'Unfettered Game Ball' },
        update: {},
        create: {
            name: 'Unfettered Game Ball',
            rank: Rank.A,
            role: Role.SUPPORT,
        },
    });

    const originalTransmorpher = await prisma.wengine.upsert({
        where: { name: 'Original Transmorpher' },
        update: {},
        create: {
            name: 'Original Transmorpher',
            rank: Rank.A,
            role: Role.DEFENDER,
        },
    });

    const bunnyBand = await prisma.wengine.upsert({
        where: { name: 'Bunny Band' },
        update: {},
        create: {
            name: 'Bunny Band',
            rank: Rank.A,
            role: Role.DEFENDER,
        },
    });

    const springEmbrace = await prisma.wengine.upsert({
        where: { name: 'Spring Embrace' },
        update: {},
        create: {
            name: 'Spring Embrace',
            rank: Rank.A,
            role: Role.DEFENDER,
        },
    });

    const bigCylinder = await prisma.wengine.upsert({
        where: { name: 'Big Cylinder' },
        update: {},
        create: {
            name: 'Big Cylinder',
            rank: Rank.A,
            role: Role.DEFENDER,
        },
    });

    const peacekeeperSpecialized = await prisma.wengine.upsert({
        where: { name: 'Peacekeeper - Specialized' },
        update: {},
        create: {
            name: 'Peacekeeper - Specialized',
            rank: Rank.A,
            role: Role.DEFENDER,
        },
    });

    // S Ranks
    const steelCushion = await prisma.wengine.upsert({
        where: { name: 'Steel Cushion' },
        update: {},
        create: {
            name: 'Steel Cushion',
            rank: Rank.S,
            role: Role.ATTACK,
        },
    });

    const brimstone = await prisma.wengine.upsert({
        where: { name: 'The Brimstone' },
        update: {},
        create: {
            name: 'The Brimstone',
            rank: Rank.S,
            role: Role.ATTACK,
        },
    });

    const deepSeaVisitor = await prisma.wengine.upsert({
        where: { name: 'Deep Sea Visitor' },
        update: {},
        create: {
            name: 'Deep Sea Visitor',
            rank: Rank.S,
            role: Role.ATTACK,
        },
    });

    const zanshinHerbCase = await prisma.wengine.upsert({
        where: { name: 'Zanshin Herb Case' },
        update: {},
        create: {
            name: 'Zanshin Herb Case',
            rank: Rank.S,
            role: Role.ATTACK,
        },
    });

    const riotSuppressor = await prisma.wengine.upsert({
        where: { name: 'Riot Suppressor Mark VI' },
        update: {},
        create: {
            name: 'Riot Suppressor Mark VI',
            rank: Rank.S,
            role: Role.ATTACK,
        },
    });

    const hellfireGears = await prisma.wengine.upsert({
        where: { name: 'Hellfire Gears' },
        update: {},
        create: {
            name: 'Hellfire Gears',
            rank: Rank.S,
            role: Role.STUN,
        },
    });

    const theRestrained = await prisma.wengine.upsert({
        where: { name: 'The Restrained' },
        update: {},
        create: {
            name: 'The Restrained',
            rank: Rank.S,
            role: Role.STUN,
        },
    });

    const blazingLaurel = await prisma.wengine.upsert({
        where: { name: 'Blazing Laurel' },
        update: {},
        create: {
            name: 'Blazing Laurel',
            rank: Rank.S,
            role: Role.STUN,
        },
    });

    const iceJadeTeapot = await prisma.wengine.upsert({
        where: { name: 'Ice-Jade Teapot' },
        update: {},
        create: {
            name: 'Ice-Jade Teapot',
            rank: Rank.S,
            role: Role.STUN,
        },
    });

    const hailstormShrine = await prisma.wengine.upsert({
        where: { name: 'Hailstorm Shrine' },
        update: {},
        create: {
            name: 'Hailstorm Shrine',
            rank: Rank.S,
            role: Role.ANOMALY,
        },
    });

    const flamemakerShaker = await prisma.wengine.upsert({
        where: { name: 'Flamemaker Shaker' },
        update: {},
        create: {
            name: 'Flamemaker Shaker',
            rank: Rank.S,
            role: Role.ANOMALY,
        },
    });

    const fusionCompiler = await prisma.wengine.upsert({
        where: { name: 'Fusion Compiler' },
        update: {},
        create: {
            name: 'Fusion Compiler',
            rank: Rank.S,
            role: Role.ANOMALY,
        },
    });

    const timeweaver = await prisma.wengine.upsert({
        where: { name: 'Timeweaver' },
        update: {},
        create: {
            name: 'Timeweaver',
            rank: Rank.S,
            role: Role.ANOMALY,
        },
    });

    const sharpenedStinger = await prisma.wengine.upsert({
        where: { name: 'Sharpened Stinger' },
        update: {},
        create: {
            name: 'Sharpened Stinger',
            rank: Rank.S,
            role: Role.ANOMALY,
        },
    });

    const weepingCradle = await prisma.wengine.upsert({
        where: { name: 'Weeping Cradle' },
        update: {},
        create: {
            name: 'Weeping Cradle',
            rank: Rank.S,
            role: Role.SUPPORT,
        },
    });

    const tusksOfFury = await prisma.wengine.upsert({
        where: { name: 'Tusks of Fury' },
        update: {},
        create: {
            name: 'Tusks of Fury',
            rank: Rank.S,
            role: Role.DEFENDER,
        },
    });

    console.log('Done!');
}

module.exports = seedWengines;