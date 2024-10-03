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

    h1Title.textContent = 'Contact us';

    title.append(wheat1);
    title.append(h1Title);
    title.append(wheat2);
    container.append(title);
}

for (let i = 1; i <= 3; ++i) {
    const infoCard = document.createElement('div');
    const card = document.createElement('div');
    const card1h = document.createElement('h1');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    infoCard.setAttribute('class', 'infoCard');
    card.setAttribute('class', 'card card3');
    card1h.setAttribute('class', 'rem2');
    p1.setAttribute('class', 'p-menu textalign');
    p2.setAttribute('class', 'p-menu textalign');
    p3.setAttribute('class', 'p-menu textalign');

    card1h.textContent = `person ${i}`;
    p1.textContent = `chef ${i}`;
    p2.textContent = '555-555-5555';
    p3.textContent = 'abc@def.com';

    card.append(card1h);
    card.append(p1);
    card.append(p2);
    card.append(p3);
    infoCard.append(card);
    container.append(infoCard);
}

export { container };
