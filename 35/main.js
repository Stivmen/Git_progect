let dataItem = [];
let filterArr = [];
const container = document.querySelector('.container');
const filterList = document.querySelector('.filter-list');
filterList.addEventListener('click', (e) => {
    const item = e.target.closest('li');
    if(item) {
        filter(item);
    }
});

container.addEventListener('click', (event) => {
    const block = event.target.closest('.product-block');

    if (block) {
        let modal = block.querySelector('.modal');
        modal.classList.toggle('active');
        let attribute = block.getAttribute('data-id');
        console.log(block.dataset.id);
        fetchFunc(attribute, modal);
    }
});

function fetchFunc (id, modal) {
    let check = false;
    fetch(`https://dummyjson.com/products`).then(response => {
        return response.json();
    }).then(data => {
        if(!check) {
            modal.innerHTML = '';
        };
        data.products.forEach(item => {
            if (id == item.id) {
                const structure = `
                    <div class="product-block-modal" data-id="${item.id}">
                        <div class="img-holder-modal">
                            <img src="${item.images[1]}" alt="">
                        </div>
                        <div class="info-modal">
                            <h3>${item.brand}</h3>
                            <strong>${item.price} $</strong>
                            <p class="description-modal">${item.description}</p>
                        </div>
                    </div>
                    `;
                modal.insertAdjacentHTML('beforeend', structure);
            };
        });
    });
};

load();

function load() {
    fetch(`https://dummyjson.com/products`).then(response => {
        return response.json();
    }).then(data => {
        dataItem = data.products;

        dataItem.map((item) => {
            filterArr.push(item.category);

            const product = `
                <div class="product-block" data-id="${item.id}">
                    <div class="child">
                        <div class="img-holder">
                            <img src="${item.images[0]}" alt="">
                        </div>
                        <div class="info">
                            <span class="category">${item.category}</span>
                            <h3>${item.brand}</h3>
                            <strong>${item.price} $</strong>
                        </div>
                    </div>
                    <div class="modal active">

                    </div>

                </div>
                
            `;
            container.insertAdjacentHTML('beforeend', product);
        });
        let list = [];

        const tempArray = filterArr.sort();

        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i + 1] !== tempArray[i]) {
                list.push(tempArray[i]);
            }
        }

        list.map((list) => {
            const listItem = `<li>${list}</li>`;
            filterList.insertAdjacentHTML('beforeend', listItem);
        });
    }).catch((error) => console.log(error));
}

function filter(item) {
    const cat = item.textContent;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

    if (cat != 'all') {
        dataItem.map((item) => {
            console.log(item);
            if (item.category == cat) {
                const product = `
                <div class="product-block" data-id="${item.id}">
                    <div class="child">
                        <div class="img-holder">
                            <img src="${item.images[0]}" alt="">
                        </div>
                        <div class="info">
                            <span class="category">${item.category}</span>
                            <h3>${item.brand}</h3>
                            <strong>${item.price} $</strong>
                        </div>
                    </div>
                    <div class="modal active">

                    </div>

                </div>
                
            `;
                container.insertAdjacentHTML('beforeend', product);
            }
        });
    } else {
        dataItem.map((item) => {
            filterArr.push(item.category);

            const product = `
                <div class="product-block" data-id="${item.id}">
                    <div class="child">
                        <div class="img-holder">
                            <img src="${item.images[0]}" alt="">
                        </div>
                        <div class="info">
                            <span class="category">${item.category}</span>
                            <h3>${item.brand}</h3>
                            <strong>${item.price}</strong>
                        </div>
                    </div>
                    <div class="modal active">

                    </div>

                </div>
                
            `;
            container.insertAdjacentHTML('beforeend', product);
        });
    }
}
