import { AnimatePresence } from "framer-motion"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { BackToSearch } from "../Modals/BackToSearch"
import { GetTheseArticles } from "../Modals/GetTheseArticles"

export default function ModalContainer() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { display } = investigateState
    const { showBackToSearchModal, showGetArticlesModal } = display

    return <AnimatePresence>
        {showBackToSearchModal ? <BackToSearch /> : null}
        {showGetArticlesModal && <GetTheseArticles />}
    </AnimatePresence>
}