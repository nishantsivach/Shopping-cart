const initState = {
    products: [
        {
            id: 1,
            productimage: "/Images/camerabag.webp",
            productname: "Camera Bags",
            productdesc: `Model Name : Shoulder Backpack to Carry DSLR SLR Lens Camera Bag (Blue, Black),
            Sales Package : 1,
            Type : Backpack,
            Suitable For : Lens, Advance Point & Shoot Camera, DSLR/SLR Camera, Point & Shoot Camera
            Water Resistant : Yes`,
            productprice: 519,
            discount: "48%",
            quantity: 1,
            actualprice: 999,
            producttitle: "Ketsaal Shoulder Backpack to Carry DSLR SLR Lens Camera Bag (Blue, Black) Camera Bag  (Black, Blue)"

        },
        {
            id: 2,
            productimage: "/Images/monitor.webp",
            productname: "Monitor",
            productdesc: `Description : You can enjoy an engrossing viewing experience while watching films or playing games on the Acer 68.58 cm (27) Full HD Monitor. It has a thin profile of up to 6.6 mm, giving it a sleek and stylish appearance. And, this frameless monitor offers excellent entertainment and optimal screen visibility. Also, it can improve the overall aesthetics of your setup, thanks to its attractive geometric base. Moreover, this monitor enables you to experience high-quality audio as it is equipped with up to 2 W speakers.`,
            productprice: 13680,
            actualprice: 19000,
            discount: "28%",
            quantity: 1,
            producttitle: `acer 27 inch Full HD LED Backlit IPS Panel White Colour Monitor (HA270)  (Frameless, AMD Free Sync, Response Time: 5 ms, 60 Hz Refresh Rate)
            4.4`
        },
        {
            id: 3,
            productimage: "/Images/printer.webp",
            productname: "Printer",
            productdesc: `Description : Bring home this HP printer so you don’t have to run to a printing shop every time you need a printout. This multifunction printer helps you simplify your printing needs without burning a hole in your pocket as you can take printouts at affordable prices. The text and graphics on every printout will be sharp, helping you make the best impression. This printer comes with a fold-up paper tray, features a compact design, and doesn't occupy much space, making it perfect for use in homes and small offices.`,
            productprice: 16606,
            actualprice: 18452,
            discount: "10%",
            quantity: 1,
            producttitle: `HP MFP 136a Multi-function Monochrome Laser Printer (Black Page Cost: 3.13 Rs.)  (White, Grey, Toner Cartridge)`
        },
        {
            id: 4,
            productimage: "/Images/pen.webp",
            productname: "cello Striker Jar Ball Pen",
            productdesc: `Description : Cello Striker Ball Pen Jar - 25 pcs. Ball pens with attractive sports themed foils with 0.6mm tip size that will interest sports enthusiasts`,
            productprice: 115,
            actualprice: 275,
            discount: "58%",
            quantity: 1,
            producttitle: `cello Striker Jar Ball Pen  (Pack of 25, Blue)`
        },
        {
            id: 5,
            productimage: "/Images/parker-pen.webp",
            productname: "PARKER Vector Special Edition Ball Pen",
            productdesc: `Description : Parker Vector Standard ball pen Black body with free Parker Key Chain,
            Sales Package : 1,
            Color : Blue,
            Model Number : 9000023618
            Mechanism : push Mechanism`,
            productprice: 268,
            actualprice: 400,
            discount: "33%",
            quantity: 1,
            producttitle: `PARKER Vector Special Edition Ball Pen Chrome Trim+Free Parker Key Chain Gift Set Ball Pen  (Blue)`
        },
        {
            id: 6,
            productimage: "/Images/cycle.webp",
            productname: "CZBC2604 26 T Road Cycle ",
            productdesc: `Model Name : Chaze by Milind Soman EX 10 CZBC2604,
            Brand Color : Blue,
            Mudguard : No Mudguard,
            Front Derailleur : Non Geared,
            Shifters : Non Geared,
            Tire : 26,
            Stem : Steel`,
            productprice: 6006,
            actualprice: 9499,
            discount: "36%",
            quantity: 1,
            producttitle: `Lifelong Chaze by Milind Soman EX 10 CZBC2604 26 T Road Cycle  (Single Speed, Blue)`
        },
        {
            id: 7,
            productimage: "/Images/guitar.webp",
            productname: "Guitar Linden Wood Rosewood",
            productdesc: `Description : Start your musical journey or take your guitar playing skills to the next level with the 96.52 cm (38) Intern INT-38C-BL Acoustic Guitar. Featuring a cutaway design, this acoustic guitar allows easy holding and handling of even the upper frets with your fingers. It also has a plastic bridge to ensure clear sound quality. And, the easy-to-play strings make this acoustic guitar suitable for beginners or anyone who wants to improve hand strength.`,
            productprice: 2468,
            actualprice: 6495,
            discount: "62%",
            quantity: 1,
            producttitle: `intern INT-38C-BL Acoustic Guitar Linden Wood Rosewood Right Hand Orientation  (Blue)`
        },
        {
            id: 8,
            productimage: "/Images/earphone.webp",
            productname: "MAONO AU-400 Microphone",
            productdesc: `Description : 4-pole jack is compatible for laptop which has only one audio male jack (input/output), iPhone android Smartphone, PlayStation 4, this lavalier microphone is specially designed for smartphone, tablet, laptop, PS4 or Skype, WhatsApp, FaceTime talking, YouTube recording, Podcasting, webinar The pin is thin enough to directly plug into your mobile 3.5mm headset jack even wearing a phone protector, High-quality and omnidirectional function, easy to use It picks up sound equally from all around the microphone, allowing for versatility when mounting and ensuring a high degree of user-friendly operation With the help of 78 inches long cord, it makes the podcasting at a distance with your mobile much easier and easy clip on your tie or shirt collar for sound recording because of sturdy metal clip An Extra 3-pin Adapter for DSLR: If you are going to use this lapel mic with DSLR, camera or other device with 3-pin jack, please use this adapter.`,
            productprice: 409,
            actualprice: 999,
            discount: "59%",
            quantity: 1,
            producttitle: `MAONO AU-400 Microphone `
        },
        {
            id: 9,
            productimage: "/Images/keyholder.webp",
            productname: "Key Holder for Wall",
            productdesc: `Highlights : 
            Type: NA Handicraft & Artifact Showpiece
            Material: Wood
            Suitable For: Wall Hanging
            Dimensions: 24 cm x 6 cm x 13 cm
            Weight: 165 g
            `,
            productprice: 249,
            actualprice: 499,
            discount: "50%",
            quantity: 1,
            producttitle: `Dinine Craft Wooden 2 Pocket Key Holder for Wall and Home Decor Decorative Showpiece - 6 cm  (Wood, Brown) `
        }
    ],
    product: {}
}
const ProductsReducer = (state = initState, action) => {
    switch (action.type) {
        case "PRODUCT":
            return { ...state, product: state.products.find(product => product.id === parseInt(action.id)) }
        default:
            return state;
    }
}
export default ProductsReducer;