const container = document.createElement('div');
container.setAttribute('class', 'container container-menu');

// TITLE

for (let i = 1; i <= 1; ++i) {
    const title = document.createElement('div');
    const wheat1 = document.createElement('img');
    const wheat2 = document.createElement('img');
    const h1Title = document.createElement('h1');

    title.setAttribute('class', 'title');
    wheat1.setAttribute('class', 'wheat1');
    h1Title.setAttribute('class', 'h1Title');
    wheat2.setAttribute('class', 'wheat2');

    h1Title.textContent = 'Menu';

    title.append(wheat1);
    title.append(h1Title);
    title.append(wheat2);
    container.append(title);
}

// Title 1

for (let i = 1; i <= 1; ++i) {
    const infoCard = document.createElement('div');
    const card = document.createElement('div');
    const card1h = document.createElement('h1');

    infoCard.setAttribute('class', 'infoCard');
    card.setAttribute('class', 'card');
    card1h.setAttribute('class', 'card1h');

    card1h.textContent = 'Beverages';

    card.append(card1h);
    infoCard.append(card);
    container.append(infoCard);
}

// Content

for (let i = 1; i <= 2; ++i) {
    const infoCard = document.createElement('div');
    const card = document.createElement('div');
    const card1h = document.createElement('h1');
    const pmenu = document.createElement('p');
    const price = document.createElement('h1');
    const image = document.createElement('img');

    infoCard.setAttribute('class', 'infoCard');
    card.setAttribute('class', 'card');
    card1h.setAttribute('class', 'rem2');
    pmenu.setAttribute('class', 'p-menu');
    price.setAttribute('class', 'rem2');
    image.setAttribute('class', 'image-menu');

    card1h.textContent = 'name';
    pmenu.textContent =
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quo dolorum iste nostrum expedita sed iure doloribus facere odit obcaecati.';
    price.textContent = 'x $';

    card.append(card1h);
    card.append(pmenu);
    card.append(price);
    card.append(image);
    infoCard.append(card);
    container.append(infoCard);
}

// Title 2

for (let i = 1; i <= 1; ++i) {
    const infoCard = document.createElement('div');
    const card = document.createElement('div');
    const card1h = document.createElement('h1');

    infoCard.setAttribute('class', 'infoCard');
    card.setAttribute('class', 'card');
    card1h.setAttribute('class', 'card1h');

    card1h.textContent = 'Sides';

    card.append(card1h);
    infoCard.append(card);
    container.append(infoCard);
}

// Content

for (let i = 1; i <= 4; ++i) {
    const infoCard = document.createElement('div');
    const card = document.createElement('div');
    const card1h = document.createElement('h1');
    const pmenu = document.createElement('p');
    const price = document.createElement('h1');
    const image = document.createElement('img');

    infoCard.setAttribute('class', 'infoCard');
    card.setAttribute('class', 'card');
    card1h.setAttribute('class', 'rem2');
    pmenu.setAttribute('class', 'p-menu');
    price.setAttribute('class', 'rem2');
    image.setAttribute('class', 'image-menu');

    card1h.textContent = 'name';
    pmenu.textContent =
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quo dolorum iste nostrum expedita sed iure doloribus facere odit obcaecati.';
    price.textContent = 'x $';

    card.append(card1h);
    card.append(pmenu);
    card.append(price);
    card.append(image);
    infoCard.append(card);
    container.append(infoCard);
}

export { container };
