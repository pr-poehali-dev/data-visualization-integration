import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Без посредников</Badge>,
    title: "Найди рабочего напрямую.",
    showButton: true,
    buttonText: 'Найти рабочего'
  },
  {
    id: 'about',
    title: 'Никаких посредников.',
    content: 'Вы общаетесь напрямую с исполнителем. Никаких агентств, накруток и лишних звонков — только вы и мастер.'
  },
  {
    id: 'features',
    title: 'Любые работы.',
    content: 'Строители, электрики, сантехники, отделочники, грузчики, разнорабочие — все специалисты в одном месте. Выбирайте по рейтингу и отзывам.'
  },
  {
    id: 'masters',
    title: 'Мастера рядом.',
    content: 'Реальные люди с реальными отзывами. Без агентств и накруток.',
    masters: [
      { name: 'Алексей Петров', specialty: 'Электрик', rating: 5, reviews: 48, avatar: '⚡' },
      { name: 'Дмитрий Иванов', specialty: 'Сантехник', rating: 4, reviews: 31, avatar: '🔧' },
      { name: 'Сергей Козлов', specialty: 'Строитель', rating: 5, reviews: 62, avatar: '🏗️' },
    ]
  },
  {
    id: 'testimonials',
    title: 'Как это работает.',
    content: 'Опубликуйте задание → получите отклики от мастеров → выберите подходящего → договоритесь напрямую. Всё просто и быстро.'
  },
  {
    id: 'join',
    title: 'Готовы начать?',
    content: 'Тысячи проверенных мастеров уже ждут ваш заказ. Разместите задание бесплатно и получите первые отклики уже сегодня.',
    showButton: true,
    buttonText: 'Разместить задание'
  },
]