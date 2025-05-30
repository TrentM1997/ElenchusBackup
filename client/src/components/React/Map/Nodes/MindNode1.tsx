import { motion } from "framer-motion"

export default function MindNode1({ currentStep }) {

    return (
        <div className="h-fit w-fit flex flex-col justify-center absolute md:top-1 lg:top-3 xl:top-14 left-1/2 left-1/2 transform -translate-x-1/2 mx-auto">
            <div className={`${currentStep === 0 ? 'scale-110' : null} transition-all justify-between
            ease-in-out duration-200 bg-gradient-to-tr from-ebony to-mirage w-24 h-10 lg:w-32 lg:h-11 xl:w-36 xl:h-12 p-1 flex items-center 
          ${currentStep < 0 ? 'shadow-inset' : 'border border-1 border-button_blue'}
            rounded-3xl`}>

                <motion.div
                    className="flex items-center justify-self-start justify-center shrink-0 box-border max-w-7 max-h-7 lg:max-h-8 lg:max-w-8 xl:max-h-9 xl:max-w-9 p-1  rounded-full z-10 hover:cursor-pointer"
                    animate={{
                        backgroundColor: currentStep === 0 ? "#374151" : "#2563eb",
                        boxShadow: currentStep === 0
                            ? "0 0 0 2px rgba(37, 99, 235, 1)"
                            : "none"
                    }}
                    transition={{ duration: 0.2, type: 'tween' }}
                    style={{ transformOrigin: 'left' }}>
                    <svg className="h-full w-full xs:p-0.5 box-border" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                        <path d="M 6.78125 1.78125 A 1.50015 1.50015 0 0 0 5.7363281 4.3574219 L 7.1503906 5.7714844 A 1.50015 1.50015 0 1 0 9.2714844 3.6503906 L 7.8574219 2.2363281 A 1.50015 1.50015 0 0 0 6.78125 1.78125 z M 41.173828 1.7832031 A 1.50015 1.50015 0 0 0 40.142578 2.2363281 L 38.728516 3.6503906 A 1.50015 1.50015 0 1 0 40.849609 5.7714844 L 42.263672 4.3574219 A 1.50015 1.50015 0 0 0 41.173828 1.7832031 z M 24 4.015625 C 16.289774 4.0178592 10 10.286931 10 18 C 10 21.999465 11.691407 25.619495 14.388672 28.167969 C 14.705917 28.467557 14.938931 28.889561 15.046875 29.373047 L 17.513672 40.476562 C 17.969216 42.527257 19.805576 44 21.90625 44 L 24 44 L 26.09375 44 C 28.194629 44 30.030487 42.527102 30.486328 40.476562 L 32.955078 29.373047 L 32.955078 29.371094 C 33.062069 28.888989 33.293691 28.469343 33.611328 28.169922 L 33.611328 28.167969 L 33.613281 28.167969 C 36.309356 25.619613 38 21.999465 38 18 C 38 10.286931 31.710226 4.0178592 24 4.015625 z M 24 7.015625 C 30.093774 7.0173908 35 11.909069 35 18 C 35 21.156535 33.67466 23.980731 31.550781 25.988281 C 30.753594 26.740588 30.250209 27.709621 30.025391 28.722656 L 28.853516 34 L 19.146484 34 L 17.974609 28.720703 C 17.748553 27.708189 17.245974 26.740693 16.449219 25.988281 C 14.324484 23.980755 13 21.156535 13 18 C 13 11.909069 17.906226 7.0173908 24 7.015625 z M 1.5 15 A 1.50015 1.50015 0 1 0 1.5 18 L 4.5 18 A 1.50015 1.50015 0 1 0 4.5 15 L 1.5 15 z M 43.5 15 A 1.50015 1.50015 0 1 0 43.5 18 L 46.5 18 A 1.50015 1.50015 0 1 0 46.5 15 L 43.5 15 z M 39.773438 26.773438 A 1.50015 1.50015 0 0 0 38.728516 29.349609 L 40.142578 30.763672 A 1.50015 1.50015 0 1 0 42.263672 28.642578 L 40.849609 27.228516 A 1.50015 1.50015 0 0 0 39.773438 26.773438 z M 8.1816406 26.775391 A 1.50015 1.50015 0 0 0 7.1503906 27.228516 L 5.7363281 28.642578 A 1.50015 1.50015 0 1 0 7.8574219 30.763672 L 9.2714844 29.349609 A 1.50015 1.50015 0 0 0 8.1816406 26.775391 z M 19.814453 37 L 28.185547 37 L 27.558594 39.826172 C 27.404435 40.519634 26.804871 41 26.09375 41 L 24 41 L 21.90625 41 C 21.192924 41 20.595862 40.521478 20.441406 39.826172 L 19.814453 37 z" fill="#ffffff" />
                    </svg>
                </motion.div>
                <h1 className="text-white xs:text-xs lg:text-md font-light tracking tight w-full text-center">The Idea</h1>
            </div>


        </div>

    )
}