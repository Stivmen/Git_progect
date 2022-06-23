let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.4453676, lng: 35.0862704},
        zoom: 11,
    });

    // window.initMap = initMap;


    const local = [
        {
            position:  new google.maps.LatLng(48.368022, 35.165472),
            name: 'Мій дім',
            info: 'Panasiuk Stanislav',
            img: '<img src="my_house.jpg">',
        },

        {
            position:  new google.maps.LatLng(48.367874, 35.181961),
            name: 'CЭС Энерджи Рэй',
            info: 'моя робота',
            img: '<img src="myJob.png">',
        },

        {
            position:  new google.maps.LatLng(48.643768, 35.519142),
            name: 'оз. Соленый Лиман, Днепропетровская область, Украина',
            info: 'Це оз. Соленый Лиман в Днепропетровскій області',
            img: '<img src="liman.png">',
        }
    ];

    const infoWindow = new google.maps.InfoWindow();

    for(let i = 0; i < local.length; i++) {
        const marker = new google.maps.Marker({
            position: local[i].position,
            map: map,
        });

        const content = `<div class="img-holder">${local[i].img}</div>
        <p>${local[i].name}</p>
        <p>${local[i].info}</p>
        `;

        marker.addListener('click', () => {
            infoWindow.setContent(content);
            infoWindow.open({
                anchor:marker,
                map,

            })
        })

    }

}