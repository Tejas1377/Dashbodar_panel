import React from 'react'
import CrmCard from './CrmCard'
import CrmChart from './CrmChart'
import CrmStatsCards from './CrmStatsCards'
import CrmTicketsUpdate from './CrmTicketsUpdate'
import CrmActivites from './CrmActivites'

const Crm = () => {
  return (
    <div>
        <CrmCard />
        <CrmChart />
        <CrmStatsCards />
        <CrmTicketsUpdate />
        <CrmActivites />
        
    </div>
  )
}

export default Crm