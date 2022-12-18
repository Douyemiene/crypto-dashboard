import { ref } from 'vue'
import { defineStore } from 'pinia'
import IconBitcoinLargeVue from '@/assets/icons/IconBitcoinLarge.vue'
import IconTetherVue from '@/assets/icons/IconTether.vue'
import IconDashVue from '@/assets/icons/IconDash.vue'
import IconLitecoinVue from '@/assets/icons/IconLitecoin.vue'

export interface IDashboardTotal {
  title: string
  value: string
  percentageValue: number
  positive: boolean
}

export interface IPriceMovement {
  coin: string
  icon: any
  price: string
  percentageValue: number
  positive: boolean
}

export interface ILog {
  activity: string
  ip: string
  date: string
}

const dashboardTotalValues: IDashboardTotal[] = [
  {
    title: 'Total users',
    value: '50,450',
    percentageValue: 4,
    positive: true,
  },
  {
    title: 'Trades',
    value: '₦ 10.55bn',
    percentageValue: 4,
    positive: true,
  },
  {
    title: 'Deposits',
    value: '₦ 49,300,450',
    percentageValue: 4,
    positive: true,
  },
  {
    title: 'Withdrawals',
    value: '₦ 10.55bn',
    percentageValue: 5,
    positive: false,
  },
]

const activityLogs: ILog[] = [
  {
    activity: 'Joseph Admin just logged in',
    ip: 'IP address: 00.000.00.0',
    date: 'May 35th 2022, 08:08:45 PM',
  },
  {
    activity: 'You logged in',
    ip: 'IP address: 00.000.00.0',
    date: 'May 35th 2022, 08:08:45 PM',
  },
  {
    activity: 'You logged in',
    ip: 'IP address: 00.000.00.0',
    date: 'May 35th 2022, 08:08:45 PM',
  },
  {
    activity: 'You logged in',
    ip: 'IP address: 00.000.00.0',
    date: 'May 35th 2022, 08:08:45 PM',
  },
  {
    activity: 'You logged in',
    ip: 'IP address: 00.000.00.0',
    date: 'May 35th 2022, 08:08:45 PM',
  },
  {
    activity: 'You logged in',
    ip: 'IP address: 00.000.00.0',
    date: 'May 35th 2022, 08:08:45 PM',
  },
  {
    activity: 'You logged in',
    ip: 'IP address: 00.000.00.0',
    date: 'May 35th 2022, 08:08:45 PM',
  },
  {
    activity: 'You logged in',
    ip: 'IP address: 00.000.00.0',
    date: 'May 35th 2022, 08:08:45 PM',
  },
  {
    activity: 'Joseph Admin just logged in',
    ip: 'IP address: 00.000.00.0',
    date: 'May 35th 2022, 08:08:45 PM',
  },
  {
    activity: 'Joseph Admin just logged in',
    ip: 'IP address: 00.000.00.0',
    date: 'May 35th 2022, 08:08:45 PM',
  },
  {
    activity: 'Joseph Admin just logged in',
    ip: 'IP address: 00.000.00.0',
    date: 'May 35th 2022, 08:08:45 PM',
  },
]

const priceMovement: IPriceMovement[] = [
  {
    coin: 'BTC',
    icon: IconBitcoinLargeVue,
    price: '₦ 16,000,000',
    percentageValue: 5,
    positive: true,
  },
  {
    coin: 'USDT',
    icon: IconTetherVue,
    price: '₦ 602',
    percentageValue: 5,
    positive: false,
  },
  {
    coin: 'DASH',
    icon: IconDashVue,
    price: '₦ 9,433',
    percentageValue: 5,
    positive: true,
  },
  {
    coin: 'LTC',
    icon: IconLitecoinVue,
    price: '₦ 44,588',
    percentageValue: 5,
    positive: true,
  },
]

export const useDashboardStore = defineStore('dashboard', () => {
  const totals = ref(dashboardTotalValues)
  const activities = ref(activityLogs)

  return { totals, activities, priceMovement }
})
