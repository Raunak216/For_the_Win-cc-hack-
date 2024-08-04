// const mongoose=require("mongoose");
// const item=require("../models/items.js");
// mongoose.connect('mongodb://127.0.0.1:27017/rarematch', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const genres = {
//   shoes: [],
//   sport: [],
//   watch: [],
// };

// mongoose.connection.once('open', () => {
//    item.find({}, (err, items) => {
//     if (err) {
//       console.error(err);
//     } else {
//       items.forEach((item) => {
//         if (item.type === 'shoes') {
//           genres.nature.push({
//             url: item.image.url,
//             link: item.website_link,
//             title: item.title,
//             description: item.description,
//             price: item.price,
//           });
//         } else if (item.type === 'sport') {
//           genres.city.push({
//             url: item.image.url,
//             link: item.website_link,
//             title: item.title,
//             description: item.description,
//             price: item.price,
//           });
//         } else if (item.type === 'watch') {
//           genres.technology.push({
//             url: item.image.url,
//             link: item.website_link,
//             title: item.title,
//             description: item.description,
//             price: item.price,
//           });
//         }
//       });

//     }
//   });
// });

const genres = {
    shoes: [
        { url: 'https://sothebys-md.brightspotcdn.com/dims4/default/866f785/2147483647/strip/true/crop/3543x3543+0+0/resize/800x800!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F3f%2F83%2F30a3a41046f8beb98b2487a0550b%2Fn11119-cfhqv-t3-09.jpg', link: 'https://example.com/nature1',title: "Nike Air Jordan 1 Off-White Chicago Sample",
description: "Exclusive Nike Air Jordan 1 Off-White Chicago Sample, size 8. A highly sought-after collector's item from Virgil Abloh's 'The Ten' collection.",
  price: "Price on request" },

        { url: 'https://sothebys-md.brightspotcdn.com/dims4/default/6a4a38f/2147483647/strip/true/crop/800x800+0+0/resize/800x800!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F48%2F51%2F7092de3940e8b7f8810d11cb8196%2Fsothebys-md.brightspotcdn-6.jpg',
            title: "Nike x Louis Vuitton Air Force 1 Pilot Case",
  description: "Unique collaboration between Nike and Louis Vuitton, featuring the Air Force 1 in a special pilot case, size 7.",
  price: "Price on request" },

        { url: 'https://sothebys-md.brightspotcdn.com/dims4/default/92a6364/2147483647/strip/true/crop/3543x3543+0+0/resize/800x800!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F2f%2F7e%2F637edee24417a3585dd2bfc52739%2Flnmrk-cpcxr-t3-02.jpg', link: 'https://example.com/nature3' ,
            title: "Nike Dunk High Coraline",
  description: "Nike Dunk High inspired by the Coraline movie, size 12. A rare collectible for fans of both sneakers and the film.",
 price: "Price on request", }
    ],


    sport: [
        { url: 'https://images.footballfanatics.com/brazil-national-team/autographed/signed-ronaldinho-barcelona-blue/red-soccer-jersey-beckett-bas-coa_ss2_p-201410822+u-btdqdxkjhehesynunade+v-vkpazeznqmodbenpfnlz.jpg?_hv=2&w=340', link: 'https://example.com/city1', title: "Signed Ronaldinho Barcelona Blue/Red Soccer Jersey Beckett BAS COA",
            description: "This autographed Ronaldinho jersey from his time at Barcelona comes with a Beckett BAS Certificate of Authenticity. A great collectible for any soccer fan.",
            price: 726.99 },

        { url: 'https://images.footballfanatics.com/chicago-bulls/michael-jordan-autographed-1986-87-chicago-bulls-red-authentic-mitchell-and-ness-jersey-upper-deck_ss2_p-200531734+u-atonuvsjcnnhlohoaqec+v-tryawusoaiuycqoxrlcq.jpg?_hv=2&w=900', link: 'https://example.com/city2', title: "Michael Jordan Autographed 1986-87 Chicago Bulls Red Authentic Mitchell and Ness Jersey",
    description: "An iconic jersey signed by Michael Jordan from his early years with the Chicago Bulls, authenticated by Upper Deck.",
    price: 3499.99,
  
        },
        { url: 'https://images.footballfanatics.com/washington-commanders/jayden-daniels-washington-commanders-autographed-event-used-football-from-the-2024-nfl-rookie-premiere-on-may-18-2024_ss5_p-201696838+pv-1+u-9l4gpocmbu6me3lasyyn+v-lom8y3cqmxna0ljgsrxz.jpg?_hv=2&w=900', link: 'https://example.com/city3',  title: "Sidney Crosby Autographed Pittsburgh Penguins Adidas Jersey",
            description: "A signed jersey by Sidney Crosby, a key player of the Pittsburgh Penguins, authenticated for collectors.",
            price: 799.99,}
    ],
    watch: [
        { url: 'https://www.watchcentre.com/media/catalog/product/cache/863e1d5ce52d3ab34acca7e4d6496575/m/1/m1975a0_1.jpg', link: 'https://example.com/tech1', title: "Ukrainian Dancers by Edgar Degas",
    description: "This exquisite piece by Edgar Degas captures the graceful movement and vibrant energy of Ukrainian dancers. An iconic work of art, it brings a touch of elegance and history to any collection.",
        price: 3000000,
    },
    { url: 'https://www.watchcentre.com/media/catalog/product/cache/863e1d5ce52d3ab34acca7e4d6496575/1/0/10179a.jpg', link: 'https://example.com/tech2' ,title: "Fleurs dans un Vase avec Partition Musicale by Paul Gauguin",
    description: "Paul Gauguin's 'Fleurs dans un Vase avec Partition Musicale' is a beautiful still life painting that showcases his masterful use of color and composition. This piece is a testament to Gauguin's unique artistic vision.",
            price: 2500000,
},
        { url: 'https://www.watchcentre.com/media/catalog/product/cache/863e1d5ce52d3ab34acca7e4d6496575/s/s/ssm.jpg', link: 'https://example.com/tech3' ,title: "Petite Mendiante by William-Adolphe Bouguereau",
    description: "William-Adolphe Bouguereau's 'Petite Mendiante' is a poignant depiction of a young beggar girl. Bouguereau's attention to detail and emotional depth make this painting a captivating addition to any art collection.",
   price: 1800000,
}
    ]
};

