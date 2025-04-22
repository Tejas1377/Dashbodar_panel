import React from 'react'
import HomeCard from './HomeCard'
import HomeChart from './HomeChart'
import HomeSalesActivity from './HomeSalesActivity'
import HomeUpdatesInformation from './HomeUpdatesInformation'
import SocialStatsCard from './SocialStatsCard'

const Home = () => {
  return (
    <div>
        <HomeCard />
        <HomeChart />
        <HomeSalesActivity />
        <HomeUpdatesInformation />
        <SocialStatsCard />
    </div>
  )
}

export default Home