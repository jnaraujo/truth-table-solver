import Footer from "@/components/footer"
import Header from "@/components/header"
import Table from "@/components/table"
import UsageTip from "@/components/usage-tip"

export default function Home() {
  return (
    <div className="container mx-auto mt-10 flex max-w-screen-md flex-1 flex-col">
      <Header />

      <main className="w-full">
        <Table />
      </main>

      <UsageTip className="mt-12" />

      <Footer />
    </div>
  )
}
