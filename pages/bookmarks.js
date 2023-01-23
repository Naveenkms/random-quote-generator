import Header from "@/components/Header"
import QuoteCard from "@/components/QuoteCard"
import Head from "next/head"
import { useSelector } from "react-redux"


const Bookmarks = () => {
    const bookmarks = useSelector((state) => state.bookmarks.value)
  return (
    <>
    <Head>
    <title>Random Quote Generator</title>
    <meta name="description" content="Random Quote Generator" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Header />
  <main className='bg-primary-color text-white'>
  <article className="flex flex-col justify-around max-w-3xl mx-auto">
    {bookmarks.length != 0 
        ? bookmarks.map(bookmark => <QuoteCard key={bookmark._id} bookmark={bookmark} />)
        : <h1 className="h-screen text-secondary-color text-6xl font-bold flex justify-center items-center">No Bookmarks</h1>
    }
  </article> 
  </main>
    </>
  )
}

export default Bookmarks