import bambi from './bambi.png';
import everything from './everything.jpeg';
import everything2 from './everything.jpg';
import waybackhome from './wbh.jpeg'
import logo from './logo.png';
import search_icon from './search_icon.png';
import cart from './cart.png';
import menu_icon from './menu_icon.png';
import dropdown_icon from './dropdown_icon.png';

export const assets = {
    logo,
    bambi,
    everything,
    everything2,
    waybackhome,
    search_icon,
    cart,
    menu_icon,
    dropdown_icon

}

export const products = [
    {
        id: 1,
        name: "Bambi",
        description: "Tabs for Bambi - Baekhyun",
        price: 2,
        image: bambi
    },
    {
        id: 2,
        name: "Way Back Home", 
        description: "Tabs for Way Back Home - SHAUN",
        price: 2,
        image: waybackhome
    },
    {
        id: 3,
        name: "Everything",
        description: "Tabs for Everything - The Black Skirts",
        price: 2,
        image: everything
    }
]