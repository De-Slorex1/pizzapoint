import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

const Base = ({addBase, pizza}) => {
    const bases = ["Classic", "Thiny & Cripsy", "Thick Crust"]
    return ( 
        <motion.div className="baseContainer"
        initial={{opacity: 0, x: 350}}
        animate={{opacity: 1, x: 0}}
        tansition={{type: 'spring', stiffness: 300, delay: 0.2, duration: 2}}      
        >
                <h3>Choose your base</h3>
                <ul>
                    {bases.map((base) => {
                        return (
                            <motion.li key={base} onClick={() => addBase(base)}
                            whileHover={{
                                scale: 1.3,
                                color: "blue"
                            }}
                            >
                                <span className="">{base}</span>
                           </motion.li>
                        )
                    })}
                </ul>

            {pizza.base && (
                <motion.div
                    initial={{x: "-100vw", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{type: 'tween', delay: 0.2, durarion: 1.5}}
                >
                    <Link to='/toppings'>
                        <motion.button className="btn"
                        whileHover={{
                            scale: 1.1,
                            textShadow: "2px 2px 3px rgb(0, 0, 200)",
                            boxShadow: "2px 2px 3px rgb(0, 0, 200)"
                        }}
                        >
                            Next
                        </motion.button>
                    </Link>
                </motion.div>
            ) }

            
        </motion.div>
     );
}
 
export default Base;