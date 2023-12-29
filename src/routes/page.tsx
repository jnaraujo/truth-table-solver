import Footer from "@/components/footer"
import Header from "@/components/header"
import Table from "@/components/table"

export function Component() {
  return (
    <>
      <div className="mx-auto mt-10 flex w-full max-w-screen-sm flex-col items-center gap-4 p-4">
        <Header />
        <main className="w-full">
          <Table />
        </main>
      </div>

      <Footer />
    </>
  )
}
