import Card from "../../../components/ui/Card"
import { motion } from "framer-motion"

const leftCardVariants = {
    offscreen: {
        x: -400
    },
    onscreen: {
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
}

const rightCardVariants = {
    offscreen: {
        x: 300
    },
    onscreen: {
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
}

const Cards = () => {
    const cardContentDetails = [
        { id: 1, text: 'مزون زنانه', cardText: 'مزون زنانه', desc: 'بیزنس بیزنس', img: "../public/images/girl.jpg" },
        { id: 2, text: 'مزون دخترانه', cardText: 'مزون دخترانه', desc: 'بیزنس بیزنس', img: "../public/images/girl-1.jpg" },
        { id: 3, text: 'مزون مردانه', cardText: 'مزون مردانه', desc: 'بیزنس بیزنس', img: "../public/images/girl-2.jpg" },
        { id: 4, text: 'مزون پسرانه', cardText: 'مزون پسرانه', desc: 'بیزنس بیزنس', img: "../public/images/girl-3.jpg" },
    ]
    return (
        <div className="">
            <section
                className="h-full lg:grid-cols-4 md:grid-cols-2 auto-rows-[15rem] grid grid-cols-1 gap-4"
            >
                <motion.div
                    variants={leftCardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                    className="lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3">
                    <Card
                        {...cardContentDetails[0]}
                    />
                </motion.div>
                <motion.div
                    variants={rightCardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                    className="lg:col-start-1 lg:col-end-2">
                    <Card
                        {...cardContentDetails[1]}
                    />
                </motion.div>
                <motion.div
                    variants={rightCardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                    className="lg:col-start-2 lg:col-end-3">
                    <Card
                        {...cardContentDetails[2]}
                    />
                </motion.div>
                <motion.div
                    variants={rightCardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                    className="lg:col-start-1 lg:col-end-3">
                    <Card
                        {...cardContentDetails[3]}
                    />
                </motion.div>
            </section>
        </div>
    )
}

export default Cards