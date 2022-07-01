let build = document.getElementById('main');
let buildings = [
    {
        image: 'src/img/galery1.jpg',
    },
    {
        image: 'src/img/galery2.jpg',
    },
    {
        image: 'src/img/galery3.jpg',
    },
    {
        image: 'src/img/galery4.jpg',
    },
    {
        image: 'src/img/galery5.jpg',
    },
];

for (let i = 0; i < buildings.length; i++ ) {
    const block = `
        <a href="${buildings[i].image}" data-fancybox="gallery startIndex=2">
            <img class="zoom" src="src/img/zoom.svg" alt="zoom">
        </a>
    `;
    build.insertAdjacentHTML("beforeend", block);
};