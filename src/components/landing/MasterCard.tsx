import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

interface MasterCardProps {
  name: string
  specialty: string
  rating: number
  reviews: number
  avatar: string
  isActive: boolean
  index: number
}

export default function MasterCard({ name, specialty, rating, reviews, avatar, isActive, index }: MasterCardProps) {
  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 backdrop-blur-sm hover:border-[#3B82F6]/50 transition-colors"
      initial={{ opacity: 0, y: 40 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
    >
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl shrink-0">
          {avatar}
        </div>
        <div>
          <p className="text-white font-semibold text-lg leading-tight">{name}</p>
          <p className="text-neutral-400 text-sm mt-0.5">{specialty}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={14}
              className={i < Math.floor(rating) ? "text-[#3B82F6]" : "text-white/20"}
            />
          ))}
        </div>
        <span className="text-white text-sm font-medium">{rating}</span>
        <span className="text-neutral-500 text-sm">({reviews} отзывов)</span>
      </div>
      <button className="mt-auto text-sm text-[#3B82F6] border border-[#3B82F6]/40 rounded-lg py-2 hover:bg-[#3B82F6] hover:text-white transition-colors">
        Написать напрямую
      </button>
    </motion.div>
  )
}
