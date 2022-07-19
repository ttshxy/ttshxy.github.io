import logo from '../imgs/logo.png';
import styles from './index.less';
let root = document.getElementById('root');
let img = new Image();
img.src = logo;
img.classList.add(styles.logo);
root.append(img);
