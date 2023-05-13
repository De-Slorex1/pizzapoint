import Logo from '../assets/logo 3.png';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const navbarVariant = {
    hidden: {
        y: -250, opacity: 0
    },
    visible: {
        y: 0, opacity: 1,
        transition: {
            type: 'spring', stiffness: 100, delay: 0.5, duration: 0.3, when: 'beforeChildren'
        }
    }
}

const linkVariant = {
    hover: {
        borderBottom: '2px solid black',
        paddingBottom: 5,
    }
}

const imgVariant = {
    hidden: {rotate: -200, opacity: 0},
    visible: {rotate: 0, opacity: 1, ease: "easeOut", transition: {delay: 0, duration: 1}}
}

const Header = ({toggle, handleToggle}) => {
    return ( 
        <motion.div className='container'
        variants={navbarVariant}
        initial="hidden"
        animate="visible"
        >
            <div className='logo-title'>
                <div className='logo'>
                    <motion.img variants={imgVariant} src={Logo} className='img-size' alt="logo" />
                </div>
                <Link style={{textDecoration: "none"}} to='/'>
                    <h2>Pizzapoint</h2>
                </Link>
                <div className="cart-toggle">
                    <h1 onClick={handleToggle} className="toggle"><i className="fa fa-bars"></i></h1>
                </div>
            </div>
            <div className={toggle ? "title collapse" : "title" }>
                <div className='links'>
                    <ul>
                        <Link style={{textDecoration: "none"}} to='/'>
                           <motion.li variants={linkVariant} whileHover="hover">Home</motion.li>
                        </Link>
                        <Link style={{textDecoration: "none"}} to='/about'>
                            <motion.li variants={linkVariant} whileHover="hover">About</motion.li>
                        </Link>
                        <Link style={{textDecoration: "none"}} to='/contact'>
                           <motion.li variants={linkVariant} whileHover="hover">Contact</motion.li>
                        </Link>
                    </ul>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Header;