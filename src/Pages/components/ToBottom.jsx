import { useEffect, useState } from "react";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { motion } from "framer-motion"
import './ToBottom.scss';

export default function ScrollToBottom(){
    const [isVisible, setIsVisible] = useState(true);

    function toggleVisibility(){
        if(window.pageYOffset > 100) {
            setIsVisible(false)
        } else {
            setIsVisible(true)
        }
    }

    function scrollToBottom(){
        window.scrollTo({
            top: 600,
            behavior: "smooth"
        })
    }

    useEffect(()=> {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    const bounceTransition = {
        y: {
          duration: 0.4,
          yoyo: Infinity,
          ease: "easeOut"
        }
      }

    return (
        <motion.div
            className={isVisible ? "Scroll-wrapper" : "hide"}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 3 }}
            onClick={scrollToBottom}>
            {/* <p>scroll</p> */}
            <motion.div
                className="scroll-icon"
                transition={bounceTransition}
                animate={{
                    y: ["30%", "-30%"],
                }}>
                <ArrowCircleDownIcon sx={{ fontSize: 40 }} color="secondary"/>
            </motion.div>
      </motion.div>
    );
}