let currentGenre = 'shoes';
let currentPhotoIndex = 0;

const photoElement = document.getElementById('photo');

function showPhoto() {
    const photos = genres[currentGenre];
    const photo = photos[currentPhotoIndex];
    
    // Apply fade-out effect
    document.getElementById('photo-container').style.opacity = 0;
    
    setTimeout(() => {
        // Update photo content
        photoElement.src = photo.url;
        document.getElementById('photo-title').textContent = photo.title;
        document.getElementById('photo-description').textContent = photo.description;
        document.getElementById('photo-price').textContent = photo.price;
        
        // Apply fade-in effect
        document.getElementById('photo-container').style.opacity = 1;
    }, 500); // Duration should match the CSS transition duration
}

function showNextPhoto() {
    const photos = genres[currentGenre];
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    showPhoto();
}

function changeGenre() {
    const genreKeys = Object.keys(genres);
    const currentIndex = genreKeys.indexOf(currentGenre);
    const nextGenreIndex = (currentIndex + 1) % genreKeys.length;
    currentGenre = genreKeys[nextGenreIndex];
    currentPhotoIndex = 0;
    showPhoto();
}

function openPhotoLink() {
    const photos = genres[currentGenre];
    const photo = photos[currentPhotoIndex];
    window.open(photo.link, '_blank');
}

function handleSwipe(event) {
    if (event.offsetDirection === Hammer.DIRECTION_RIGHT) {
       showNextPhoto();
    } else if (event.offsetDirection === Hammer.DIRECTION_LEFT) {
        changeGenre();
    } else if (event.offsetDirection === Hammer.DIRECTION_UP) {
        openPhotoLink();
    }
}

function handleKeydown(event) {
    switch(event.key) {
        case 'ArrowLeft':
            showNextPhoto(); 
            break;
        case 'ArrowRight':
            changeGenre();
            break;
    }
}
document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowUp') {
    window.location.href = 'http://localhost:8080/items/checkout';
  }
});

document.addEventListener('DOMContentLoaded', () => {
    showPhoto();
    
    const hammer = new Hammer(photoElement);
    hammer.on('swipe', handleSwipe);

    document.addEventListener('keydown', handleKeydown);
});