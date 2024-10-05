const container = document.createElement('div');

// TITLE

const title = document.createElement('div');
const wheat1 = document.createElement('img');
const wheat2 = document.createElement('img');
const h1Title = document.createElement('h1');

container.setAttribute('class', 'container');
title.setAttribute('class', 'title');
wheat1.setAttribute('class', 'wheat1');
h1Title.setAttribute('class', 'h1Title');
wheat2.setAttribute('class', 'wheat2');

h1Title.textContent = 'Restaurant name lol';

title.append(wheat1);
title.append(h1Title);
title.append(wheat2);
container.append(title);

// INFO LOGO

const infoLogoAbout = document.createElement('div');
const infoAboutSVG = document.createElement('div');
const infoAboutIMG = document.createElement('img');

infoLogoAbout.setAttribute('class', 'infoLogoAbout');
infoAboutSVG.setAttribute('class', 'infoAboutSVG');

infoAboutSVG.append(infoAboutIMG);
infoLogoAbout.append(infoAboutSVG);
container.append(infoLogoAbout);

// CARD 1

const infoCard1 = document.createElement('div');
const card1 = document.createElement('div');
const card1p = document.createElement('p');
const card1h = document.createElement('h1');

infoCard1.setAttribute('class', 'infoCard');
card1.setAttribute('class', 'card');
card1p.setAttribute('class', 'card1p');
card1h.setAttribute('class', 'card1h');

card1p.textContent =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad voluptas voluptatibus sed id ab. Recusandae quis voluptatum ullam doloribus, maiores dolores earum rerum harum accusantium praesentium debitis quidem eum quaerat.';
card1h.textContent = 'name';

card1.append(card1p);
card1.append(card1h);
infoCard1.append(card1);
container.append(infoCard1);

// CLOCK LOGO

const infoLogoClock = document.createElement('div');
const infoClockSVG = document.createElement('div');
const infoClockIMG = document.createElement('img');

infoLogoClock.setAttribute('class', 'infoLogoClock');
infoClockSVG.setAttribute('class', 'infoClockSVG');

infoClockSVG.append(infoClockIMG);
infoLogoClock.append(infoClockSVG);
container.append(infoLogoClock);

// CARD 2

const infoCard2 = document.createElement('div');
const card2 = document.createElement('div');
const card2h = document.createElement('h1');
const card2pMo = document.createElement('p');
const card2pTu = document.createElement('p');
const card2pWe = document.createElement('p');
const card2pTh = document.createElement('p');
const card2pFr = document.createElement('p');
const card2pSa = document.createElement('p');
const card2pSu = document.createElement('p');

infoCard2.setAttribute('class', 'infoCard');
card2.setAttribute('class', 'card');
card2h.setAttribute('class', 'card2h');
card2pMo.setAttribute('class', 'card2p');
card2pTu.setAttribute('class', 'card2p');
card2pWe.setAttribute('class', 'card2p');
card2pTh.setAttribute('class', 'card2p');
card2pFr.setAttribute('class', 'card2p');
card2pSa.setAttribute('class', 'card2p');
card2pSu.setAttribute('class', 'card2p');

card2h.textContent = 'hours';

card2pMo.textContent = 'Sunday: 8am - 8pm';
card2pTu.textContent = 'Monday: 6am - 6pm';
card2pWe.textContent = 'Tuesday: 6am - 6pm';
card2pTh.textContent = 'Wednesday: 6am - 6pm';
card2pFr.textContent = 'Thursday: 6am - 10pm';
card2pSa.textContent = 'Friday: 6am - 10pm';
card2pSu.textContent = 'Saturday: 8am - 10pm';

card2.append(card2h);
card2.append(card2pMo);
card2.append(card2pTu);
card2.append(card2pWe);
card2.append(card2pTh);
card2.append(card2pFr);
card2.append(card2pSa);
card2.append(card2pSu);
infoCard2.append(card2);
container.append(infoCard2);

// MAP LOGO

const infoLogoMap = document.createElement('div');
const infoMapSVG = document.createElement('div');
const infoMapIMG = document.createElement('img');

infoLogoMap.setAttribute('class', 'infoLogoMap');
infoMapSVG.setAttribute('class', 'infoMapSVG');

infoMapSVG.append(infoMapIMG);
infoLogoMap.append(infoMapSVG);
container.append(infoLogoMap);

// CARD 3

const infoCard3 = document.createElement('div');
const card3 = document.createElement('div');
const card3p = document.createElement('p');
const card3h = document.createElement('h1');

infoCard3.setAttribute('class', 'infoCard');
card3.setAttribute('class', 'card');
card3p.setAttribute('class', 'card3p');
card3h.setAttribute('class', 'card3h');

card3h.textContent = 'location';
card3p.textContent = '123 Forest Drive, Forestville, Maine';

card3.append(card3h);
card3.append(card3p);
infoCard3.append(card3);
container.append(infoCard3);

export { container };
