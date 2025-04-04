const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors.apply());


app.get("/", (req, res)=>{
    res.sendFile(_dirname+"/index.html");

});

let housePlants = [
    {
      "id": 1,
      "name": "Snake Plant",
      "summary": "Snake plants are low-maintenance indoor plants with tall, upright leaves. They thrive in various lighting conditions and are known for purifying the air. Perfect for beginners, they require little attention.",
      "link": "snakeplant.html",
      "image": "snakeplant.jpg",
      "section": "Easy"
    },
    {
      "id": 2,
      "name": "Arrow-head",
      "summary": "The arrowhead plantis a fast-growing vine with arrow-shaped leaves (as one can guess) and varies in color. It thrives in moderate/indirect light and humidity, and is one of my favorites!",
      "link": "arrowhead.html",
      "image": "arrowhead.jpg",
      "section": "Easy"
    },
    {
      "id": 3,
      "name": "Golden Pythos",
      "summary": "Golden Pothos is a low-maintenance, vine with heart shaped glossy leaves that has yellow/golden variegation. It thrives in indirect light and can tolerate low light. I have a cutting from my grandmothers plant that is doing well!",
      "link": "goldenpothos.html",
      "image": "goldenpothos.jpg",
      "section": "Easy"
    },
    {
      "id": 4,
      "name": "Swiss Cheese",
      "summary": "Tropical vine known for its unique, hole-punched leaves. It thrives in bright, indirect light but can still tolerate low light level conditions. It even enjoys humid conditions.",
      "link": "swisscheese.html",
      "image": "swisscheese.jpg",
      "section": "Medium"
    },
    {
      "id": 5,
      "name": "Peace Lily",
      "summary": "A popular indoor plant known for its glossy dark green leaves and elegant white flowers. It thrives in low to moderate light and requires only occasional watering. Add's humitity to that air.",
      "link": "peacelily.html",
      "image": "peacelily.jpg",
      "section": "Medium"
    },
    {
      "id": 6,
      "name": "Parlor Palm",
      "summary": "Known to be an elegant indoor plant with feathery fronds and ability to thrine in low light conditions. It may be considered to be on the easier end, but due to it's size it sometimes requires more maintance than others.",
      "link": "parlorpalm.html",
      "image": "parlorpalm.jpg",
      "section": "Medium"
    },
    {
      "id": 7,
      "name": "Bonsai Trees",
      "summary": "One of the harder to care for, stating from personal experience. They aren't genetically dwarf, and require egular pruning, proper watering, and providing the right environment to maintain its shape and health.",
      "link": "bonsai.html",
      "image": "bonsai-large.jpg",
      "section": "Hard"
    },
    {
      "id": 8,
      "name": "Hoya",
      "summary": " A trailing vine with thick, waxy leaves. It can produce fragrant, star-shaped flowers. It thrives in bright, indirect light. The reason why I call it somewhat intermediate is only because it will flower under the right care.",
      "link": "hoya.html",
      "image": "hoya.jpg",
      "section": "Hard"
    },
    {
      "id": 9,
      "name": "Prayer plants",
      "summary": "Striking foliage, with vibrant patterns and the unique ability to fold its leaves at night, resembling hands in prayer. It thrives in indirect light and prefers high humidity, making it ideal for indoor spaces with consistent moisture",
      "link": "prayerplant.html",
      "image": "prayerplant.jpg",
      "section": "Hard"
    }
  ]
  ;

app.get("/api/housePlants", (req, res)=>{
    res.send(housePlants);
})


let resources = [
  {
      "id":1,
      "name":"houseplantjournal",
      "image": "houseplantjournal.png",
      "summary": "Another plant blog that answers personal questions regarding plant health.",
      "url": "https://www.houseplantjournal.com/blog/",
      "type": "website"
  },
  {
      "id":2,
      "name":"janeperrone",
      "image": "janeperrone.png",
      "summary": "A great plant blog that has it's own podcast.",
      "url": "https://www.janeperrone.com/",
      "type": "website"
  },
  {
      "id":3,
      "name":"thehouseplantguru",
      "image": "houseplantguru.png",
      "summary": "I love the design and layout of this website. It also has great information!",
      "url": "https://thehouseplantguru.com/",
      "type": "website"
  },
  {
      "id":4,
      "name":"How Not to Kill Your Houseplant",
      "image": "howtonotkillyourhouseplant.png",
      "summary": "Great for beginners, it has all sorts of information on how to find the perfect plant for you, to tell tale signs of plant care.",
      "url": "https://www.booksamillion.com/p/How-Not-Kill-Your-Houseplant/Veronica-Peerless/9780744087888?gStoreCode=578&gQT=1",
      "type": "book"
  },
  {
      "id":5,
      "name":"The New Plant Parent",
      "image": "newplantparent.png",
      "summary": "Teaches the art of understanding a plant’s needs and giving it a home with the right balance of light, water, and nutrients.",
      "url": "https://www.barnesandnoble.com/w/the-new-plant-parent-darryl-cheng/1129279379?ean=9781419732393&gStoreCode=3462&gQT=1",
      "type": "book"
  },
  {
      "id":6,
      "name":"The Garden Plant Encyclopedia",
      "image": "gardenplantsencyclopedia.png",
      "summary": "Says what the title is! All about gardens.",
      "url": "https://www.thriftbooks.com/w/the-garden-plant-encyclopedia/7846753/item/15319541/?gQT=1#idiq=15319541&edition=5385592",
      "type": "book"
  },
  {
      "id":7,
      "name":"The First Book of Plants",
      "image": "firstbookofplants.png",
      "summary": "The First Book of Plants by Alice Dickinson is a wonderful science book that targets upper elementary/middle school readers.",
      "url": "https://www.barnesandnoble.com/w/the-first-book-of-plants-alice-dickinson/1103222874?ean=9780692874882&gQT=1",
      "type": "book"
  },
  {
      "id":8,
      "name":"The Secret World of Plants",
      "image": "secretworldofplants.png",
      "summary": "Children can discover the secrets of more than 100 amazing plants in this treasury of fascinating flora, as well as the essentials of plant science, including photosynthesis, pollination, and germination.",
      "url": "https://www.barnesandnoble.com/w/the-secret-world-of-plants-ben-hoare/1141391324?ean=9780744059830&gStoreCode=3462&gQT=1",
      "type": "book"
  },
  {
      "id":9,
      "name":"Plantopedia",
      "image": "plantopedia.png",
      "summary": "Houseplants have the power to transform any room. With their lush foliage and structural beauty, they help create indoor oases that bring a sense of tranquility to our busy lives. ",
      "url": "https://www.barnesandnoble.com/w/plantopedia-lauren-camilleri/1137000608?ean=9781925811773&gStoreCode=3462&gQT=1",
      "type": "book"
  }
]

app.get("/api/resources", (req, res)=>{
  res.send(resources);
})



app.listen(3001, ()=>{
    console.log("I'm listening");

});
