/* ============================================================
   THE CRUST PIZZA — CENTRAL DATA
   Every field below is sourced directly from thecrustpizza.pk
   (home, /classic-menu-2/, /contacts/, /all-posts/).
   No invented business information.
   ============================================================ */

const BUSINESS = {
  name: "The Crust Pizza",
  tagline: "The Best Pizza in Town",
  strapline: "Our chefs are working 24/7 — easiest, fastest and tastiest.",
  phonePrimaryDisplay: "0335-3770072",
  phonePrimaryAlt: "055-373-0072",
  whatsappNumberIntl: "923353770072", // 0335-3770072 in international format
  email: "info@thecrustpizza.pk",
  hours: [
    { days: "Monday – Friday", time: "10:00 AM – 10:00 PM" },
    { days: "Sunday", time: "11:00 AM – 9:00 PM" }
  ],
  social: {
    facebook: "https://www.facebook.com/TheCrustPizzaPakistan",
    twitter: "https://twitter.com/TheCrustPizzaPakistan",
    instagram: "https://www.instagram.com/TheCrustPizzaPakistan/"
  },
  flagshipAddress: "Billa Chowk, Satellite Town, Gujranwala",
  aboutBody:
    "With great prices, excellent service, and some of the best food you'll ever have — The Crust Pizza is \u201Cjust the best there is.\u201D From a single counter in Gujranwala to seven locations across Punjab and Azad Kashmir, the kitchen runs around the clock, hand-stretching dough and firing pizzas for anyone hungry enough to knock — day or night.",
  logo: "https://thecrustpizza.pk/wp-content/uploads/2025/05/crust-mini10.png",
  heroImages: [
    "https://thecrustpizza.pk/wp-content/uploads/2026/04/b83636cb-aef4-4ea1-bb95-4927eb87f3e8-682x1024.jpg",
    "https://thecrustpizza.pk/wp-content/uploads/2026/04/88921819-ddc6-46de-b85e-e8361dbf4722-682x1024.jpg",
    "https://thecrustpizza.pk/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-19-at-16.54.55.jpeg"
  ],
  homeShowcase: [
    { label: "Menu", img: "https://thecrustpizza.pk/wp-content/uploads/2026/04/b83636cb-aef4-4ea1-bb95-4927eb87f3e8-682x1024.jpg" },
    { label: "Fast Food", img: "https://thecrustpizza.pk/wp-content/uploads/2026/04/88921819-ddc6-46de-b85e-e8361dbf4722-682x1024.jpg" },
    { label: "Midnight Deals", img: "https://thecrustpizza.pk/wp-content/uploads/2026/04/cd4f1a29-c215-433f-bf5a-616d7f5f2251-722x1024.jpg" },
    { label: "Cheezy", img: "https://thecrustpizza.pk/wp-content/uploads/2026/04/dce830b6-e139-4292-a03f-63cfcd05ccb3-722x1024.jpg" }
  ]
};

const AWARDS = [
  {
    title: "Rising Brand of the Year",
    year: "2025",
    slug: "rising-brand-of-the-year",
    date: "November 27, 2025",
    image: "https://thecrustpizza.pk/wp-content/uploads/2025/11/d22fcd16-8ee4-4701-9f6a-fecadba375e0.jpg",
    excerpt:
      "A proud moment for The Crust Pizza — recognised with two prestigious honours: Rising Brand of the Year and Best CEO of the Year. A reflection of the vision, leadership and hard work of the whole team, and the loyalty of the customers who made it possible.",
    tags: ["Achievements", "Rising Brand of the Year", "Best CEO of the Year"]
  }
];

