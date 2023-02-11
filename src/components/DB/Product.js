import Serving from "../../assets/images/categorie-01.webp";
import Drink from "../../assets/images/categorie-02.webp";
import Bathroom from "../../assets/images/categorie-03.webp";
import Decorative from "../../assets/images/categorie-04.webp";
import Children from "../../assets/images/categorie-05.webp";
import Luxury from "../../assets/images/categorie-06.webp";
import Wall from "../../assets/images/categorie-07.webp";
import Lighting from "../../assets/images/categorie-08.webp";

const Product = [
    {
        id: 1,
        name: "Dishes and plates",
        price: 100,
        quantity: 1,
        default: 1,
        category: ["accessories", "serving", "dishes"],
        image: Serving,
    },
    {
        id: 2,
        name: "Candle and Holder",
        price: 230,
        quantity: 1,
        default: 1,
        category: ["lighting", "decorative"],
        image: Lighting,
    },
    {
        id: 3,
        name: "Drinks Stuff",
        price: 320,
        quantity: 1,
        default: 1,
        category: ["cups", "drink"],
        image: Drink,
    },
    {
        id: 4,
        name: "handicraft products",
        price: 420,
        quantity: 1,
        default: 1,
        category: ["decor", "handicraft"],
        image: Decorative,
    },
    {
        id: 5,
        name: "Bathroom stuff",
        price: 320,
        quantity: 1,
        default: 1,
        category: ["bathroom", "accessories", "cleaning"],
        image: Bathroom,
    },
    {
        id: 6,
        name: "Children Accessories",
        price: 900,
        quantity: 1,
        default: 1,
        category: ["children", "accessories", "play"],
        image: Children,
    },
    {
        id: 7,
        name: "Luxury Items",
        price: 1200,
        quantity: 1,
        default: 1,
        category: ["luxury", "accessories", "decorative"],
        image: Luxury,
    },
    {
        id: 8,
        name: "Wall Paintings",
        price: 320,
        quantity: 1,
        default: 1,
        category: ["wall", "accessories", "decorative"],
        image: Wall,
    },
];

export default Product;
