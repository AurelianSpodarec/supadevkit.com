import dataNavigation from "@/app/(editor)/_components/Header/dataNavigation"
import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"


function Home() {
  return (
    <main>

      <section>
        <h1>The ultimate developers kit in one place</h1>
        <p>Use GUI to create complex code, format code or refactor</p>

        <span>Subscribe <input /></span>
        <span>No spam, just tools</span>
      </section>

      <section>

      </section>

      <Section>
        <Container>

          {dataNavigation.map((topic) => {
            return (
              <div key={topic.id}>
                <div className="flex items-center">
                  <span className="w-20 h-20">{topic.icon}</span>
                  <span className="font-semibold text-4xl">{topic.name}</span>
                </div>

                {topic.children?.map((item) => {
                  return (
                    <div key={item.name}>
                      {item.name}
                    </div>
                  )
                })}
              </div>
            )
          })}

        </Container>
      </Section>
    </main>
  )
}

export default Home
