import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"
import dataFeatures from "./dataFeatures"

function SectionFeatures() {
  return (
    <Section>
      <Container>

        <div className="grid grid-cols-3">
          {dataFeatures.map((item) => {
            return (
              <div>
                {item.title}
                {item.content}
              </div>
            )
          })}
        </div>

          Editable tweet with different personas on the left

      </Container>
    </Section>
  )
}

export default SectionFeatures
