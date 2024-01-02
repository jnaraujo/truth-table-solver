import Footer from "@/components/footer"
import Header from "@/components/header"
import Navbar from "@/components/navbar"
import Table from "@/components/table"
import UsageTip from "@/components/usage-tip"

export default function Home() {
  return (
    <div className="container mx-auto flex max-w-screen-md flex-1 flex-col">
      <Navbar />

      <Header />

      <main id="tts" className="w-full">
        <Table />
      </main>

      <UsageTip className="mt-12" />

      <Footer />
    </div>
  )
}
