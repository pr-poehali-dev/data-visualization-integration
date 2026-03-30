import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

interface OrderFormProps {
  isActive: boolean
}

const specialties = ["Электрик", "Сантехник", "Строитель", "Отделочник", "Грузчик", "Разнорабочий", "Другое"]

export default function OrderForm({ isActive }: OrderFormProps) {
  const [form, setForm] = useState({ name: "", phone: "", specialty: "", description: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        className="flex flex-col items-start gap-4 mt-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-14 h-14 rounded-full bg-[#3B82F6]/20 flex items-center justify-center">
          <Icon name="CheckCircle" size={28} className="text-[#3B82F6]" />
        </div>
        <p className="text-white text-xl font-semibold">Заявка отправлена!</p>
        <p className="text-neutral-400">Мастера уже видят ваш заказ и скоро напишут напрямую.</p>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="mt-10 w-full max-w-lg flex flex-col gap-4"
      initial={{ opacity: 0, y: 30 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          placeholder="Ваше имя"
          required
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-[#3B82F6]"
        />
        <Input
          placeholder="Телефон"
          type="tel"
          required
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-[#3B82F6]"
        />
      </div>
      <select
        required
        value={form.specialty}
        onChange={e => setForm({ ...form, specialty: e.target.value })}
        className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:border-[#3B82F6]"
      >
        <option value="" disabled className="bg-neutral-900">Тип работы</option>
        {specialties.map(s => (
          <option key={s} value={s} className="bg-neutral-900">{s}</option>
        ))}
      </select>
      <Textarea
        placeholder="Опишите задание кратко..."
        rows={3}
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
        className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-[#3B82F6] resize-none"
      />
      <Button
        type="submit"
        size="lg"
        className="bg-[#3B82F6] hover:bg-[#2563EB] text-white border-0 w-fit"
      >
        Разместить задание
      </Button>
    </motion.form>
  )
}
