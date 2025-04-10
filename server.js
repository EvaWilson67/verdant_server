const express = require("express");
const cors = require("cors");
const multer = require("multer");

const Joi = require("joi");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());



const careStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/care_images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const careUpload = multer({ storage: careStorage });


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

let housePlants = [
  {
    id: 1,
    name: "Snake Plant",
    summary:
      "Snake plants are low-maintenance indoor plants with tall, upright leaves. They thrive in various lighting conditions and are known for purifying the air. Perfect for beginners, they require little attention.",
    link: "/snakeplant",
    image: "snakeplant.jpg",
    section: "Easy",
  },
  {
    id: 2,
    name: "Arrow-head",
    summary:
      "The arrowhead plantis a fast-growing vine with arrow-shaped leaves (as one can guess) and varies in color. It thrives in moderate/indirect light and humidity, and is one of my favorites!",
    link: "/arrowhead",
    image: "arrowhead.jpg",
    section: "Easy",
  },
  {
    id: 3,
    name: "Golden Pythos",
    summary:
      "Golden Pothos is a low-maintenance, vine with heart shaped glossy leaves that has yellow/golden variegation. It thrives in indirect light and can tolerate low light. I have a cutting from my grandmothers plant that is doing well!",
    link: "/goldenpothos",
    image: "goldenpothos.jpg",
    section: "Easy",
  },
  {
    id: 4,
    name: "Swiss Cheese",
    summary:
      "Tropical vine known for its unique, hole-punched leaves. It thrives in bright, indirect light but can still tolerate low light level conditions. It even enjoys humid conditions.",
    link: "/swisscheese",
    image: "swisscheese.jpg",
    section: "Medium",
  },
  {
    id: 5,
    name: "Peace Lily",
    summary:
      "A popular indoor plant known for its glossy dark green leaves and elegant white flowers. It thrives in low to moderate light and requires only occasional watering. Add's humitity to that air.",
    link: "/peacelily",
    image: "peacelily.jpg",
    section: "Medium",
  },
  {
    id: 6,
    name: "Parlor Palm",
    summary:
      "Known to be an elegant indoor plant with feathery fronds and ability to thrine in low light conditions. It may be considered to be on the easier end, but due to it's size it sometimes requires more maintance than others.",
    link: "/parlorpalm",
    image: "parlorpalm.jpg",
    section: "Medium",
  },
  {
    id: 7,
    name: "Bonsai Trees",
    summary:
      "One of the harder to care for, stating from personal experience. They aren't genetically dwarf, and require egular pruning, proper watering, and providing the right environment to maintain its shape and health.",
    link: "/bonsai",
    image: "bonsai-large.jpg",
    section: "Hard",
  },
  {
    id: 8,
    name: "Hoya",
    summary:
      " A trailing vine with thick, waxy leaves. It can produce fragrant, star-shaped flowers. It thrives in bright, indirect light. The reason why I call it somewhat intermediate is only because it will flower under the right care.",
    link: "/hoya",
    image: "hoya.jpg",
    section: "Hard",
  },
  {
    id: 9,
    name: "Prayer plants",
    summary:
      "Striking foliage, with vibrant patterns and the unique ability to fold its leaves at night, resembling hands in prayer. It thrives in indirect light and prefers high humidity, making it ideal for indoor spaces with consistent moisture",
    link: "/prayerplant",
    image: "prayerplant.jpg",
    section: "Hard",
  },
];
app.get("/api/housePlants", (req, res) => {
  res.send(housePlants);
});

