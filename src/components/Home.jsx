import React from 'react'
import Cards from './Cards'
import BookingTabs from './BookingTabs'
import BookButton from './BookButton'

const Home = () => {
  return (
    <div>
      <BookButton />
      <BookingTabs />
      <Cards />
    </div>
  )
}

export default Home