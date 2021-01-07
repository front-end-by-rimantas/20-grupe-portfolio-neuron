import { Menu } from './Menu.js';

const headerHTML = `<header class="main-back">
            <div class="container">
                <div class="row">
                    <div class="main-header">
                        <div class="left-topInfo">
                            <div class="contacts">
                                <i class="fa fa-envelope-o"></i>
                                <a href="mailto:awesomeness@20grupe.com">info@awesomeneuron.com</a>
                            </div>
                            <div class="contacts">
                                <i class="fa fa-phone"></i>
                                <a href="tel:+123456789">(+123) 456789</a>
                            </div>
                        </div>
                        <div class="right-topInfo">
                            <div class="topInfo-socials">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-google-plus"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="header-nav col-xs-12">
                        <div class="left-header">
                            <div class="header-logo">
                                <a href="index.html"><img id="logo-white" src="./images/header/logo-white.png" alt="logo"></a>
                            </div>
                        </div>
                        <div class="right-header">
                            <div class="fa fa-bars"></div>
                            <nav class="nav-menu mobile-btn"></nav>
                        </div>
                        <div class="nav-menu-icons mobile-btn">
                            <a href="#"><i class="fa fa-shopping-bag"></i></a>
                            <a href="#"><i class="fa fa-search"></i></a>
                        </div>
                    </div>
                </div>
            </div>    
        </header>`;

describe('Is valid selector', () => {
    test('is invalid if number is given', () => {
        const menu = new Menu ({
            selector: 845
        })
        expect(menu.isValidSelector()).toBeFalsy();
    })
    test('is invalid if array is given', () => {
        const menu = new Menu ({
            selector: []
        })
        expect(menu.isValidSelector()).toBeFalsy();
    })
    test('is invalid if object is given', () => {
        const menu = new Menu ({
            selector: {}
        })
        expect(menu.isValidSelector()).toBeFalsy();
    })
    test('is invalid if boolean is given', () => {
        const menu = new Menu ({
            selector: false
        })
        expect(menu.isValidSelector()).toBeFalsy();
    })
    test('is invalid if empty string is given', () => {
        const menu = new Menu ({
            selector: ''
        })
        expect(menu.isValidSelector()).toBeFalsy();
    })
    test('can find element by given selector', () => {
        document.body.innerHTML = '<header><div>No navigation</div></header>';
        const menu = new Menu({
            selector: 'header nav'
        });
        expect(menu.isValidSelector()).toBeFalsy();
    })
    test('can find element by given selector', () => {
        document.body.innerHTML = '<header><nav></nav></header>';
        const menu = new Menu({
            selector: 'header nav'
        });
        expect(menu.isValidSelector()).toBeTruthy();
    })
    test('can find element by given selector', () => {
        document.body.innerHTML = headerHTML;
        const menu = new Menu({
            selector: 'header nav'
        });
        expect(menu.isValidSelector()).toBeTruthy();
    })
})

describe('generates valid HTML', () => {
    test('is invalid link object', () => {
        const menu = new Menu ({
            selector:'',
            structure:[]
        });
        expect(menu.generateHTML(123)).toBe('');
        expect(menu.generateHTML(true)).toBe('');
    })
    test('is invalid home link', () => {
        const menu = new Menu ({
            selector:'',
            structure:[]
        });
        expect(menu.generateHTML({title: 'Home', href: 123})).toBe('');
        expect(menu.generateHTML({title: 123, href: '/'})).toBe('');
        expect(menu.generateHTML({title: 'Home'})).toBe('');
        expect(menu.generateHTML({href: '/'})).toBe('');
        expect(menu.generateHTML({title: 'Home', href: ''})).toBe('');
        expect(menu.generateHTML({title: '', href: '/'})).toBe('');
    })
    test('is valid home link', () => {
        const menu = new Menu ({
            selector:'',
            structure:[]
        });
        expect(menu.generateHTML({title: 'Home', href: '/'})).toBe('<a href="/" class="active">Home</a>');
    })
    test('is valid inner page link', () => {
        const menu = new Menu ({
            selector:'',
            structure:[]
        });
        expect(menu.generateHTML({title: 'About', href: '/about'})).toBe('<a href="/about" class="">About</a>');
    })
})

describe('Generates menu HTML', () => {
    test('nav is empty', () => {
        const menu = new Menu({
            selector: 'header nav',
            structure: []
        });
        menu.init();
        const linkCount = document.querySelectorAll(menu.selector + ' a').length;

        expect(linkCount).toBe(0);
    })
})