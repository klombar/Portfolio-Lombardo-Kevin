import Nav from '../../Nav';
import Logo from '../../Logo';
import logoKevin from '../../../assets/Images/Logo/kevin/KL.png';

function Header() {
  return (
    <header className='header' id='accueil'>
      <Logo className='header_logo' src={logoKevin} alt='Logo kevin Lombardo'/>
      <Nav />
    </header>
  );
}

export default Header;