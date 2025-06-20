import { useDispatch, useSelector } from "react-redux";
import { presentArticles, presentResearch } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";
import { showSignOut } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import DeleteUserAccount from "@/components/React/Modals/DeleteUser";
import { RootState } from "@/ReduxToolKit/store";
import { presentManagement, presentDashboard } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";

export default function SideBarMenu({ }) {
    const showDeleteModal = useSelector((state: RootState) => state.profileNav.displayDeleteModal)
    const profileNavigationState = useSelector((state: RootState) => state.profileNav)
    const { displaySavedArticles, displayDashboard, displayAccountManagement, displaySavedInvestigations } = profileNavigationState
    const dispatch = useDispatch()

    useEffect(() => {
    }, [showDeleteModal])

    return (


        <aside id="separator-sidebar"
            className="sticky top-0 z-30 w-full md:w-44 xl:w-52 h-screen transition-transform sm:translate-x-0 bg-black border-r border-white/10 overflow-y-auto" aria-label="Sidebar">
            <AnimatePresence>
                {showDeleteModal === true && <DeleteUserAccount />}
            </AnimatePresence>

            <div className="h-full px-3 py-16 overflow-y-auto bg-black border-r border-white/10">
                <ul className="space-y-2 font-medium">
                    <li className="cursor-pointer"
                        onClick={() => {
                            dispatch(presentDashboard());
                        }}
                    >
                        <div className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white/10 
                            group transition-all duration-200 ease-in-out
                                ${displayDashboard && 'bg-white/10'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-dashboard shrink-0  w-6 h-6 text-white/60 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M13.45 11.55l2.05 -2.05" /><path d="M6.4 20a9 9 0 1 1 11.2 0z" /></svg>
                            <span className="ms-3 text-white xl:text-base md:text-sm font-light">Dashboard</span>
                        </div>


                    </li>
                    <li className="cursor-pointer"
                        onClick={() => {
                            dispatch(presentResearch())
                        }}
                    >
                        <div className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white/10 
                            group transition-all duration-200 ease-in-out
                                ${displaySavedInvestigations && 'bg-white/10'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-check shrink-0  w-6 h-6 text-white/60 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M9 14l2 2l4 -4" /></svg>

                            <span className="ms-3 text-white xl:text-base md:text-sm font-light">Investigations</span>
                        </div>


                    </li>

                    <li className="cursor-pointer"
                        onClick={() => {
                            dispatch(presentArticles());
                        }}
                    >
                        <div className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white/10 
                            group transition-all duration-200 ease-in-out
                                ${displaySavedArticles && 'bg-white/10'}`}>
                            <svg className={`shrink-0 w-6 h-6 transition duration-75 text-white`}
                                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0,0,256,256">
                                <g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8.53333,8.53333)"><path d="M23,27l-8,-7l-8,7v-22c0,-1.105 0.895,-2 2,-2h12c1.105,0 2,0.895 2,2z" /></g></g>
                            </svg>

                            <span className={`flex-1 ms-3 whitespace-nowrap xl:text-base md:text-sm font-light text-white`}>Saved Articles</span>
                        </div>
                    </li>
                </ul>
                <ul className="pt-4 mt-4 space-y-2 font-medium flex flex-col items-start border-t border-gray-200 dark:border-gray-700">
                    <li className="cursor-pointer hover:bg-white/10 group w-full rounded-lg" onClick={() => dispatch(showSignOut(true))}>
                        <div className="flex items-center gap-x-2 md:p-1.5 xl:p-2 rounded-lg dark:text-white">
                            <svg className="shrink-0 w-6 h-6 md:p-0.5 xl:p-0  text-white/60 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
                                <g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.33333,5.33333)"><path d="M24,4c-11.02771,0 -20,8.97229 -20,20c0,11.02771 8.97229,20 20,20c6.34895,0 12.01563,-2.97689 15.67578,-7.59961c0.33535,-0.41986 0.42052,-0.98701 0.22329,-1.48685c-0.19723,-0.49984 -0.64674,-0.85601 -1.17843,-0.93374c-0.53169,-0.07773 -1.06435,0.13485 -1.39642,0.55731c-3.11585,3.93528 -7.91117,6.46289 -13.32422,6.46289c-9.40629,0 -17,-7.59371 -17,-17c0,-9.40629 7.59371,-17 17,-17c5.41305,0 10.20837,2.52761 13.32422,6.46289c0.33207,0.42246 0.86473,0.63504 1.39642,0.55731c0.53169,-0.07773 0.9812,-0.4339 1.17843,-0.93374c0.19723,-0.49984 0.11206,-1.06699 -0.22329,-1.48685c-3.66015,-4.62272 -9.32683,-7.59961 -15.67578,-7.59961zM36.48438,16.48438c-0.61065,0.00015 -1.16026,0.37042 -1.38978,0.93629c-0.22952,0.56587 -0.09314,1.21439 0.34486,1.63988l3.4375,3.4375l-20.375,-0.01758c-0.54092,-0.00832 -1.04443,0.27524 -1.31772,0.74212c-0.2733,0.46688 -0.27405,1.04474 -0.00197,1.51233c0.27208,0.46759 0.77484,0.75246 1.31579,0.74555l20.38281,0.01758l-3.44141,3.44141c-0.39185,0.37623 -0.54969,0.9349 -0.41265,1.46055c0.13704,0.52565 0.54754,0.93616 1.07319,1.07319c0.52565,0.13704 1.08432,-0.0208 1.46055,-0.41265l6,-6c0.58555,-0.58579 0.58555,-1.5353 0,-2.12109l-6,-6c-0.28248,-0.2909 -0.67069,-0.45506 -1.07617,-0.45508z" /></g></g>
                            </svg>
                            <div className="flex-1 w-full xl:text-base md:text-sm whitespace-nowrap font-light grow">Sign Out</div>
                        </div>
                    </li>
                    <li
                        className="cursor-pointer hover:bg-white/10 group w-full rounded-lg"
                        onClick={() => {
                            dispatch(presentManagement());
                        }}>
                        <a href="#" className="flex items-center gap-x-2 md:p-1.5 xl:p-2 rounded-lg dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                className="icon icon-tabler text-white/60 group-hover:text-white transition-all duration-200 ease-in-out icons-tabler-outline icon-tabler-settings"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg>

                            <span className="flex-1 whitespace-nowrap md:text-sm xl:text-base font-light">Manage Account</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
