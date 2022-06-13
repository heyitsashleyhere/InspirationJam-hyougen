import { useEffect, useState } from "react";
import { Button, IconButton } from '@mui/material'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import './ToTop.scss'



export default function ScrollToTop(){
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibility(){
        if(window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(()=> {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <div className="Scroll">
            <IconButton aria-label="delete" onClick={scrollToTop} className={isVisible ? "show" : "hide"} size="large">
                <ArrowCircleUpIcon sx={{ fontSize: 40 }} />
            </IconButton>
        </div>
    )
}