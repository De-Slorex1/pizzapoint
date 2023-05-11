import { motion } from "framer-motion";

const contactVariant = {
    hidden: {
        opacity: 0,
        x: "-100vw"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            delay: 0.5,
            duration: 1,
        }
    }
}

const firstContactVariant = {
    hidden: {
        opacity: 0,
        x: "-100vw"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            delay: 1.2,
            duration: 1,
        }
    }
}

const secondContactVariant = {
    hidden: {
        opacity: 0,
        x: "-100vw"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            delay: 0.8,
            duration: 1,
        }
    }
}

const formVariant = {
    hidden: {
        opacity: 0,
        x: "100vw"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            delay: 2,
            duration: 1,
        }
    }
}


const Contact = () => {
    return ( 
        <div className="contact-container">
            <motion.div 
            className="contact-info"
            variants={contactVariant}
            initial="hidden"
            animate="visible"
            >
                <h2>Contact Info</h2>
                <p>Use the info below to contact us or get in touch with us.</p>
                <div className="info">
                    <motion.div className="info1"
                    variants={firstContactVariant}
                    initial="hidden"
                    animate="visible"
                    >
                        <h3>Lagos State, Nigeria</h3>
                        <p>36 Igando Lasu Main Road,<br />
                           Lagos State Nigeria</p>
                        <p>+234 9067643760</p>
                        <p>pizzapoint@gmail.com</p>
                    </motion.div>
                    <motion.div 
                    variants={secondContactVariant}
                    initial="hidden"
                    animate="visible"
                    className="info2"
                    >
                        <h3>Ogun State, Nigeria</h3>
                        <p>25 Fafunwa Street Obasanjo Road,<br />
                         Ogun State Nigeria</p>
                        <p>+234 8117387119</p>
                        <p>pizzapoint@gmail.com</p>
                    </motion.div>
                </div>
            </motion.div>
            <div className="contact-form">
                <motion.form 
                variants={formVariant}
                initial='hidden'
                animate='visible'>
                    <h4>SEND US A MESSAGE</h4>
                    <label>Name</label><br />
                    <input type="text" /><br />
                    <label>Email</label><br />
                    <input type="email" /><br />
                    <label>Message</label><br />
                    <textarea rows="10" cols="30"></textarea>
                    <button type="submit">SEND US MESSAGE</button>
                    </motion.form>
            </div>
        </div>
     );
}
 
export default Contact;