import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import youphoria from '@/images/logos/YOUphoria.png'
import orb from '@/images/logos/orb.gif'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoHeart from '@/images/logos/gwc.png'

const projects = [
  {
    name: 'Reachactory: SaaS/AI tool distribution platform (revenue of $1.5K+)',
    description:
      "Developed with Next.js, React, and Tailwind CSS for optimal UI/UX. Utilizes Vercel, Buildspace, and Stripe for advanced functionality. Agile methodologies guide the development process, with designs in Figma and version control via GitHub.",
    link: {
      href: 'https://reachactory.online',
      label: 'Online',
    },
    logo: logoOpenShuttle,
  },
  {
    name: 'Logo Maker AI',
    description:
      'Crafted in Figma for a stunning UI and built with Next.js and Tailwind CSS for dynamic, responsive design. Optimized on Vercel with Stripe and Replicate API integration for seamless user experience. Backend powered by Node.js, Express, and MongoDB ensures efficient data handling, while Google API enhances security for user authentication.',
    link: {
      href: 'https://github.com/DarkInventor/logomaker',
      label: 'Github',
    },
    logo: orb,
  },
  {
    name: 'Instagen: Bringing Vision to Life',
    description:
      "Crafted an intuitive UI/UX with precision, guided by Figma's design principles. Unveiled the innovative Image Describer + Instagram Caption Generator, providing users with curated GPT-generated content. Built using Next.js, Tailwind CSS, and integrated with GPT-3 for dynamic content generation.",
    link: { href: 'https://github.com/DarkInventor/InstaCaption', label: 'Github' },
    logo: logoHeart,
  },
  {
    name: 'Buildfast (Monthly Revenue: $20, Annual Revenue: $240)',
    description:
      'A user-centric platform designed in Figma and developed with React, JavaScript, and Tailwind CSS. Features dynamic landing pages powered by Vercel, OpenAI Vision API, and DALL·E 3. Collaborative design and development facilitated through Figma and GitHub, with Firebase ensuring efficient data management.',
    link: {
      href: 'https://buildfast.site',
      label: 'Online',
    },
    logo: logoAnimaginary,
  },
  {
    name: 'Boilerplate',
    description:
      'A light-weight version of taxonomy to build SaaS superfast. Utilizes Shad-CN UI, Next.js 14, TypeScript, Prisma, PlanetScale, NextAuth, and Stripe for a comprehensive development experience.',
    link: {
      href: 'https://boilerplatee.vercel.app/',
      label: 'Online',
    },
    logo: logoHeart, // Updated logo variable
  },
  {
    name: 'Designfast',
    description:
      'A comprehensive Figma Design Kit featuring over 100 components, 15 Landing Pages, and 10 Full Design templates. Built with Next.js, Tailwind CSS, and integrated with Stripe for a seamless design to development workflow.',
    link: {
      href: 'https://www.designfast.site/',
      label: 'Online',
    },
    logo: orb, // Updated logo variable
  },
  {
    name: 'Air-Quality',
    description:
      'The Air-Quality project forecasts PM2.5 & PM10 levels using Python, integrating Pandas and NumPy for data preprocessing and analytics. Advanced regression models enable precise, real-time environmental insights.',
    link: {
      href: 'https://github.com/DarkInventor/Air-Quality',
      label: 'Github',
    },
    logo: logoOpenShuttle, // Updated logo variable
  },
  {
    name: 'WindowsAssistant',
    description:
      'An innovative Python-based personal assistant, WindowsAssistant simplifies daily tasks through advanced looping, leveraging pyttsx3 for voice interactions, and TensorFlow for intelligent decision-making.',
    link: {
      href: 'https://github.com/DarkInventor/WindowsAssistant',
      label: 'Github',
    },
    logo: logoAnimaginary, // Updated logo variable
  },
  {
    name: 'VisionSystem',
    description:
      'VisionSystem is a cutting-edge solution for individuals with visual impairments, leveraging Python, OpenCV, and YOLO for real-time object detection. Built on a Raspberry Pi 4B, it integrates a camera, speaker, motion, and pulse sensors to provide auditory feedback, enhancing spatial awareness and interaction with the environment.',
    link: {
      href: 'https://github.com/DarkInventor/VisionSystem',
      label: 'Github',
    },
    logo: youphoria, // Updated logo variable
  },
  // {
  //   name: 'OpenShuttle',
  //   description:
  //     'The schematics for the first rocket I designed that successfully made it to orbit.',
  //   link: { href: '#', label: 'github.com' },
  //   logo: logoOpenShuttle,
  // },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Kathan Mehta</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="A couple of my favorite personal projects."
        intro={
          <>
            <p>This summer, I learned about the trifecta that is React, Next.js, and TailwindCSS. I haven&apos;t looked back since!</p>
            <p className="mt-4">Diving deeper, I&apos;ve honed my skills across a broad spectrum of technologies:</p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Languages:</strong> HTML, CSS, JavaScript, TypeScript, Python</li>
              <li><strong>Frameworks:</strong> React, Next.js, Tailwind CSS, React Native, Node.js, Express, jQuery, WordPress, Shopify</li>
              <li><strong>Tools:</strong> Git, AWS, GCP, Azure, Docker, CI/CD</li>
              <li><strong>AI:</strong> OpenAI, Dall-E, LLAMA Meta AI, Langchain SDK, Vercel AI SDK, Finetuning Models, Embedding</li>
              <li><strong>Database/Management:</strong> MySQL, PostgreSQL, MongoDB, Firebase, Supabase</li>
              <li><strong>Deployment Platforms:</strong> AWS, Render, Cloudflare, Huggingface</li>
              <li><strong>Python Based Web:</strong> FastAPI, Flask, Streamlit</li>
              <li><strong>Payment Integrations:</strong> Stripe, PayPal, Lemon Squeezy</li>
            </ul>
            <p className="mt-4">Embracing these <strong>TECHNICAL SKILLS</strong> has empowered me to create and contribute to projects that are not only functional but also cutting-edge.</p>
          </>
        }
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 rounded-full"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
