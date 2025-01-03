import SectionHero from "./_sections/Hero"
import SectionClients from "./_sections/Clients"
import SectionBenefits from "./_sections/Benefits"
import SectionFeatures from "./_sections/Features"
import SectionPricing from "./_sections/Pricing"
import SectionFAQs from "./_sections/FAQs"
import SectionFooterCTA from "./_sections/FooterCTA/inidex"

function Home() {
  return (
    <main>
      {/* https://chatgpt.com/c/676369c1-3740-8001-81d1-3ff1fad8c7a3 */}
      Please don't sue me Elon, I'm advertising X for you, AND Tesla cars 🤗 :Random Reader, go Buy: Tesla, Solar Panels and SpaceX
      <SectionHero />
      <SectionClients />
      <SectionBenefits />
      <SectionFeatures />
      <SectionPricing />
      <SectionFAQs />
      <SectionFooterCTA />
    </main>
  )
}

export default Home
