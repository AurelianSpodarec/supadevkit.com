import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"
import PageHeader from "@/components/molecules/PageHeader"
import { dataPricing } from "./dataPricing"


function PricingCard({ item }: { item: IPricingItem }) {
  return (

    <div className={`h-full p-6 rounded-lg bg-[#f1f1f1] border-2 ${item.highlight ? "border-[#913c6d] scale-[1.05]" : "border-[#ededed]"}  flex flex-col relative`}>

      <div className="mb-4">
        <div className="flex items-center justify-between align-center">
          <h2 className="text-2xl tracking-widest title-font mb-1 font-bold">{item.name}</h2>
          {item.highlight &&
            <div className="absolute right-[-13px] rotate-12 text-sm top-[0px] bg-[#1b263d]  py-1.5 px-4 rounded-2xl text-white">
              Best for you, trust me
            </div>
          }
        </div>
        <p className="">{item.description}</p>
      </div>

      <div className="mt-2 mb-6">
        <span className="text-lg text-gray-600 font-playFair">starting at</span>
        <div>
          <h1 className="text-6xl font-bold text-gray-900 font-playFair leading-none">
            {item.price.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            <span className="text-lg">{item.priceOption ? "/m" : ""}</span>
          </h1>
        </div>
        {/* <p className="text-xs text-gray-500 mb-4">Contact us for a tailored quote based on your needs.</p> */}
        <p className="text-xs text-gray-500 mb-4">Contact us so we can get your email</p>
      </div>

      <div className="flex flex-col mb-6">
        <button className={`font-bold py-4 px-6 ${item.highlight ? "bg-[#913c6d] text-white " : "border-2 border-[#3b3b3b] text-[#3b3b3b]"}  rounded-xl mb-2`}>
          Schedule a paid Consultation
        </button>
        <button className="underline decoration-dotted hover:decoration-solid font-semibold">
          or send an email →
        </button>
      </div>


      {item.services.map((service, index) => {
        return (
          <p className="flex items-center mb-2" key={index}>
            {/* <span className="text-white fill-white"> */}
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#aa4780] bg-opacity-20 text-[#aa4780] rounded-full flex-shrink-0">
              {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg> */}
              {/* ✔ */}
            </span>
            <span className="text-[#12141d]">
              {service.name}
            </span>
          </p>
        )
      })}


    </div>

  )
}

function SectionPricing() {
  return (
    <Section>
      <Container>

        <PageHeader
          kicker=""
          title="Simple & transparent pricing"
          subheader=""
        />

        <div className="grid grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
          {dataPricing.map((item, index) => {
            return <PricingCard item={item} key={index} />
          })}
        </div>

        {/* Pricing
        We believe everyone deserves a little mischief, so we’ve got options:


        Basic Illusionist
        ₹0/month (Approx. £0.00)
        Write
        Edit
        Click
        Download
        Upload Image



        Master Crafter
        ₹5/month (Approx. £0.01)

        Everything in Basic Illusionist plus
        Unlimited tweet crafting



        Legendary Trickster
        ₹10/month (Approx. £0.09)

        Everything in Master Crafter plus
        Status "Legendary Trickster"(go share it on social media)
        Also Support to a lawyer at your expense













        Basic Illusionist
        ₹0/month (Approx. £0.00)

        Craft your masterpiece with:
        Write: Bring your ideas to life.
        Edit: Polish your creations to perfection.
        Click: One-click magic to transform imagination into reality.
        Download: Save your work with ease.
        Upload Image: Share your brilliance anywhere.
        Simple. Efficient. Free.

        Master Crafter
        ₹5/month (Approx. £0.01)
        Everything in Basic Illusionist, plus:

        Unlimited tweet crafting: Because genius shouldn’t have limits.
        Enhanced experience: No watermarks, just pure you.
        Elevate your craft without breaking the bank—or a sweat.

        Legendary Trickster
        ₹10/month (Approx. £0.09)
        Everything in Master Crafter, plus:

        Legendary status: Flaunt your official “Legendary Trickster” title—perfect for humblebragging on social media.
        Legal assistance: Access to a solicitor (at your expense, naturally) should your creative liberties lead to... misunderstandings.
        Take your tweeting to mythical levels—responsibility not included. */}

      </Container>
    </Section>
  )
}

export default SectionPricing
