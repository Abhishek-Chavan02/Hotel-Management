import React from 'react'
import Cards from '../components/Cards'
import BookingTabs from './BookingTabs'
import AboutUs from '../aboutUs/AboutUs'


const Home = () => {
  return (
    <div>

      <AboutUs />
      <BookingTabs />
      <Cards />
    </div>
  )
}

export default Home