import Nav from '../Nav';
import Logo from '../Logo';
import logoKevin from '../../Assets/Images/Logo/kevin/KL.png';

function Header() {
  return (
    <header className='header' id='accueil'>
      <Logo className='header_logo' src={logoKevin}/>
      <Nav />
    </header>
  );
}

export default Header;
