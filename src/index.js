import './reset.css';
import './style.css';
import './home.css';
import { container as containerHome } from './home';
import { container as containerMenu } from './menu';
import { container as containerAbout } from './about';
const content = document.querySelector('#content');
content.append(containerHome);

const nav = document.querySelector('nav');

const toggle = (e) => {
    const btn = e.target.getAttribute('class');
    if (btn !== null) {
        if (btn[3] === '1') {
            content.firstElementChild.remove();
            content.append(containerHome);
        } else if (btn[3] === '2') {
            content.firstElementChild.remove();
            content.append(containerMenu);
        } else if (btn[3] === '3') {
            content.firstElementChild.remove();
            content.append(containerAbout);
        }
    }
};

nav.addEventListener('click', toggle);
