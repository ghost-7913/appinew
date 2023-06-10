import { Inter } from 'next/font/google'
import Header from '@/layout/Header'
import MainSlider from '@/component/home/MainSlider'
import MainCategory from '@/component/home/MainCategory'
import AmazingOffer from '@/component/home/AmazingOffer'
import Offer from '@/component/home/Offer'
import CentralStore from '@/component/home/CentralStore'
import ShoesOffer from '@/component/home/ShoesOffer'
import MiniMarket from '@/component/home/MiniMarket'
import MostSeller from '@/component/home/MostSeller'
import TopStore from '@/component/home/TopStore'
import SecondSlider from '@/component/home/SecondSlider'
import Categories from '@/component/home/Categories'
import ThirdOffer from '@/component/home/ThirdOffer'
import Propozal from '@/component/home/Propozal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <MainSlider />
      <MainCategory />
      <AmazingOffer/>
      <Offer/>
      <CentralStore/>
      <ShoesOffer/>
      <MiniMarket/>
      <MostSeller/>
      <TopStore/>
      <SecondSlider/>
      <Categories/>
      <ThirdOffer/>
      <Propozal/>
    </main>
  )
}
