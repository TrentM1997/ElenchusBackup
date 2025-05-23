import { useDispatch } from "react-redux"
import { displayCompletion, displayWrapUp } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"

export default function EndInvestigateButton() {
    const dispatch = useDispatch()

    return (
        <button
            onClick={() => {
                dispatch(displayWrapUp(false))
                dispatch(displayCompletion(true))
            }}
            className="w-auto bg-white hover:bg-white/10 group shadow-thick 
            transition-colors duration-200 ease-in-out rounded-full h-fit py-2 px-8 mx-auto flex items-center">
            <p className="text-black text-xs md:text-lg group-hover:text-white font-light text-center">
                Finished <span className="ml-2">&#8594;</span>
            </p>
        </button>
    )
}