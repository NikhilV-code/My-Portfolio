import { BiLogoPostgresql } from "react-icons/bi"
import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si"
import { SiTypescript } from "react-icons/si"
import { SiMysql } from "react-icons/si"
import { SiMui } from "react-icons/si"
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
  initial: { y: -10 },
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
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>Technologies
        </motion.h2>

        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-10'>

          {/* React */}
          <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-4 relative group">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">React.js</span>
          </motion.div>

          {/* Next.js */}
          <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4 relative group">
            <TbBrandNextjs className="text-7xl"/>
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Next.js</span>
          </motion.div>

          {/* TypeScript */}
          <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4 relative group">
            <SiTypescript className="text-7xl text-blue-500"/>
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">TypeScript</span>
          </motion.div>

          {/* JavaScript */}
          <motion.div initial="initial" animate="animate" variants={iconVariants(6.5)} className="p-4 relative group">
            <SiJavascript className="text-7xl text-yellow-400"/>
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">JavaScript</span>
          </motion.div>

          {/* Node.js */}
          <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4 relative group">
            <FaNodeJs className="text-7xl text-green-500"/>
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Node.js</span>
          </motion.div>

          {/* Express.js */}
          <motion.div initial="initial" animate="animate" variants={iconVariants(3.5)} className="p-4 relative group">
            <SiExpress className="text-7xl text-gray-500"/>
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Express.js</span>
          </motion.div>

          {/* MongoDB */}
          <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4 relative group">
            <SiMongodb className="text-7xl text-green-700"/>
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">MongoDB</span>
          </motion.div>

          {/* MySQL */}
          <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4 relative group">
            <SiMysql className="text-7xl text-blue-400"/>
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">MySQL</span>
          </motion.div>

          {/* PostgreSQL */}
          <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4 relative group">
            <BiLogoPostgresql className="text-7xl text-sky-800"/>
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">PostgreSQL</span>
          </motion.div>

          {/* Tailwind CSS */}
          <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-4 relative group">
            <SiTailwindcss className="text-7xl text-cyan-400"/>
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Tailwind CSS</span>
          </motion.div>

          {/* Material UI */}
          <motion.div initial="initial" animate="animate" variants={iconVariants(5.5)} className="p-4 relative group">
            <SiMui className="text-7xl text-blue-600"/>
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Material UI</span>
          </motion.div>

          {/* HTML5 */}
          <motion.div initial="initial" animate="animate" variants={iconVariants(4.5)} className="p-4 relative group">
            <SiHtml5 className="text-7xl text-orange-700"/>
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">HTML5</span>
          </motion.div>

          {/* CSS3 */}
          <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4 relative group">
            <SiCss3 className="text-7xl text-blue-500"/>
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">CSS3</span>
          </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies