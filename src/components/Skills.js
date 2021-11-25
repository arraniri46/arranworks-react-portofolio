import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, marginTop: -40 }}
      animate={{ opacity: 1, marginTop: 0 }}
      transition={{ duration: 0.5 }}
    >
      Hello Skills
    </motion.div>
  )
}

export default Skills
