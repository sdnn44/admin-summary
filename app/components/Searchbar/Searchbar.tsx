"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
type Props = {}

export default function Searchbar({ }: Props) {
    const [isExpanded] = useState(false);

    return (
        <motion.div
            className="flex flex-col lg:w-[26rem] sm:w-full h-10 bg-[#0F1117ee] rounded-lg shadow-sm shadow-[#7047f98f]">
            <div className="w-full min-h-10 flex items-center px-4">
                <span className="text-white align-middle mr-5 cursor-pointer">
                    <CiSearch />
                </span>
                <input
                    className="w-full outline-none border-none text-sm font-light text-white rounded-2xl bg-transparent placeholder-white placeholder:opacity-50 focus:placeholder-transparent focus:outline-none"
                    placeholder="Search for admin..."
                // ref={inputRef}
                // value={searchQuery}
                // onChange={changeHandler}
                />
                <AnimatePresence>
                    {isExpanded && (
                        <motion.span
                            className="text-white align-middle cursor-pointer transition-all duration-300 hover:text-violet-300"
                            key="close-icn"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            // onClick={() => collapse()}
                            transition={{ duration: 0.2 }}
                        >
                            <IoCloseOutline />
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>

        </motion.div>
    )
}