import React from 'react'
import columnsContainer from '../columns-container'
import TechnologyCard from './TechnologyCard'
import './css/SectionTwo.css'
import Table from './Table'

const SectionTwo = () => {
  return (
    <section>
      <h2>At a glance</h2>
      <div className='columns-container'>
        {
          columnsContainer.map((item) =>
            <TechnologyCard key={item.title} {...item} />
          )
        }
      </div>
      <Table />
    </section>
  )
}

export default SectionTwo