// Menu data — categories & items exactly as listed on /classic-menu-2/
const MENU = [
  {
    id: "pizzas",
    label: "Pizzas",
    items: [
      { name: "Crown Crust Pizza", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/crown-370x370.jpg", sizes: [["Medium 9\u2033", 1370], ["Large 12\u2033", 1980], ["X-Large 15\u2033", 2800]] },
      { name: "Cheesy Mughlai Pizza", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/mughlai-370x370.jpg", sizes: [["Medium 9\u2033", 1370], ["Large 12\u2033", 1980], ["X-Large 15\u2033", 2800]] },
      { name: "The Corn Lover", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/4_34.jpg", sizes: [["Small 6\u2033", 550], ["Medium 9\u2033", 1150], ["Large 12\u2033", 1600], ["X-Large 15\u2033", 2470]] },
      { name: "Chicken Arabian", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/4_33.jpg", sizes: [["Small 6\u2033", 550], ["Medium 9\u2033", 1150], ["Large 12\u2033", 1600], ["X-Large 15\u2033", 2470]] },
      { name: "Classic Pepperoni", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/4_32.jpg", sizes: [["Small 6\u2033", 550], ["Medium 9\u2033", 1150], ["Large 12\u2033", 1600], ["X-Large 15\u2033", 2470]] },
      { name: "Very Veggie", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/4_31.jpg", sizes: [["Small 6\u2033", 550], ["Medium 9\u2033", 1150], ["Large 12\u2033", 1600], ["X-Large 15\u2033", 2470]] },
      { name: "Cheese Lover", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/4_26.jpg", sizes: [["Small 6\u2033", 550], ["Medium 9\u2033", 1150], ["Large 12\u2033", 1600], ["X-Large 15\u2033", 2470]] },
      { name: "Creamy Melt", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/4_25.jpg", sizes: [["Small 6\u2033", 550], ["Medium 9\u2033", 1150], ["Large 12\u2033", 1600], ["X-Large 15\u2033", 2470]] },
      { name: "Chicken Fajita", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/4_24.jpg", sizes: [["Small 6\u2033", 550], ["Medium 9\u2033", 1150], ["Large 12\u2033", 1600], ["X-Large 15\u2033", 2470]] },
      { name: "Chicken Tikka", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/4_23-1.jpg", sizes: [["Small 6\u2033", 600], ["Medium 9\u2033", 1270], ["Large 12\u2033", 1870], ["X-Large 15\u2033", 2700]] },
      { name: "Chilli Chicken", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/4_18.jpg", sizes: [["Small 6\u2033", 600], ["Medium 9\u2033", 1270], ["Large 12\u2033", 1870], ["X-Large 15\u2033", 2700]] },
      { name: "Chicken Supreme", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/4_17.jpg", sizes: [["Small 6\u2033", 600], ["Medium 9\u2033", 1270], ["Large 12\u2033", 1870], ["X-Large 15\u2033", 2700]] },
      { name: "The Crust Special", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/4_16.jpg", sizes: [["Small 6\u2033", 600], ["Medium 9\u2033", 1270], ["Large 12\u2033", 1870], ["X-Large 15\u2033", 2700]] },
      { name: "Behari Kabab", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/4_15.jpg", sizes: [["Small 6\u2033", 600], ["Medium 9\u2033", 1270], ["Large 12\u2033", 1870], ["X-Large 15\u2033", 2700]] },
      { name: "Fajita Sicilian", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/4_09.jpg", sizes: [["Small 6\u2033", 600], ["Medium 9\u2033", 1270], ["Large 12\u2033", 1870], ["X-Large 15\u2033", 2700]] },
      { name: "Afghani Tikka", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/4_07.jpg", sizes: [["Small 6\u2033", 600], ["Medium 9\u2033", 1270], ["Large 12\u2033", 1870], ["X-Large 15\u2033", 2700]] },
      { name: "Peri Peri Pizza", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/4_05.jpg", sizes: [["Small 6\u2033", 600], ["Medium 9\u2033", 1270], ["Large 12\u2033", 1870], ["X-Large 15\u2033", 2700]] },
      { name: "Malai Boti", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/4_03-1.jpg", sizes: [["Small 6\u2033", 600], ["Medium 9\u2033", 1270], ["Large 12\u2033", 1870], ["X-Large 15\u2033", 2700]] }
    ]
  },
  {
    id: "pasta",
    label: "Pasta",
    items: [
      { name: "Fettuccine Pasta", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/3_06-1.jpg", sizes: [["Regular", 795]] },
      { name: "The Crust Special Pasta", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/3_06.jpg", sizes: [["Regular", 825]] }
    ]
  },
  {
    id: "burgers",
    label: "Burgers",
    items: [
      { name: "Crust Crispy Burger", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/3_37.jpg", sizes: [["Regular", 420]] },
      { name: "Mighty Thunder Burger", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/3_34.jpg", sizes: [["Regular", 610]] },
      { name: "Chicken Burger", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/3_40.jpg", sizes: [["Regular", 310]] }
    ]
  },
  {
    id: "sides",
    label: "Sides",
    items: [
      { name: "Classic Platter", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/3_10.jpg", note: "3 pcs Spin Rolls · 12 pcs Wings · Regular Fries · Mayo Dip", sizes: [["Platter", 1050]] },
      { name: "The Crust Special Platter", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/3_10.jpg", note: "3 pcs Spin Rolls · 6 pcs Wings · Regular Fries · Mayo Dip", sizes: [["Platter", 950]] },
      { name: "The Crust Special Sandwich", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/3_03.jpg", sizes: [["Regular", 825]] },
      { name: "French Fries", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/3_25.jpg", sizes: [["Regular", 220], ["Large", 385]] },
      { name: "Chicken Poppers", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/3_28.jpg", sizes: [["12 pcs", 610]] },
      { name: "Chicken Nuggets", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/3_27.jpg", sizes: [["5 pcs", 275], ["10 pcs", 495]] },
      { name: "Loaded Fries", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/3_26.jpg", sizes: [["Regular", 640], ["With Cheese", 750]] },
      { name: "Crispy Chicken Strips", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/3_20.jpg", sizes: [["4 pcs", 795], ["8 pcs", 935]] },
      { name: "Spin Rolls", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/3_18.jpg", sizes: [["3 pcs", 420], ["6 pcs", 770]] },
      { name: "Oven Baked Wings", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/3_16.jpg", sizes: [["6 pcs", 420], ["12 pcs", 770]] },
      { name: "Chicken Cheese Stick", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/3_14.jpg", sizes: [["Small", 550], ["Regular", 1045]] }
    ]
  },
  {
    id: "deals",
    label: "Deals",
    items: [
      { name: "Value Deal 1", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/3_49.jpg", note: "Crust Crispy Burger · Regular Fries · 345ml Drink", sizes: [] },
      { name: "Value Deal 2", img: "https://thecrustpizza.pk/wp-content/uploads/2026/01/vd2.jpg", note: "2× Crust Crispy Burger · Regular Fries · 345ml Drink", sizes: [] }
    ]
  }
];

// Locations — exactly as listed on /contacts/
const LOCATIONS = [
  {
    city: "Gujranwala",
    branch: "Satellite Town (Flagship)",
    address: "Billa Chowk, Satellite Town, Gujranwala",
    phones: ["0335 3770072", "055 373 0072"]
  },
  {
    city: "Gujranwala",
    branch: "Wapda Town",
    address: "Al-Merjan Center, Wapda Town, Gujranwala",
    phones: ["0335 428 4090", "055 428 4090"]
  },
  {
    city: "Gujranwala",
    branch: "Canal View",
    address: "Main Market, Canal View, Gujranwala",
    phones: ["0331 428 5457", "055 428 5487"]
  },
  {
    city: "Kharian",
    branch: "G.T. Road",
    address: "Main G.T Road, Near Nadra Office, Kharian",
    phones: ["0321 6144 002", "053 7532 632"]
  },
  {
    city: "Lahore",
    branch: "Johar Town",
    address: "PIA Road, Johar Town, Lahore",
    phones: ["0309 111 90 81"]
  },
  {
    city: "Sheikhupura",
    branch: "Dil Chowk",
    address: "Dil Chowk, Outfitter Basement, Sheikhupura",
    phones: ["0311 1000568"]
  },
  {
    city: "Mirpur",
    branch: "Y Cross Chowk",
    address: "Sky View Plaza, Near Y Cross Chowk, Mirpur AJK",
    phones: ["0311 1133070"]
  }
];

// Helper: build a wa.me link with a pre-filled message
function waLink(message) {
  const base = `https://wa.me/${BUSINESS.whatsappNumberIntl}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

function formatPKR(n) {
  return "Rs. " + n.toLocaleString("en-PK");
}
