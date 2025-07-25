import { AnimatePresence, motion } from "framer-motion"
import { useSelector } from "react-redux"
import Page from "../components/Page"
import { RootState } from "@/ReduxToolKit/store"


const variants = {
    show: {
        opacity: 1,
        transition: { type: 'tween', duration: 0.4, ease: 'easeInOut', delay: 0.4 }
    },
    hide: {
        opacity: 0,
        transition: { type: 'tween', duration: 0.4, ease: 'easeInOut' }
    }
};


export default function Pages() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { search } = investigateState
    const { currentPage, pages } = search

    return (
        <motion.div
            key='pagesOfLinks'
            variants={variants}
            initial='hide'
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.2 }}
            className="relative"
        >
            {pages?.map((pageContent: any, index: number) => (
                <AnimatePresence key={index} mode="wait">
                    {currentPage === index && <Page index={index} pageContent={pageContent} />}
                </AnimatePresence>
            ))

            }
        </motion.div>


    )
}