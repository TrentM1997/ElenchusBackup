import { RootState } from "@/ReduxToolKit/store";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { incrementBy } from "@/ReduxToolKit/Reducers/Investigate/Steps";


export default function Node4({ }) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { stepper } = investigateState
    const { step } = stepper
    const currentStep = step
    const dispatch = useDispatch()

    return (
        <li className="flex flex-col w-full h-20 items-center">
            <div className="flex  items-center justify-center w-full h-full">
                <motion.div
                    onClick={() => dispatch(incrementBy(3))}
                    className="flex items-center justify-center rounded-full max-w-7 max-h-7
                    sm:max-w-9 sm:max-h-9 sm:p-1 shrink-0 z-10 hover:cursor-pointer transition-all duration-300 hover:scale-110"
                    animate={{
                        backgroundColor: currentStep <= 3 ? "#374151" : "#2563eb",
                        boxShadow: currentStep === 3
                            ? "0 0 0 4px rgba(37, 99, 235, 1)"
                            : "none"
                    }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: 'left' }}>
                    <svg className="h-full w-full xs:p-1 md:p1 box-border" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                        <path d="M 10.5 5 C 9.1250003 5 7.9038151 5.5696334 7.1289062 6.4414062 C 6.3539974 7.3131791 6 8.4166668 6 9.5 C 6 10.583333 6.3539975 11.686821 7.1289062 12.558594 C 7.9038151 13.430367 9.1250003 14 10.5 14 C 11.875 14 13.096185 13.430367 13.871094 12.558594 C 14.285091 12.092847 14.569984 11.559615 14.753906 11 L 37.5 11 C 38.346499 11 39 11.653501 39 12.5 L 39 20.5 C 39 21.346499 38.346499 22 37.5 22 L 26.121094 22 L 28.060547 20.060547 A 1.50015 1.50015 0 0 0 26.970703 17.486328 A 1.50015 1.50015 0 0 0 25.939453 17.939453 L 21.439453 22.439453 A 1.50015 1.50015 0 0 0 21.439453 24.560547 L 25.939453 29.060547 A 1.50015 1.50015 0 1 0 28.060547 26.939453 L 26.121094 25 L 37.5 25 C 39.967501 25 42 22.967501 42 20.5 L 42 12.5 C 42 10.032499 39.967501 8 37.5 8 L 14.753906 8 C 14.569984 7.4403854 14.285091 6.9071534 13.871094 6.4414062 C 13.096185 5.5696334 11.875 5 10.5 5 z M 10.5 8 C 11.124999 8 11.403816 8.1803665 11.628906 8.4335938 C 11.82641 8.6557848 11.957761 8.989968 11.988281 9.3496094 A 1.50015 1.50015 0 0 0 11.986328 9.6542969 C 11.955129 10.012384 11.825668 10.345049 11.628906 10.566406 C 11.403816 10.819633 11.124999 11 10.5 11 C 9.8750006 11 9.5961843 10.819633 9.3710938 10.566406 C 9.146003 10.313179 9 9.9166668 9 9.5 C 9 9.0833332 9.1460031 8.6868209 9.3710938 8.4335938 C 9.5961843 8.1803665 9.8750006 8 10.5 8 z M 7.5 22 A 1.5 1.5 0 0 0 7.5 25 A 1.5 1.5 0 0 0 7.5 22 z M 12.5 22 A 1.5 1.5 0 0 0 12.5 25 A 1.5 1.5 0 0 0 12.5 22 z M 17.5 22 A 1.5 1.5 0 0 0 17.5 25 A 1.5 1.5 0 0 0 17.5 22 z M 7.5 27 A 1.5 1.5 0 0 0 7.5 30 A 1.5 1.5 0 0 0 7.5 27 z M 7.5 32 A 1.5 1.5 0 0 0 7.5 35 A 1.5 1.5 0 0 0 7.5 32 z M 37.5 34 C 36.125 34 34.903815 34.569633 34.128906 35.441406 C 33.714909 35.907153 33.430016 36.440385 33.246094 37 L 32.5 37 A 1.50015 1.50015 0 1 0 32.5 40 L 33.246094 40 C 33.430016 40.559615 33.714909 41.092847 34.128906 41.558594 C 34.903815 42.430367 36.125 43 37.5 43 C 38.875 43 40.096185 42.430367 40.871094 41.558594 C 41.646003 40.686821 42 39.583333 42 38.5 C 42 37.416667 41.646003 36.313179 40.871094 35.441406 C 40.096185 34.569633 38.875 34 37.5 34 z M 7.5 37 A 1.5 1.5 0 0 0 7.5 40 A 1.5 1.5 0 0 0 7.5 37 z M 12.5 37 A 1.5 1.5 0 0 0 12.5 40 A 1.5 1.5 0 0 0 12.5 37 z M 17.5 37 A 1.5 1.5 0 0 0 17.5 40 A 1.5 1.5 0 0 0 17.5 37 z M 22.5 37 A 1.5 1.5 0 0 0 22.5 40 A 1.5 1.5 0 0 0 22.5 37 z M 27.5 37 A 1.5 1.5 0 0 0 27.5 40 A 1.5 1.5 0 0 0 27.5 37 z M 37.5 37 C 38.124999 37 38.403816 37.180367 38.628906 37.433594 C 38.853997 37.686821 39 38.083333 39 38.5 C 39 38.916667 38.853997 39.313179 38.628906 39.566406 C 38.403816 39.819633 38.124999 40 37.5 40 C 36.875001 40 36.596184 39.819633 36.371094 39.566406 C 36.17359 39.344215 36.042239 39.010032 36.011719 38.650391 A 1.50015 1.50015 0 0 0 36.013672 38.345703 C 36.044871 37.987616 36.174332 37.654951 36.371094 37.433594 C 36.596184 37.180367 36.875001 37 37.5 37 z" fill="#ffffff" />
                    </svg>
                </motion.div>
                <motion.div
                    className="xs:w-5/6 h-1 grow"
                    initial={{ scaleX: 0, backgroundColor: "#374151" }}
                    animate={{ scaleX: 1, backgroundColor: currentStep > 3 ? "#2563eb" : "#374151" }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ transformOrigin: 'left' }}
                />
            </div>

            <motion.div
                className="text-[0.6rem] sm:text-sm text-left
text-white self-start w-full "
                animate={{ scale: 1, opacity: currentStep == 3 ? 1 : 0 }}
                transition={{ duration: 0.7 }}
            >
                4. Premises
            </motion.div>

        </li>
    )
}