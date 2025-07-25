import { motion } from "framer-motion";
import type { RootState } from '@/ReduxToolKit/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, incrementBy } from "@/ReduxToolKit/Reducers/Investigate/Steps";


export default function BackButton({ }) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { stepper } = investigateState
    const { step } = stepper
    const dispatch = useDispatch()

    return (
        <div
            className="relative h-auto w-auto 
        my-auto justify-self-start self-center" >
            <motion.div
                className="self-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: 'tween', duration: 0.2 }}
            >
                <button
                    onClick={() => dispatch(decrement())}
                    className={`xs:w-14 h-10 shadow-material_2
                    lg:w-14 mx-auto lg:h-12 p-1.5 transition-all 
                    duration-200 bg-ebony/70 md:hover:bg-white/10 
                    flex items-center group rounded-2xl
                    ${step !== 0 ? 'pointer-events-auto opacity-100' : ' pointer-events-none bg-white/5 opacity-50'}`}>
                    <span className="mx-auto">
                        <svg className={`p-3 ${step === 0 ? 'text-zinc-400' : 'text-white md:group-hover:text-white'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                            <path d="M 33.960938 2.9804688 A 2.0002 2.0002 0 0 0 32.585938 3.5859375 L 13.585938 22.585938 A 2.0002 2.0002 0 0 0 13.585938 25.414062 L 32.585938 44.414062 A 2.0002 2.0002 0 1 0 35.414062 41.585938 L 17.828125 24 L 35.414062 6.4140625 A 2.0002 2.0002 0 0 0 33.960938 2.9804688 z" fill="currentColor" />
                        </svg>

                    </span>
                </button>
            </motion.div>
        </div>
    )
}