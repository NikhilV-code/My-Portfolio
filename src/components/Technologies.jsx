import { BiLogoPostgresql } from "react-icons/bi"
import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa"
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMantine } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});
const Technologies = () => {
  return (
    <div className='pb-24'>
        <motion.h2 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 1.5}}
        className='my-20 text-center text-4xl'>Technologies
        </motion.h2>

        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100}}
        transition={{ duration: 1.5}}
        className='flex flex-wrap items-center justify-center gap-10'>

        <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4 relative group">
        <RiReactjsLine className="text-7xl text-cyan-400"/>
        <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 
          bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 
            group-hover:opacity-100 transition-opacity duration-300">
            React.Js
            </span>
        </motion.div>

        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4 relative group">
          <TbBrandNextjs className="text-7xl"/>
          <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 
          bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 
            group-hover:opacity-100 transition-opacity duration-300">
            Next.Js
            </span>
        </motion.div>

        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4 relative group">
          <SiMongodb className="text-7xl text-green-700"/>
          <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 
          bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 
            group-hover:opacity-100 transition-opacity duration-300">
            MongoDB
            </span>
        </motion.div>

        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4 relative group">
          <DiRedis className="text-7xl text-red-700"/>
          <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 
          bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 
            group-hover:opacity-100 transition-opacity duration-300">
            Redis
            </span>
        </motion.div>

        <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3.5)}
            className="p-4 relative group">
          <SiExpress className="text-7xl text-gray-500" />
          <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 
          bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 
            group-hover:opacity-100 transition-opacity duration-300">
            Express.Js
            </span>
        </motion.div>

        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(6)}
            className="p-4 relative group">
          <FaNodeJs className="text-7xl text-green-500"/>
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 
          bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 
            group-hover:opacity-100 transition-opacity duration-300">
            Node.js
            </span>
        </motion.div>

        <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4.5)}
            className="p-4 relative group">
          <SiHtml5 className="text-7xl text-orange-700" />
          <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 
          bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 
            group-hover:opacity-100 transition-opacity duration-300">
            HTML5
            </span>
        </motion.div>

        <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4 relative group">
          <SiCss3 className="text-7xl text-blue-500" />
          <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 
          bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 
            group-hover:opacity-100 transition-opacity duration-300">
            CSS3
            </span>
        </motion.div>

        <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4 relative group">
          <SiBootstrap className="text-7xl text-purple-600" />
          <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 
          bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 
            group-hover:opacity-100 transition-opacity duration-300">
            Bootstrap
            </span>
        </motion.div>

        <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(6.5)}
            className="p-4 relative group">
          <SiJavascript className="text-7xl text-yellow-400" />
          <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 
          bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 
            group-hover:opacity-100 transition-opacity duration-300">
            JavaScript
            </span>
        </motion.div>

        <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4 relative group">
          <SiTailwindcss className="text-7xl text-cyan-400" />
          <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 
          bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 
            group-hover:opacity-100 transition-opacity duration-300">
            TailwindCSS
            </span>
        </motion.div>

        <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5.5)}
            className="p-4 relative group">
          <SiMantine className="text-7xl text-blue-500" />
          <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 
          bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 
            group-hover:opacity-100 transition-opacity duration-300">
            Mantine
            </span>
        </motion.div>

        <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(7)}
            className="p-4 relative group">
          <SiFastapi className="text-7xl text-green-500" />
          <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 
          bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 
            group-hover:opacity-100 transition-opacity duration-300">
            FastAPI
            </span>
        </motion.div>

        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4 relative group">
          <BiLogoPostgresql className="text-7xl text-sky-800"/>
          <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 
          bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 
            group-hover:opacity-100 transition-opacity duration-300">
            PosgreSQL
            </span>
        </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies