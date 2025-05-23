import { motion } from "framer-motion";


export default function MiddlePath({ currentStep }) {

    return (
        <div className="z-1 mx-auto xl:w-60 xl:h-24 lg:w-52 lg:h-22  md:w-44 md:h-20 flex justify-between">

            <div className="flex flex-col justify-center min-h-full">
                <motion.div
                    animate={{ backgroundColor: currentStep === 0 ? "#374151" : "#2563eb" }}
                    transition={{ type: 'tween', duration: 0.8 }}
                    style={{ transformOrigin: 'top' }}
                    className="xs:h-10 grow w-1" />
                <motion.div
                    animate={{ backgroundColor: currentStep <= 2 ? "#374151" : "#2563eb" }}
                    transition={{ type: 'tween', duration: 0.8 }}
                    style={{ transformOrigin: 'bottom' }}
                    className="xs:h-10 grow w-1" />
            </div>
            <div className="flex flex-col justify-center min-h-full">
                <motion.div
                    animate={{ backgroundColor: currentStep <= 1 ? "#374151" : "#2563eb" }}
                    transition={{ type: 'tween', duration: 0.8 }}
                    style={{ transformOrigin: 'top' }}
                    className="xs:h-10 w-1 grow" />
                <motion.div animate={{ backgroundColor: currentStep <= 2 ? "#374151" : "#2563eb" }}
                    transition={{ type: 'tween', duration: 0.8 }}
                    style={{ transformOrigin: 'bottom' }}
                    className="xs:h-10 grow w-1" />
            </div>

        </div>
    )
}


