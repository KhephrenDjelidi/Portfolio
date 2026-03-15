import { motion } from 'framer-motion'
import './Loader.css'

const Loader = () => {
  return (
    <motion.div 
      className="loader-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      onAnimationComplete={(definition) => {
        if (definition.opacity === 0) {
          const loader = document.querySelector('.loader-screen')
          if (loader) loader.style.display = 'none'
        }
      }}
    >
      <div className="loader-content">
        <motion.div
          className="loader-logo"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span>KD</span>
        </motion.div>
        
        <motion.h1
          className="loader-name"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Khephren Djelidi
        </motion.h1>

        <motion.div
          className="loader-bar"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <motion.div
            className="loader-progress"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <div className="loader-shapes">
        <motion.div 
          className="loader-shape shape-1"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="loader-shape shape-2"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -180, -360] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="loader-shape shape-3"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 90, 180] 
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>
    </motion.div>
  )
}

export default Loader
