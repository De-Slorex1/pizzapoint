import React from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

const toppingContainer = {
    hidden: {
        x: "100vw",
        y: 0
    },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            delay: 1.9,
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

const Toppings = ({addTopping, pizza}) => {
    const tops = ['Mushrooms', 'Peppers', 'Onions', 'Olives', 'Extra Cheese', 'Tomatoes'];

    return (
        <motion.div className="toppingContainer"
        variants={toppingContainer}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
        <h2>Select Toppings</h2>
             <ul>
                {tops.map((top) => {
                    let spanClass = pizza.toppings.includes(top)? "active" : ""
                    return (
                        <motion.li key={top} onClick={() => {addTopping(top)}}
                        whileHover={{
                            scale: 1.4,
                            color: "blue"
                        }}
                        >
                            <span className={spanClass}>{top}</span>
                        </motion.li>
                    )
                })}.
             </ul>
                <motion.div 
                initial={{opacity: 0, x: "-100vw"}}
                animate={{opacity: 1, x: 0}}
                transition={{type:'tween', delay: 0.2, duration: 0.5}}
                >
                    <Link to='/order'>
                        <motion.button className="btn"
                        whileHover={{
                            scale: [1,1.1,1,1.1,1,1.1,1,1.1,1,1.1,1,1.1,1,1.1,1,1.1,1,1.1,1],
                            textShadow: "2px 2px 3px rgb(0, 0, 150)",
                            boxShadow: "2px 2px 3px rgb(0, 0, 150)",
                        }}
                        transition={{duration: 3.5}}
                        >
                            Next
                        </motion.button>
                    </Link>
                </motion.div>
        </motion.div>
     );
}
 
export default Toppings;