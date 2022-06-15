let playList = [
    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    }
];

playList.sort(function(a, b) {
    return a.author.localeCompare(b.author);
});
console.log(playList);

let list = document.querySelector(".playList");
for (let i = 0; i < playList.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerText = `${playList[i].author} є виконавцем пісні ${playList[i].song}.`;
    list.appendChild(listItem);
}