import {motion} from 'framer-motion';
import { useEffect } from 'react';

const containerVariant = {
    hidden: {
        x: "100vw",
        y: 0
    },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            delay: 2.3,
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
 
const Order = ({pizza, setShowModal}) => {
    useEffect(() => {
        setTimeout(() => {
            setShowModal(true)
        }, 5000)
    }, [setShowModal])

    return ( 
        <motion.div className="orderContainer"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <p>Thank you for ordering :)</p>
            <p>You ordered {pizza.base} with</p>
            {pizza.toppings.map((topping) => {
                return (
                    <p key={topping}>{topping}</p>
                )
            })}
        </motion.div>
     );
}
 
export default Order;