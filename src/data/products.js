import Product1 from '../assets/images/Product1.webp';
import Product2 from '../assets/images/Product2.webp';
import Product3 from '../assets/images/Product3.webp';
import Product4 from '../assets/images/Product4.webp';
import Product5 from '../assets/images/Product5.webp';
import Product6 from '../assets/images/Product6.webp';
import Product7 from '../assets/images/Product7.webp';
import Product8 from '../assets/images/Product8.webp';

const products = [
    {
        id: 1,
        name: "Velvet Lip Tint",
        category: "Lips",
        image: Product1,
        price: 349,
        oldPrice: 499,
        rating: 5,
        discount: 30,
        description: "A long-lasting velvet finish lip tint that delivers rich, buildable color. Infused with Vitamin E for all-day hydration and comfort. Available in 12 gorgeous shades.",
        tags: ["lips", "tint", "velvet", "long-lasting"]
    },
    {
        id: 2,
        name: "Glam & Go Blush Stix",
        category: "Blush",
        image: Product2,
        price: 299,
        oldPrice: 450,
        rating: 5,
        discount: 33,
        description: "Cream blush stick for a natural, flushed look. Blends effortlessly into skin for a buildable, dewy finish. Perfect for your morning GRWM routine.",
        tags: ["blush", "cream", "stix", "glow"]
    },
    {
        id: 3,
        name: "Brow Pen Pro",
        category: "Brows",
        image: Product3,
        price: 399,
        oldPrice: 550,
        rating: 4,
        discount: 27,
        description: "Precision micro-fork brow pen creates natural hair-stroke effect. Waterproof formula lasts up to 24 hours. Smudge-proof and sweat-resistant.",
        tags: ["brows", "pencil", "waterproof", "precision"]
    },
    {
        id: 4,
        name: "Dewy Skin Serum Primer",
        category: "Skin",
        image: Product4,
        price: 599,
        oldPrice: 899,
        rating: 5,
        discount: 33,
        description: "Hydrating serum-meets-primer formula that preps skin for flawless makeup application. Enriched with Hyaluronic Acid and Niacinamide for skin-loving benefits.",
        tags: ["skin", "primer", "serum", "hydrating", "dewy"]
    },
    {
        id: 5,
        name: "Milk Tint Gloss",
        category: "Lips",
        image: Product5,
        price: 249,
        oldPrice: 380,
        rating: 4,
        discount: 34,
        description: "A sheer, milky gloss that adds the perfect hint of color and shine. Non-sticky formula with a plumping effect. Great for everyday glam.",
        tags: ["lips", "gloss", "shine", "milky"]
    },
    {
        id: 6,
        name: "Powder Rush Setting Powder",
        category: "Face",
        image: Product6,
        price: 479,
        oldPrice: 699,
        rating: 4,
        discount: 31,
        description: "Finely milled translucent setting powder that minimizes pores and controls shine. Locks makeup in place for up to 12 hours. Suitable for all skin tones.",
        tags: ["face", "powder", "setting", "matte"]
    },
    {
        id: 7,
        name: "Smoky Eye Palette",
        category: "Eyes",
        image: Product7,
        price: 649,
        oldPrice: 950,
        rating: 5,
        discount: 32,
        description: "9-shade eyeshadow palette featuring mattes, shimmers, and glitters. Highly pigmented formula that blends seamlessly. From daytime natural to full-on glam.",
        tags: ["eyes", "eyeshadow", "palette", "smoky"]
    },
    {
        id: 8,
        name: "Glow Drops Highlighter",
        category: "Face",
        image: Product8,
        price: 429,
        oldPrice: 599,
        rating: 5,
        discount: 28,
        description: "Liquid highlighter drops that can be used alone or mixed into foundation for an all-over glow. Buildable from subtle luminosity to blinding highlight.",
        tags: ["face", "highlighter", "glow", "shimmer"]
    },
    {
        id: 9,
        name: "Lash & Curl Mascara",
        category: "Eyes",
        image: Product1,
        price: 329,
        oldPrice: 480,
        rating: 4,
        discount: 31,
        description: "Volumizing and curling mascara formula that lifts, lengthens, and separates lashes. Clump-free wand with a curved brush for maximum curl hold.",
        tags: ["eyes", "mascara", "lashes", "volumizing"]
    },
    {
        id: 10,
        name: "Glass Skin Moisturizer",
        category: "Skin",
        image: Product2,
        price: 749,
        oldPrice: 1099,
        rating: 5,
        discount: 32,
        description: "Rich yet lightweight gel-cream moisturizer formulated for a glass skin finish. Contains Centella Asiatica, Ceramides, and Peptides for deep nourishment.",
        tags: ["skin", "moisturizer", "glass skin", "hydrating"]
    },
    {
        id: 11,
        name: "Contour & Bronzer Duo",
        category: "Face",
        image: Product3,
        price: 559,
        oldPrice: 799,
        rating: 4,
        discount: 30,
        description: "Two-in-one contour and bronzer palette for sculpting and warming the complexion. Matte and satin finishes that mimic the sun-kissed look effortlessly.",
        tags: ["face", "contour", "bronzer", "sculpt"]
    },
    {
        id: 12,
        name: "Waterproof Gel Liner",
        category: "Eyes",
        image: Product4,
        price: 289,
        oldPrice: 420,
        rating: 5,
        discount: 31,
        description: "Creamy gel eyeliner that glides on smoothly then sets to a budge-proof finish. Long-wearing formula lasts all day without smudging or fading.",
        tags: ["eyes", "liner", "waterproof", "gel"]
    }
];

export default products;
