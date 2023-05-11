import { motion, useCycle } from "framer-motion"

const loaderVariant = {
    animateOne: {
        x: [-30, 30],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25
            }
        }
    },
    animateOne: {
        x: [-30, 30],
        y: 0,
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5,
                ease: "easeInOut"
            },
        }
    }
}

const Loader = () => {
    const [animation, cycleAnimation] = useCycle("animateOne", "animateTwo")

    return ( 
        <>
            <motion.div 
            variants={loaderVariant}
            animate={animation}
            className="loader">
                <h3 onClick={() => cycleAnimation()}>Change Loader</h3>
            </motion.div>
        </>
     );
}
 
export default Loader;