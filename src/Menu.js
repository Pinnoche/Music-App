import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from './musicapp resources/musicapp logo.png'
import './Menu.css';


export const Exploreview = () => {
        let menubar = document.querySelector(".menuitem_cont");
        menubar.style.display = "none"
        let exploreview = document.querySelector('.main_explore');
        exploreview.scrollIntoView({
            behavior:'smooth'
        })

    }
export const Priceview = () => {
        let menubar = document.querySelector(".menuitem_cont");
        menubar.style.display = "none"
        let priceview = document.querySelector('.Price');
        priceview.scrollIntoView({
            behavior:'smooth'
        })

    }

export const Reviewview = () => {
        let menubar = document.querySelector(".menuitem_cont");
            menubar.style.display = "none"
        let reviewview = document.querySelector('.Review');
        reviewview.scrollIntoView({
            behavior:'smooth'
        })

    }


function Menu(props) {
    window.onscroll = () => {
        let container = document.querySelector(".logo_container");
        let logo = document.querySelector(":root");
              let backtotop = document.querySelector(".backtotop");
        

        if (document.body.scrollTop >= 500 || document.documentElement.scrollTop >= 500 || window.scrollY >= 500) {
            backtotop.style.display = "block"; 
        } else {
            backtotop.style.display = "none";
            }

        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 || window.scrollY >= 50) {
            container.style.background = "#F5F7FF"; 
            if (window.scrollY >= 50) {
                logo.style.setProperty('--percphone', '18%');
                logo.style.setProperty('--perctab', '8%');
                logo.style.setProperty('--percdesk', '6%');
            }
            }     
        else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50 || window.scrollY < 50) {
            container.style.background = "none"
            if (window.scrollY <= 5) {
                logo.style.setProperty('--percphone', '22%');
                logo.style.setProperty('--perctab', '13%');
                logo.style.setProperty('--percdesk', '10%');
            }
            else if (window.scrollY <= 10) {
                logo.style.setProperty('--percphone', '21%');
                logo.style.setProperty('--perctab', '12%');
                logo.style.setProperty('--percdesk', '9%');
            }
            else if (window.scrollY <= 20) {
                logo.style.setProperty('--percphone', '20%');
                logo.style.setProperty('--perctab', '11%');
                logo.style.setProperty('--percdesk', '8%');
            }
            else if (window.scrollY <= 30) {
                logo.style.setProperty('--percphone', '19%');
                logo.style.setProperty('--perctab', '10%');
                logo.style.setProperty('--percdesk', '7.5%');
            }
            else if (window.scrollY <= 40) {
                logo.style.setProperty('--percphone', '19.2%');
                logo.style.setProperty('--perctab', '9%');
                logo.style.setProperty('--percdesk', '7%');
            }
            }
     }
        
     const dropmenu = () => {
        let menubar = document.querySelector(".menuitem_cont");
        if (menubar.style.display === "block") {
            menubar.style.display = "none"
        } else {
           menubar.style.display = "block" 
        }

    }
    

    return (
        <div>
            <div className="logo_container">
                <img className='logo' src={Logo} alt="" />
                <MenuIcon onClick={dropmenu} className='icon' />
                 <div className="menuitem_contpc">
                    <p className="menuitem" onClick={Exploreview}>Explore</p>
                    <p className="menuitem" onClick={Priceview}>Pricing</p>
                    <p className="menuitem" onClick={Reviewview}>Review</p>
                </div>
            </div>
            <div className="menuitem_cont">
                    <CloseIcon onClick={dropmenu} className='close_icon' />
                    <p className="menuitem" onClick={Exploreview}>Explore</p>
                    <p className="menuitem" onClick={Priceview}>Pricing</p>
                    <p className="menuitem" onClick={Reviewview}>Review</p>
            </div>
        </div>
    );
}

export default Menu;