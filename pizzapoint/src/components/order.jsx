import {animate, motion} from 'framer-motion'

const containerVariant = {
    hidden: {
        x: -400, 
        opacity: 0
    },
    visible: {
        x: 0, 
        opacity: 1,
        transition: {
            type: 'spring', 
            stiffness: 100, 
            delay: 0.5, 
            duration: 52
        }
    }
}

const Order = ({pizza}) => {
    return ( 
        <motion.div className="orderContainer"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        >
            <p>Thank you for ordering :)</p>
            <p>Thank you for ordering {pizza.base} with:</p>
            {pizza.toppings.map((topping) => {
                return (
                    <p key={topping}>{topping}</p>
                )
            })}
        </motion.div>
     );
}
 
export default Order;