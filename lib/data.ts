export interface Product {
  name: string
  type: string
  gauge: string
  length: string
  desc: string
  seed: string
}

export const products: Product[] = [
  {
    name: "نخ مونو استایژن",
    type: "PDO Mono",
    gauge: "29G",
    length: "۵۰ / ۷۰ / ۹۰ میلی‌متر",
    desc: "مناسب برای لیفت ملایم ابرو و بهبود بافت پوست",
    seed: "steigen-mono-a",
  },
  // ... بقیه
]

export interface EducationModule {
  title: string
  duration: string
  level: string
  lessons: number
  icon: string
}

export const educationModules: EducationModule[] = [
  {
    title: "اصول پایه نخ‌های لیفت PDO",
    duration: "۴۵ دقیقه",
    level: "مقدماتی",
    lessons: 6,
    icon: "book-open",
  },
  // ... بقیه
]

export interface SpecItem {
  feature: string
  pdo: string
  pcl: string
}

export const specsData: SpecItem[] = [
  { feature: "زمان جذب کامل", pdo: "۶ تا ۸ ماه", pcl: "۱۸ تا ۲۴ ماه" },
  // ... بقیه
]