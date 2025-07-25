import { motion, AnimatePresence } from "framer-motion"
import Lottie from "lottie-react"
import loadingWiki from '@/lotties/loadingWiki.json';


const variants = {

    open: {
        opacity: 1
    },
    closed: {
        opacity: 0
    }
}


export default function WikiExtractLoader() {


    return (
        <motion.div
            key='wikiLoader'
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'tween', duration: 0.2 }}
            className="h-full w-full relative flex items-center justify-center"

        >
            <div className="w-24 h-36 py-6">
                <Lottie animationData={loadingWiki} autoPlay={true} loop={true} width={16} height={16} />
            </div>
        </motion.div>
    )
}