import Section from "@/components/_layout/Section"
import Container from "@/components/_layout/Container"

import PageHeader from "@/components/molecules/PageHeader"
import dataClients from "./dataClients"

function LogoItem({ item }) {
  return (
    <div className="col-span-1 flex justify-center items-center bg-gray-50 py-8 px-8">
      <img src={`./images/${item.image}`} alt={item.title} />
    </div>
  )
}

function SectionClients() {
  return (
    <Section>
      <Container>

        <PageHeader
          kicker=""
          title="Trusted by Over 100+ BIGGEST and BEST Companies in the World. Or so we claim... 🤷"
          subheader=""
        />

        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          {dataClients.map((item) => <LogoItem item={item} />)}
        </div>

        <p className="text-center">These companies may not know we even exist. And that’s okay.</p>

      </Container>
    </Section>
  )
}

export default SectionClients
