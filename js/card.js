let num_cards_GLOBAL = 5;

let cards = [
    {
        background:
            "//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmoviefail.com%2Fwp-content%2Fuploads%2F2014%2F11%2Finterstellar1.jpeg&f=1&nofb=1",
        display_background:
            "//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhdqwalls.com%2Fdownload%2Finterstellar-gargantua-u4-1920x1080.jpg&f=1&nofb=1",
        title: "Interstellar",
        description:
            "Watch this incredible film made by some incredible people!"
    },
    {
        background: "https://images.alphacoders.com/586/thumb-1920-586902.jpg",
        display_background:
            "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages2.alphacoders.com%2F845%2F84502.jpg&f=1&nofb=1",
        title: "Inception",
        description:
            "Watch this incredible film made by some incredible people!"
    },
    {
        background:
            "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F41%2F1%2Fhj197K.jpg&f=1&nofb=1",
        display_background:
            "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages7.alphacoders.com%2F990%2F990610.jpg&f=1&nofb=1",
        title: "Avengers: Endgame",
        description:
            "Watch this incredible film made by some incredible people!"
    },
    {
        background:
            "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fjoker-2019-movie_66632_1920x1080.jpg&f=1&nofb=1",
        display_background:
            "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fjoker-stair-dance_68124_1920x1080.jpg&f=1&nofb=1",
        title: "Joker",
        description:
            "Watch this incredible film made by some incredible people!"
    },
    {
        background:
            "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.U2iFUz9mivZeH-h48O5wtwHaEK%26pid%3DApi&f=1",
        title: "1917",
        description:
            "Watch this incredible film made by some incredible people!"
    },
    {
        background:
            "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapershome.com%2Fimages%2Fpages%2Fpic_h%2F22685.jpg&f=1&nofb=1",
        title: "TENET",
        description:
            "Watch this incredible film made by some incredible people!"
    },
    {
        background:
            "//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.hdwallpapers.in%2Fdownload%2Fskyfall_2012_movie-1920x1080.jpg&f=1&nofb=1",
        title: "Skyfall",
        description:
            "Watch this incredible film made by some incredible people!"
    },
    {
        background:
            "//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F9%2F6%2F8%2F126147.jpg&f=1&nofb=1",
        title: "Star Wars: A New Hope",
        description:
            "Watch this incredible film made by some incredible people!"
    },
    {
        background:
            "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FrPpxrz8o0svAPCLucjsEdMXoDfX.jpg&f=1&nofb=1",
        title: "Venom",
        description:
            "Watch this incredible film made by some incredible people!"
    },
    {
        background:
            "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2F2%2F6%2F8%2F123320-lord-of-the-rings-background-1920x1080-picture.jpg&f=1&nofb=1",
        title: "Lord of the Rings",
        description:
            "Watch this incredible film made by some incredible people!"
    }
];

let cast = [
    {
        picture:
            "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.scdn.co%2Fimage%2F338040ea81df8012c152cfa65a4c1b440a94a1bc&f=1&nofb=1",
        square: 1000,
        name: "Will Smith"
    },
    {
        picture:
            "//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsiskiyou.sou.edu%2Fwp-content%2Fuploads%2F2014%2F10%2FRobin.jpg&f=1&nofb=1",
        square: 2000,
        name: "Robin Williams"
    },
    {
        picture:
            "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.byrdie.com%2Fthmb%2FaSjYcUqubm-ucpugLMuN8m-nvdU%3D%2F796x700%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fcdn.cliqueinc.com__cache__posts__237400__jennifer-lawrence-hairstyles-237400-1506716140954-main.700x0c-af3f438528ea44f0aa9c3c1fe3ef8c64.jpg&f=1&nofb=1",
        square: 700,
        name: "Jennifer Lawrence"
    }
];
const CheckCards = () => {
    let carousels = document.getElementsByClassName("card-carousel");

    for (let i = 0; i < carousels.length; i++) {
        let carousel_width = carousels[i].clientWidth;

        let btn_width =
            carousels[i].getElementsByClassName("carousel-btn")[0].clientWidth +
            carousels[i].getElementsByClassName("carousel-btn")[1].clientWidth;

        let num_cards = num_cards_GLOBAL;
        let card_margin = 2;
        let initial_width = 1920;
        let initial_height = 1080;

        let scale =
            (100 *
                ((carousel_width - btn_width) / num_cards - card_margin * 2)) /
            initial_width;

        let cards = carousels[i].getElementsByClassName("card");

        for (let i = 0; i < cards.length; i++) {
            cards[i].style.width = initial_width * (scale / 100) + "px";
            cards[i].style.height = initial_height * (scale / 100) + "px";
            cards[i].style.margin = `0px ${card_margin}px`;
            cards[i].style.minWidth = initial_width * (scale / 100) + "px";
            cards[i].style.minHeight = initial_height * (scale / 100) + "px";
        }

        if (IsMobile()) {
            carousels[i].style.height =
                1.6 * (initial_height * (scale / 100)) + "px";
        } else {
            carousels[i].style.height = "auto";
        }
    }
};