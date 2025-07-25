import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard 
        id="123"
        name="Neura the Brainy Explorer"
        topic="Neural Network of Brain"
        subject="sceince"
        duration={45}
        color="#ffda6e"
        />

        <CompanionCard 
        id="456"
        name="Countsy the Number Wizard"
        topic="Derivatives & Integrations"
        subject="maths"
        duration={30}
        color="#6effe0ff"
        />

        <CompanionCard 
        id="789"
        name="Verba the Vocab Builder"
        topic="English Literature"
        subject="Language"
        duration={30}
        color="#dd94ffff"
        />
        
      </section>

      <section className="home-section">
        <CompanionsList/>
        <CTA/>
      </section>
      
    </main>
  )
}

export default Page