import StatBreakdown from "./StatBreakdown";
import { motion } from "framer-motion";
import { variants } from "@/motion/variants";

export default function StatsSection({ stats }) {


    return (
        <motion.section
            id="investigation-stats"
            key='stats-chart'
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="lg:p-8">
            <div
                className="mx-auto w-full 2xl:max-w-7xl">
                <div className="2xl:max-w-7xl  relative isolate overflow-hidden  bg-gradientup ring-1 ring-white/10 rounded-4xl px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <span className="text-white">Investigation Statistics</span>
                        <h2 className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white">
                            Your research{" "}
                            <span className="block text-zinc-300">by the numbers</span>
                        </h2>
                        <p className="mt-6 text-sm text-white">
                            See how your thinking shifts over time — whether you change your mind, confirm a belief, stay neutral, or need more info. These insights reveal your patterns in processing evidence and forming opinions.
                        </p>
                        <p className="mt-6 text-sm text-white">
                            Over all of your investigations:
                        </p>
                        <StatBreakdown percentChanged={stats.percentChanged} validated={stats.validated} neutral={stats.neutral} needMore={stats.neededMore} />
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        {/* <img
                            className="absolute left-0 top-0 w-[57rem] max-w-none shadow-thick opacity-50 border border-white/10 rounded-3xl"
                            src="/images/assets/darkcode.svg"
                            alt="img" /> */}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
