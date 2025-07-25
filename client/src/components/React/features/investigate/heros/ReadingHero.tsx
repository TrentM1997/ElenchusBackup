import { SummaryHelp } from "@/helpInfo/help"
import HelpButton from "../Shared/Help/buttons/Question"

export default function ReadingHero({ }) {

    return (
        <header className="w-11/12 sm:w-full mt-12 h-auto mx-auto flex items-center justify-between border-b border-white/10 xl:mt-20 2xl:mt-24 xl:max-w-6xl xl:mb-0">

            <div className="w-auto my-auto flex xl:gap-x-6 xs:gap-x-4 items-center">
                <h1 className="xl:text-3xl xs:text-md text-left text-white font-light tracking-tight md:mb-0 md:ml-0 ml-2 mb-2">
                    Retrieved Articles
                </h1>
                <div className="w-fit h-full justify-items-start self-center md:mb-0 xs:mb-2">
                    <HelpButton
                        info={SummaryHelp}
                    />
                </div>
            </div>

        </header>
    )
}