let resources = [
  {
    id: 1,
    name: "houseplantjournal",
    image: "houseplantjournal.png",
    summary:
      "Another plant blog that answers personal questions regarding plant health.",
    url: "https://www.houseplantjournal.com/blog/",
    type: "website",
  },
  {
    id: 2,
    name: "janeperrone",
    image: "janeperrone.png",
    summary: "A great plant blog that has it's own podcast.",
    url: "https://www.janeperrone.com/",
    type: "website",
  },
  {
    id: 3,
    name: "thehouseplantguru",
    image: "houseplantguru.png",
    summary:
      "I love the design and layout of this website. It also has great information!",
    url: "https://thehouseplantguru.com/",
    type: "website",
  },
  {
    id: 4,
    name: "How Not to Kill Your Houseplant",
    image: "howtonotkillyourhouseplant.png",
    summary:
      "Great for beginners, it has all sorts of information on how to find the perfect plant for you, to tell tale signs of plant care.",
    url: "https://www.booksamillion.com/p/How-Not-Kill-Your-Houseplant/Veronica-Peerless/9780744087888?gStoreCode=578&gQT=1",
    type: "book",
  },
  {
    id: 5,
    name: "The New Plant Parent",
    image: "newplantparent.png",
    summary:
      "Teaches the art of understanding a plant’s needs and giving it a home with the right balance of light, water, and nutrients.",
    url: "https://www.barnesandnoble.com/w/the-new-plant-parent-darryl-cheng/1129279379?ean=9781419732393&gStoreCode=3462&gQT=1",
    type: "book",
  },
  {
    id: 6,
    name: "The Garden Plant Encyclopedia",
    image: "gardenplantsencyclopedia.png",
    summary: "Says what the title is! All about gardens.",
    url: "https://www.thriftbooks.com/w/the-garden-plant-encyclopedia/7846753/item/15319541/?gQT=1#idiq=15319541&edition=5385592",
    type: "book",
  },
  {
    id: 7,
    name: "The First Book of Plants",
    image: "firstbookofplants.png",
    summary:
      "The First Book of Plants by Alice Dickinson is a wonderful science book that targets upper elementary/middle school readers.",
    url: "https://www.barnesandnoble.com/w/the-first-book-of-plants-alice-dickinson/1103222874?ean=9780692874882&gQT=1",
    type: "book",
  },
  {
    id: 8,
    name: "The Secret World of Plants",
    image: "secretworldofplants.png",
    summary:
      "Children can discover the secrets of more than 100 amazing plants in this treasury of fascinating flora, as well as the essentials of plant science, including photosynthesis, pollination, and germination.",
    url: "https://www.barnesandnoble.com/w/the-secret-world-of-plants-ben-hoare/1141391324?ean=9780744059830&gStoreCode=3462&gQT=1",
    type: "book",
  },
  {
    id: 9,
    name: "Plantopedia",
    image: "plantopedia.png",
    summary:
      "Houseplants have the power to transform any room. With their lush foliage and structural beauty, they help create indoor oases that bring a sense of tranquility to our busy lives. ",
    url: "https://www.barnesandnoble.com/w/plantopedia-lauren-camilleri/1137000608?ean=9781925811773&gStoreCode=3462&gQT=1",
    type: "book",
  },
];

app.get("/api/resources", (req, res) => {
  res.send(resources);
});

let care = [
  {
    id: 1,
    imageFirst: "true",
    image: "lighting.jpg",
    name: "Lighting",
    summary:
      "Most indoor plants do well with bright, indirect light, where they get plenty of light without being exposed to harsh, direct sun. Some plants, like succulents and cacti, need direct sunlight, while others, like pythos and snake plants, are more adaptable to low-light conditions. Finding the right balance of light is important to avoid issues like leaf burn.",
  },
  {
    id: 2,
    imageFirst: "false",
    image: "watering.jpg",
    name: "Watering",
    summary:
      "Overwatering is a common mistake, so always check the soil before watering. Many plants prefer to dry out a bit between waterings—especially succulents and cacti, which need minimal water and thrive in drier conditions. For most indoor plants, water when the top inch of soil feels dry to the touch. Ensure your plant has drainage holes to allow excess water to escape and prevent root rot.",
  },
  {
    id: 3,
    imageFirst: "true",
    image: "fertilizer.jpg",
    name: "Fertilizer",
    summary:
      "During the active growing season (spring and summer), plants benefit from regular feeding, typically once a month, with a balanced, water-soluble fertilizer. This boosts their growth and helps them produce vibrant leaves and flowers. In contrast, plants require less fertilizer during the dormant period (fall and winter), as their growth slows down.",
  },
  {
    id: 4,
    imageFirst: "false",
    image: "repotting.jpg",
    name: "Repotting",
    summary:
      "Typically, you’ll need to repot every 1-2 years, depending on the plant's growth rate. Signs it’s time to repot include roots growing out of the drainage holes, a plant becoming top-heavy, or the soil drying out too quickly. Choose a pot that’s 1-2 inches larger in diameter than the current one, and make sure it has proper drainage.",
  },
];

app.get("/api/care", (req, res) => {
  res.send(care);
});

