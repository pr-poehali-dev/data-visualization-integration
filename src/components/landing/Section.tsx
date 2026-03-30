import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"
import MasterCard from "./MasterCard"
import OrderForm from "./OrderForm"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, masters, showForm }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {masters && masters.length > 0 && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          {masters.map((master, i) => (
            <MasterCard key={master.name} {...master} isActive={isActive} index={i} />
          ))}
        </motion.div>
      )}
      {showForm && <OrderForm isActive={isActive} />}
      {showButton && !showForm && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-[#3B82F6] bg-transparent border-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-colors"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}