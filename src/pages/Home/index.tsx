import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import fifa23 from '../../assets/images/Fifa-2023.png'
import starWars from '../../assets/images/star_wars.png'
import { useEffect, useState } from 'react'
import Categories from '../Categories'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductList games={onSaleGames} title="Promoções" background="gray" />
        <ProductList games={soonGames} title="Em breve" background="black" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home