let garden = [
  {
    id: 1,
    image: "squash.jpg",
    name: "Kabocha",
    type: "Vegetable",
    link: "/Kabocha",
  },
  {
    id: 2,
    image: "eggplant.jpg",
    name: "Eggplant",
    type: "Vegetable",
    link: "/eggplant",
  },
  {
    id: 3,
    image: "corn.jpg",
    name: "Corn",
    type: "Vegetable",
    link: "/corn",
  },
  {
    id: 4,
    image: "peaches.jpg",
    name: "Peaches",
    type: "Fruit",
    link: "/peaches",
  },
  {
    id: 5,
    image: "blackberry.jpg",
    name: "Blackberry",
    type: "Fruit",
    link: "/blackberry",
  },
  {
    id: 6,
    image: "blueberries.jpg",
    name: "Blueberries",
    type: "Fruit",
    link: "/blueberries",
  },
  {
    id: 7,
    image: "dill.jpg",
    name: "Dill",
    type: "Herb",
    link: "/dill",
  },
  {
    id: 8,
    image: "basil.jpg",
    name: "Basil",
    type: "Herb",
    link: "/basil",
  },
  {
    id: 9,
    image: "mint.jpg",
    name: "Mint",
    type: "Herb",
    link: "/mint",
  },
  {
    id: 10,
    image: "sunflower.jpg",
    name: "Sunflower",
    type: "Flower",
    link: "/sunflower",
  },
  {
    id: 11,
    image: "carnations.jpg",
    name: "Carnation",
    type: "Flower",
    link: "/carnation",
  },
  {
    id: 11,
    image: "lavendar.jpg",
    name: "Lavendar",
    type: "Flower",
    link: "/lavendar",
  },
];
app.get("/api/garden", (req, res) => {
  res.send(garden);
});

let blog = [
  {
    id: 1,
    image: "cardinal.jpg",
    date: "11-10-2024",
    summary: "On my walk around campus I saw a cardinal!",
  },
  {
    id: 2,
    image: "betty.jpg",
    date: "9-13-2024",
    summary: "I got Betty from my grandmother as a gift for my birthday.",
  },
  {
    id: 3,
    image: "greycatbird.jpg",
    date: "8-18-2020",
    summary: "On my way to the swearingen this grey cat bird followed me.",
  },
  {
    id: 4,
    image: "greenquad.jpg",
    date: "7-25-2024",
    summary:
      "My friend used to live in green quad, so I wanted to take a couple photos to remember.",
  },
  {
    id: 5,
    image: "boxturtle.jpg",
    date: "6-19-2024",
    summary: "I spotted a box turtle on my parents property",
  },
  {
    id: 6,
    image: "charelstonart.jpg",
    date: "5-10-2024",
    summary:
      "I went on a trip with a friend to Charelston SC. We went to the local art museum",
  },
];
app.get("/api/blog", (req, res) => {
  res.send(blog);
});

// app.post("/api/care", careUpload.single("img"), (req, res) => {
//   const result = validateCare(req.body);
//   console.log("I made it");

//   if (result.error) {
//     console.log("I have an error");
//     res.status(400).send(result.error.details[0].message);
//     return;
//   }

//   const cares = {
//     _id: care.length,
//     name: req.body.name,
//     summary: req.body.summary,
//     imageFirst: req.body.imageFirst,
//   };

//   if (req.file) {
//     cares.image = req.file.filename;
//   }

//   console.log(schema.validate(cares));

//   care.push(cares);
//   res.status(200).send(cares);
// });

// const validateCare = (cares) => {
//   const schema = Joi.object({
//     _id: Joi.allow(""),
//     name: Joi.string().min(3).required(),
//     summary: Joi.string().min(3).required(),
//     imageFirst: Joi.string(),
//   });

//   return schema.validate(cares);
// };

app.post("/api/blog", upload.single("img"), (req, res) => {
  const result = validateBlog(req.body);
  console.log("I made it");

  if (result.error) {
    console.log("I have an error");
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const blogs = {
    _id: blog.length,
    date: req.body.date,
    summary: req.body.summary,
  };

  if (req.file) {
    blogs.image = "blog_images/" + req.file.filename;
  }

  blog.push(blogs);
  res.status(200).send(blogs);
});

const validateBlog = (blogs) => {
  const schema = Joi.object({
    _id: Joi.allow(""),
    date: Joi.string().min(3).required(),
    summary: Joi.string().min(3).required(),
  });

  console.log(schema.validate(blogs));
  return schema.validate(blogs);
};

app.listen(3001, () => {
  console.log("I'm listening");
});
