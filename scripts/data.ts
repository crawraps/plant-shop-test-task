type Dignity = {
  id: number
  icon: string
  title: string
  subtitle: string
}

type Plant = {
  id: number
  icon: string
  title: string
  subtitle: string
}

type Entry = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const dignities: Array<Dignity> = [
  {
    id: 0,
    icon: './assets/images/dignity-1.svg',
    title: 'Fast &#10 Delivery',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard`,
  },
  {
    id: 1,
    icon: './assets/images/dignity-2.svg',
    title: 'Great Customer &#10 Service',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard`,
  },
  {
    id: 2,
    icon: './assets/images/dignity-3.svg',
    title: 'Original &#10 Plants',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard`,
  },
  {
    id: 3,
    icon: './assets/images/dignity-4.svg',
    title: 'Affordable &#10 Price',
    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard`,
  },
]

const plants: Array<Plant> = [
  {
    id: 0,
    icon: './assets/images/product-1.jpg',
    title: 'Kaktus Plants',
    subtitle: 'IDR 85.000',
  },
  {
    id: 1,
    icon: './assets/images/product-2.jpg',
    title: 'Landak Plants',
    subtitle: 'IDR 105.000',
  },
  {
    id: 2,
    icon: './assets/images/product-3.jpg',
    title: 'Kecubung Plants',
    subtitle: 'IDR 85.000',
  },
  {
    id: 3,
    icon: './assets/images/product-4.jpg',
    title: 'Kecubung Plants',
    subtitle: 'IDR 85.000',
  },
  {
    id: 4,
    icon: './assets/images/product-5.jpg',
    title: 'Kecubung Plants',
    subtitle: 'IDR 85.000',
  },
]
