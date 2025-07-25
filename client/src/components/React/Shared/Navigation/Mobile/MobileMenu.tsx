import { motion, Transition, SVGMotionProps, useCycle } from "framer-motion"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom";
import MenuButton from "./MenuButton";
import MobileNavigation from "./MobileNavigation";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(0px at 20px 20px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};


export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => { }, [])

    const toggleMenu = () => {
        setIsOpen(isOpen => !isOpen)
    }

    const mobileContent = (
        <motion.nav
            initial='closed'
            animate={isOpen ? 'open' : 'closed'}
            className="flex md:hidden fixed justify-center w-full z-50"
            custom='100%'
        >
            <motion.div className="bg-black z-50 min-h-svh min-w-full top-0 left-0 bottom-0 fixed" variants={sidebar} />
            <MenuButton
                toggle={toggleMenu}
                isOpen={isOpen}
            />
            <MobileNavigation isOpen={isOpen} toggle={toggleMenu} />
        </motion.nav>
    )

    return (
        createPortal(mobileContent, document.body)
    )

}