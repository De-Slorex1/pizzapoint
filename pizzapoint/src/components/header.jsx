import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const Header = () => {
    return ( 
        <motion.div className='container'
        initial={{y: -250}}
        animate={{y: 10}}
        transition={{type: 'spring', stiffness: 100, delay: 0.5, duration: 2}}
        >
            <div className='logo'>
                <img src={Logo} width='80px' height='80px' alt="logo" />
            </div>
            <div className='title'>
                <Link style={{textDecoration: "none"}} to='/'>
                    <h2>Pizzapoint</h2>
                </Link>
                <div className='links'>
                    <ul>
                        <Link style={{textDecoration: "none"}} to='/'>
                           <li>Home</li>
                        </Link>
                        <Link style={{textDecoration: "none"}} to='/about'>
                            <li>About</li>
                        </Link>
                        <Link style={{textDecoration: "none"}} to='/contact'>
                           <li>Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Header;