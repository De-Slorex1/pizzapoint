import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

const Home = () => {
    return ( 
        <motion.div className="home-container" 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{type: 'tween', delay: 0.2, duration: 2}}
        >
            <h2>Welcome to Pizza Point</h2>
            <Link to='/base'>
                <motion.button className="btn" 
                whileHover={{
                    scale: 1.1,
                    boxShadow: "2px 2px 3px rgb(0, 0, 150)",
                    textShadow: "2px 2px 3px rgb(0, 0, 150)"
                }}
                >
                    Create Your Pizza
                </motion.button>
            </Link>
        </motion.div>
    );
}
 
export default Home;