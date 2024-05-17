import SectionDivider from "@/components/section-divider";
import Intro from "./intro/page";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
    </main>
  )
}
