import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

const homeVariants = {
    hidden: {
        x: "100vw",
        y: 0
    },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            delay: 0.7,
            duration: 0.5
        }
    },
    exit: {
        opacity: 0.5,
        x: "-100vw",
        transition: {
            delay: 0.2,
            duration: 1
        }
    }
}

const buttonVariants = {
    hover: {
        scale: [1,1.1,1,1.1,1,1.1,1,1.1,1,1.1,1,1.1,1,1.1,1,1.1,1,1.1,1,1.1,1],
        boxShadow: "2px 2px 3px rgb(0, 0, 150)",
        textShadow: "2px 2px 3px rgb(0, 0, 150)",
        transition: {
            duration: 3,
        }
    }
}
const Home = () => {
    return ( 
        <motion.div className="home-container" 
        variants={homeVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <h2>Welcome to Pizza Point</h2>
            <Link to='/base'>
                <motion.button className="btn" 
                variants={buttonVariants}
                whileHover="hover"
                >
                    Create Your Pizza
                </motion.button>
            </Link>
        </motion.div>
    );
}
 
export default Home;