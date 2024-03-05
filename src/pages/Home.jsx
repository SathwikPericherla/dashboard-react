import React from 'react'
import { Cards } from "../components/home/Cards"
import { Graph_Up } from "../components/home/Graph_Up"
import { LatestActivity } from "../components/home/LatestActivity"

export const Home = () => {
  return (
    <div className='p-4'>
      <div className='p-4'><Cards /></div>
      <div className='p-4'><Graph_Up/> </div>

      <div> <LatestActivity /> </div>


    </div>
  )
}


