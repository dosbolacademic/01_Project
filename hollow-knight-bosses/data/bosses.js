const bosses = [
  {
    id: "falseknight",
    name: "False Knight",
    location: "Forgotten Crossroads",
    difficulty: "Easy",
    reward: "Vengeful Spirit Spell",
    description:
      "A Failed Warrior who stole the armour of a fearsome Knight. Weak creatures love to hide inside the shells of the strong — it makes them feel powerful.",
    lore: "A maggot that crawled inside the armour of a fallen knight. It swings its massive mace with reckless abandon, but its true self is frail and desperate to prove strength it doesn't possess.",
    tips: "Stay under its feet and strike the bottom of the mace. When it leaps into the air, move to avoid the shockwave. After several hits, the armour will crack open — quickly strike its true body.",
    image: "https://hollowknight.wiki.gg/images/0/04/False_Knight_%28HK%29.png",
  },
  {
    id: "crystalguardian",
    name: "Crystal Guardian",
    location: "Crystal Peak",
    difficulty: "Medium",
    reward: "Access to Crystal Peak",
    description:
      "A Crystallised Crawlid mutated by the crystal formations of Crystal Peak. Crystals have grown so dense around it that it has become a formidable guardian.",
    lore: "Originally a simple Crawlid, prolonged exposure to the mystical crystals of Crystal Peak caused it to grow and mutate into this hulking beast. The crystals have fused with its body, making it nearly impervious to normal attacks.",
    tips: "Avoid the crystal beams it fires across the arena. The Shade Cloak or Crystal Heart can help you dodge effectively. Focus attacks on its face — its body is heavily armoured by crystal growth.",
    image:
      "https://hollowknight.wiki.gg/images/f/f2/Crystal_Guardian_%28HK%29.png",
  },
  {
    id: "brokenvessel",
    name: "Broken Vessel",
    location: "Ancient Basin",
    difficulty: "Medium",
    reward: "Monarch Wings (Double Jump)",
    description:
      "The shape of this vessel is familiar, though infection has clearly taken hold. It wanders through the Ancient Basin, leaking infected ichor.",
    lore: "A vessel like the Knight, but one that failed its purpose. Abandoned in the Ancient Basin, it became infected by the spreading plague and now shambles about in anguish, its inner light corrupted into a burning orange infection.",
    tips: "When infected balloons appear in the arena, pop them to remove additional hazards. The vessel has similar moves to the Knight — anticipate nail attacks and pogo off its body when possible. Stay aggressive.",
    image:
      "https://hollowknight.wiki.gg/images/6/6b/Broken_Vessel_%28HK%29.png",
  },
  {
    id: "mantislords",
    name: "Mantis Lords",
    location: "Mantis Village",
    difficulty: "Hard",
    reward: "Respect of the Mantis tribe (safe passage)",
    description:
      "The leaders of the Mantis tribe, who have maintained their ferocity and sense of honour even as the infection swept across Hallownest.",
    lore: "Three sisters who rule the Mantis Village with iron claws. Unlike other creatures in Hallownest, the Mantis tribe resisted the infection through sheer pride and willpower. Defeating them earns their eternal respect.",
    tips: "In phase one, face the single lord and dodge her diving and throwing attacks. In phase two, all three attack simultaneously. Use the platforms wisely and focus damage during brief openings between their coordinated strikes.",
    image:
      "https://hollowknight.wiki.gg/images/d/da/Mantis_Lords_%28HK%29.png",
  },
  {
    id: "hornet",
    name: "Hornet",
    location: "Greenpath",
    difficulty: "Medium",
    reward: "Mothwing Cloak (Dash)",
    description:
      "Skilled protector of Hallownest's ruins and daughter of the Pale King and the Gendered Child. She wields a needle and thread with deadly precision.",
    lore: "Hornet serves as a sentinel of Hallownest, testing those who would venture deeper into the kingdom. Her origins are complex — born of the Pale King and the Weaver queen, she walks a path between two worlds, loyal to a kingdom most have abandoned.",
    tips: "Watch for her dash attack followed by a thread toss. She moves fast — use your nail to pogo off her needle when she holds it downward. Stay calm and punish her after her flurry combos are finished.",
    image: "https://hollowknight.wiki.gg/images/1/19/Hornet_%28HK%29.png",
  },
  {
    id: "soulmaster",
    name: "Soul Master",
    location: "Soul Sanctum",
    difficulty: "Hard",
    reward: "Shade Soul (Upgraded Spell)",
    description:
      "The master of Soul Sanctum, who has gathered enormous amounts of SOUL in his obsessive quest to overcome death itself.",
    lore: "Once the head of Hallownest's school of Soul magic, the Soul Master became obsessed with using SOUL to cheat death. His experiments grew increasingly reckless, and now he exists as a barely-contained mass of volatile soul energy.",
    tips: "Avoid the orb attacks by dashing through gaps. In phase two he divides into two forms — focus the real one. Use Vengeful Spirit or Desolate Dive to deal damage safely from a distance during his recovery frames.",
    image:
      "https://hollowknight.wiki.gg/images/c/cb/Soul_Master_%28HK%29.png",
  },
  {
    id: "nosk",
    name: "Nosk",
    location: "Deepnest",
    difficulty: "Hard",
    reward: "Pale Ore",
    description:
      "A terrifying shape-shifter lurking in the darkest depths of Deepnest. It mimics the forms of those it has consumed to lure in new prey.",
    lore: "Nosk is a creature of pure predation, hiding deep within the labyrinthine Deepnest. It can perfectly mimic the appearance of others — including the Knight itself — to create a false sense of safety before striking.",
    tips: "The arena is completely dark — bring a Lumafly Lantern or use Dreamshield to help navigate. Nosk charges relentlessly and spawns smaller enemies. Keep moving and strike when it pauses after a charge.",
    image: "https://hollowknight.wiki.gg/images/5/5c/Nosk_%28HK%29.png",
  },
];

module.exports = bosses;