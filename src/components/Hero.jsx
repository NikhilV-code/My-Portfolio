import profilePic from "../assets/nikhil-profile.jpg"
import {HERO_CONTENT} from "../constants"
import { inertia, motion } from "framer-motion"

const containerVariants = {
    hidden: {opacity: 0, x: -100},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5
        }
    }
}

const childVariants = {
    hidden: {opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5}}
}
const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36'>
        <div className='flex flex-wrap lg:flex-row-reverse'>
            <div className='w-full lg:w-1/2'> 
             <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[550px] lg:h-[550px] mx-auto">
                    
                <motion.div
                    initial={{ opacity: 0, rotate: 0 }}
                    animate={{ opacity: 1, rotate: 360 }}
                    transition={{
                    opacity: { duration: 2, delay: 1.8 },
                    rotate: { repeat: Infinity, duration: 10, ease: "linear" }
                    }}
                    className="absolute inset-0 rounded-full border-[3px] sm:border-[4px] md:border-[6px] lg:border-[8px] border-gray-400 border-dashed">
                </motion.div>
                    
                    <motion.img 
                    src={profilePic} 
                    alt="Nikhil Verma" 
                    className="border border-stone-900 rounded-full"
                    width={550}
                    height={550}
                    initial={{ x: 100, opacity: 0}}
                    animate={{ x: 0, opacity: 1}}
                    transition={{ duration: 1, delay: 1.5}}/>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <motion.div 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col items-center lg:items-start
                mt-10">
                    <motion.h2 
                    variants={childVariants}
                    className="pb-2 text-4xl tracking-tighter
                    lg:text-8xl">Nikhil Verma
                    </motion.h2>

                    <motion.span 
                    variants={childVariants}
                    className="bg-gradient-to-r from-stone-300
                    to-stone-600 bg-clip-text text-3xl tracking-tight
                    text-transparent">Full Stack Developer
                    </motion.span>

                    <motion.p 
                    variants={childVariants}
                    className="my-2 max-w-lg py-6 text-xl leading-relaxed
                    tracking-tighter">
                        {HERO_CONTENT}
                    </motion.p>

                    <motion.a 
                    variants={childVariants}
                    href="/My-portfolio/public/Nikhil-Verma-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="bg-white rounded-full p-4 text-sm
                        text-stone-800 mb-10 animate-bounce">
                          Download Resume
                        </motion.a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero