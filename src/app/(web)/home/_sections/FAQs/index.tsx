import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"
import dataFAQs from "./dataFAQs"
import AccordionBasic from "@/components/molecules/Accordion"

function SectionFAQs() {
  return (
    <Section>
      <Container>
        <AccordionBasic type="multiple" data={dataFAQs} />
      </Container>
    </Section>
  )
}

export default SectionFAQs
