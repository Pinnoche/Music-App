import Menu from './Menu';
import './Header.css';
import HeaderContent from './HeaderContent';
// import BackLogo from './musicapp resources/landinpage background.jpg'

function Header(props) {

    

    return (
        <div className='Header'>
            <Menu />
            <HeaderContent />
        </div>
    );
}

export default Header;
