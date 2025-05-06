import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreProdt from '../../components/ExploreProdt/ExploreProdt'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <ExploreProdt setCategory={setCategory} category={category}/>
      <ProductDisplay category={category}/>
      <AppDownload/>
    </>
  )
}

export default Home
