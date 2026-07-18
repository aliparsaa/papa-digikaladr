export interface Product {
  name: string;
  type: string;
  gauge: string;
  length: string;
  desc: string;
  seed: string;
}

export const products: Product[] = [
  {
    name: 'نخ مونو استایژن',
    type: 'PDO Mono',
    gauge: '29G',
    length: '۵۰ / ۷۰ / ۹۰ میلی‌متر',
    desc: 'مناسب برای لیفت ملایم ابرو و بهبود بافت پوست',
    seed: 'steigen-mono-a',
  },
  {
    name: 'نخ کوگ استایژن',
    type: 'PDO Cog',
    gauge: '27G',
    length: '۶۰ / ۸۰ میلی‌متر',
    desc: 'دارای خارهای یک‌طرفه و دوطرفه برای لیفت قوی‌تر',
    seed: 'steigen-cog-b',
  },
  {
    name: 'نخ اسپرینگ استایژن',
    type: 'PDO Spring',
    gauge: '28G',
    length: '۵۰ میلی‌متر',
    desc: 'فنر شکل برای حجم‌دهی و بازسازی کلاژن',
    seed: 'steigen-spring-c',
  },
  {
    name: 'نخ پی‌سی‌ال استایژن',
    type: 'PCL',
    gauge: '26G',
    length: '۷۰ / ۹۰ میلی‌متر',
    desc: 'ماندگاری ۱۸ تا ۲۴ ماه با تحریک قوی کلاژن',
    seed: 'steigen-pcl-d',
  },
  {
    name: 'ست کامل لیفت فک',
    type: 'Combination',
    gauge: 'متنوع',
    length: 'متنوع',
    desc: 'مجموعه کامل برای لیفت یکپارچه فک و خط گردن',
    seed: 'steigen-jaw-e',
  },
  {
    name: 'کیت مبتدی استایژن',
    type: 'Starter Kit',
    gauge: '۲۹G',
    length: 'مجموعه',
    desc: 'شامل ۱۰ نخ مونو + ۵ نخ کوگ + ابزار مورد نیاز',
    seed: 'steigen-kit-f',
  },
];

export interface EducationModule {
  title: string;
  duration: string;
  level: string;
  lessons: number;
  icon: string;
}

export const educationModules: EducationModule[] = [
  {
    title: 'اصول پایه نخ‌های لیفت PDO',
    duration: '۴۵ دقیقه',
    level: 'مقدماتی',
    lessons: 6,
    icon: 'book-open',
  },
  {
    title: 'تکنیک‌های پیشرفته لیفت ابرو',
    duration: '۶۰ دقیقه',
    level: 'پیشرفته',
    lessons: 8,
    icon: 'target',
  },
  {
    title: 'لیفت فک و خط گردن با PCL',
    duration: '۷۵ دقیقه',
    level: 'پیشرفته',
    lessons: 10,
    icon: 'scan-face',
  },
  {
    title: 'مدیریت عوارض و مراقبت‌های بعدی',
    duration: '۳۰ دقیقه',
    level: 'متوسط',
    lessons: 4,
    icon: 'shield-check',
  },
  {
    title: 'آناتومی صورت برای تزریق‌های زیبایی',
    duration: '۹۰ دقیقه',
    level: 'تخصصی',
    lessons: 12,
    icon: 'brain',
  },
  {
    title: 'بازاریابی و جذب بیمار برای کلینیک',
    duration: '۴۰ دقیقه',
    level: 'مقدماتی',
    lessons: 5,
    icon: 'trending-up',
  },
];

export interface SpecItem {
  feature: string;
  pdo: string;
  pcl: string;
}

export const specsData: SpecItem[] = [
  { feature: 'زمان جذب کامل', pdo: '۶ تا ۸ ماه', pcl: '۱۸ تا ۲۴ ماه' },
  { feature: 'استحکام کششی', pdo: 'متوسط', pcl: 'بسیار بالا' },
  { feature: 'تحریک کلاژن', pdo: 'خوب', pcl: 'عالی' },
  { feature: 'کاربرد اصلی', pdo: 'لیفت ملایم و بازسازی', pcl: 'لیفت ساختاری و قوی' },
  { feature: 'حساسیت بافتی', pdo: 'کم', pcl: 'بسیار کم' },
  { feature: 'قطر سوزن', pdo: '۲۷G تا ۲۹G', pcl: '۲۶G' },
  { feature: 'مناسب برای', pdo: 'ابرو، گونه، خط فک ملایم', pcl: 'فک، گردن، میان‌تنه' },
  { feature: 'هزینه نسبت به اثربخشی', pdo: 'اقتصادی', pcl: 'پریمیوم' },
];