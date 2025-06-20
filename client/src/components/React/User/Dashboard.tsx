import { motion } from "framer-motion";
import { BiasChart } from "../Charts/DonutChart/SourceChart";
import StatsSection from "../Charts/ResearchStats/StatsSection";
import IntegrityChart from "../Charts/PieChart/IntegrityChart";

const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
};

export default function Dashboard() {

    return (
        <motion.section
            key={"dashboard"}
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: 'tween', duration: 0.2 }}
            className="w-auto mx-auto h-full relative md:right-0 md:bottom-0 flex flex-col gap-y-20
        2xl:gap-y-24 justify-center xl:justify-start items-center 2xl:px-52 grow 2xl:pb-96
        p-4 md:p-0
        "
        >
            <BiasChart />
            <IntegrityChart />
            <StatsSection />

        </motion.section>
    )
}