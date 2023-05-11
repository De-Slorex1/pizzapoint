import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
}

const modaiVariant = {
    hidden: {opacity: 0, y: "-110px"},
    visible: {opacity: 1, y: "150px", transition: {
        delay: 0.6
    }}
}

const Modal = ({showModal}) => {
    return ( 
        <AnimatePresence>
            {showModal && (
                <motion.div 
                className="backdrop"
                variants={backdrop}
                initial="hidden"
                animate="visible"
                exit="hidden"
                >
                    <motion.div className="modal"
                    variants={modaiVariant}
                    initial="hidden"
                    animate="visible"
                    >
                        <p>Do you want to order more pizza?</p>
                        <Link to='/'>
                            <button>Order More</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
     );
}
 
export default Modal;