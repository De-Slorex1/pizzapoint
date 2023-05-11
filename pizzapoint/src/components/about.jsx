import Image1 from '../assets/pizza2.png'
import {motion} from 'framer-motion'

const aboutVariant = {
    hidden: {
        opacity: 0,
        x: '-100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            duration: 1,
            delay: 0.5
        }
    }
}

const childVariant = {
    hidden: {
        opacity: 0,
        x: '100vw',
        rotate: '400'
    },
    visible: {
        opacity: 1,
        x: 0,
        rotate: 20,
        transition: {
            type: 'tween',
            duration: 2,
            delay: 1.5,
        }
    }
}

const About = () => {
    return ( 
        <div className="about-container">
            <motion.div 
            variants={aboutVariant}
            initial="hidden"
            animate="visible"
            >
                <h1>About Us</h1>
                <p>
                    Pizzapoint prepared pizza is a dish of Italian origin, made with an oven-baked,<br/>
                    flat, generally round bread that is often covered with tomatoes or a tomato-based <br />
                    sauce and mozzarella cheese. Other toppings are added according to region, culture<br />
                    or personal preference. Originating as a part of Italian cuisine, the dish has<br />
                    become popular in many different parts of the world, particularly the United<br /> 
                    States, where numerous varieties have been developed, pizza restaurant chains<br /> 
                    have flourished, and pizza has become a home delivery item as well as being<br /> 
                    available as a frozen food ready to bake at home.<br />
                    Today, pizza is a symbol of several cultures: Italians, particularly from Naples,<br />
                    are proud of authentic pizza made with local ingredients and following strict<br /> 
                    guidelines for preparation. In the United States, pizza has iconic status as a<br /> 
                    typical American food, quickly prepared and readily available, and enjoyed by<br /> 
                    people of all ages at social occasions as well as family meals. The different styles,<br /> 
                    from places such as New York City and Chicago, reflect the diversity of American culture.<br /> 
                    Countries throughout the world have adopted pizza as a favorite food, adding their own<br /> 
                    variations to make this dish their own.
                </p>
            </motion.div>
            <motion.div 
            className='pizza-bg'
            variants={childVariant}
            initial="hidden"
            animate="visible"
            >
                <img src={Image1} width="250px" height='230px' alt="pizza" />
            </motion.div>
        </div>
     );
}
 
export default About;