import { motion } from "framer-motion";
import { useFormik } from 'formik';
import * as Yup from 'yup'

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
    const validationSchema = Yup.object({
        name: Yup.string().required("Guy, you never input your name"),
        email: Yup.string().email("You don forget to add @ to your email").required("Guy, you never input your email")
    })
    const formik = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        validationSchema,
        onSubmit: () => {
            alert("we don receive your complain.... we go work on am asap!!!")
        }
    })
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
                        <p>
                            <i>
                                36 Igando Lasu Main Road,<br />
                                Lagos State Nigeria
                            </i>
                        </p>
                        <p>
                            <i className="fa fa-phone">
                                +234 9067643760
                            </i>
                        </p>
                        <p>
                            <i className="fa fa-envelope">
                                pizzapoint@gmail.com
                            </i>
                        </p>
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
                        <p>
                            <i className="fa fa-phone">
                                +234 8117387119
                            </i>
                        </p>
                        <p>
                            <i className="fa fa-envelope">
                                pizzapoint@gmail.com
                            </i>
                        </p>
                    </motion.div>
                </div>
            </motion.div>
            <div className="contact-form">
                <motion.form onSubmit={formik.handleSubmit}
                variants={formVariant}
                initial='hidden'
                animate='visible'>
                    <h4>SEND US A MESSAGE</h4>
                    <div>
                        {formik.touched.name && formik.errors.name ? (<div className="error">{formik.errors.name}</div>) : null}
                        <label htmlFor="name">Name</label><br />
                        <input type="text" id="name" name="name" {...formik.getFieldProps("name")}/><br />
                    </div>
                    <div>
                        {formik.touched.email && formik.errors.email ? (<div className="error">{formik.errors.email}</div>) : null}
                        <label htmlFor="email">Email</label><br />
                        <input type="email" id="email" name="email" {...formik.getFieldProps("email")}/><br />
                    </div>
                    <label>Message</label><br />
                    <textarea rows="10" cols="30"></textarea>
                    <button type="submit">SEND US MESSAGE</button>
                    </motion.form>
            </div>
        </div>
     );
}
 
export default Contact;