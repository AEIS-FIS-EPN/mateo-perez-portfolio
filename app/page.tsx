import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sn:px-6 md:max-w-5xl'>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}
