import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Experience - Kathan Mehta</title>
        <meta
          name="description"
          content="If you are looking for your next guest speaker, I'm your girl!"
        />
      </Head>
      <SimpleLayout
        title="My Professional Journey in Tech"
        intro="Embarking on a path filled with innovation, leadership, and development, my career in technology spans various roles and achievements. Here's a glimpse into my professional experiences."
      >
        <div className="space-y-20">
          <SpeakingSection title="Lead Software Engineer at Royal Labs, LLC – Remote (2024 – Present)">
            <Appearance
              href=""
              title="Pitch Deck Analysis Software Development"
              description="Tasked with leading the development and launch of a software aimed at analyzing and improving pitch decks. Utilized a comprehensive toolset including NPM v9, Node v18, Next.js v14, Tailwind CSS, Nx Monorepo v16, AWS Supabase, Vercel, Zapier, Segment.io, Mixpanel, Google Analytics, OpenAI, and Lemon Squeezy."
              event="Royal Labs, LLC"
              cta="Ongoing"
            />
          </SpeakingSection>
          <SpeakingSection title="N&W Builder/Apprentice at Buildspace – San Francisco, CA (2023 – Present)">
            <Appearance
              href=""
              title="Revolutionary Product Development"
              description="Selected to collaborate with over 18,000 developers globally on a revolutionary product. Secured over $10K in Microsoft for Startup credits, launched 5 Buildspace and OpenAI-powered SaaS products, engaged with over 10,000 users, and led a team including 2 interns and various freelancers."
              event="Buildspace"
              cta="Ongoing"
            />
          </SpeakingSection>
          <SpeakingSection title="Team Leader at Buyer Folio – Toronto, ON (2023)">
            <Appearance
              href=""
              title="Financial DNA App Development"
              description="Developed a parallel calculation engine for the world’s first Financial DNA app in the real-estate industry. Applied Agile principles, and employed tools like React Native, Styled Components, MongoDB, Axios, and PayPal."
              event="Buyer Folio"
              cta="Completed"
            />
          </SpeakingSection>
          <SpeakingSection title="Full Stack Developer at Western PU Industries – Gujarat, IN (2020 – 2021)">
            <Appearance
              href=""
              title="MERN Stack Web Development"
              description="Developed responsive websites using the MERN stack, optimizing workflows with Git, Jenkins, and Docker. Tailored solutions to meet evolving needs and industry standards."
              event="Western PU Industries"
              cta="Completed"
            />
          </SpeakingSection>
          <SpeakingSection title="IT Consultant at JK Filters India – Gujarat, IN (2019 – 2020)">
            <Appearance
              href=""
              title="Website Development and Team Collaboration"
              description="Launched 3 websites, ensuring seamless online experiences and successful delivery through collaboration with cross-functional teams."
              event="JK Filters India"
              cta="Completed"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
