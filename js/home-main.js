// ALL IMPORT

/* header */
import { Menu } from './components/menu/Menu.js';
import { menuData } from './data/menuData.js';
import { stickyMenu } from './components/menu/stickyMenu.js';
/* hero */
/* creativity */
/* intelligence */
/* achievements */
import { Achievements } from './components/achievements/Achievements.js';
import { achievementsData } from './data/achievementsData.js';
/* services */
/* projects */
/* updates */
/* clients */
/* works */
/* blog */
/* contact*/
/* footer */

// CODE EXECUTION

/* header */
const menu = new Menu(menuData);
menu.init();
stickyMenu();
/* hero */
/* creativity */
/* intelligence */
/* achievements */
const achievements = new Achievements(achievementsData);
achievements.init();
achievements.addEvents();
/* services */
/* projects */
/* updates */
/* clients */
/* works */
/* blog */
/* contact*/
/* footer */
