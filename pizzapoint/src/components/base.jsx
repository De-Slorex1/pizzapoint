import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

const baseVariant = {
    hover: {
        scale: 1.2,
        color: "blue",
    }
}

const baseContainer = {
    hidden: {
        x: "100vw",
        y: 0
    },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            delay: 1.2,
            duration: 0.5
        }
    },
    exit: {
        opacity: 0.5,
        x: "-100vw",
        transition: {
            delay: 0.2,
            duration: 0.5
        }
    }
}

const Base = ({addBase, pizza}) => {
    const bases = ["Classic Pizza", "Thiny Pizza","Cripsy Pizza", "Thick Crust Pizza"]

    return ( 
        <motion.div className="baseContainer"
        variants={baseContainer}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
                <h3>Choose your base</h3>
                <ul>
                    {bases.map((base) => {
                        return (
                            <motion.li 
                            variants={baseVariant} 
                            whileHover="hover" 
                            key={base} 
                            onClick={() => addBase(base)}
                            >
                                <span className="">{base}</span>
                           </motion.li>
                        )
                    })}
                </ul>

            {pizza.base && (
                <div>
                    <Link to='/toppings'>
                        <motion.button className="btn"
                            whileHover={{
                                scale: [1,1.1,1,1.1,1,1.1,1,1.1,1,1.1,1,1.1,1,1.1,1,1.1,1,1.1,1,1.1,1],
                                textShadow: "2px 2px 3px rgb(0, 0, 200)",
                                boxShadow: "2px 2px 3px rgb(0, 0, 200)",
                                transition: {
                                    duration: 3,
                                }
                            }}
                        >
                            Next
                        </motion.button>
                    </Link>
                </div>
            ) }

            
        </motion.div>
     );
}
 
export default Base;