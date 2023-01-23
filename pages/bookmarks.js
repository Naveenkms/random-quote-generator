import Header from "@/components/Header"
import QuoteCard from "@/components/QuoteCard"
import { addBookmarks, removeBookmarks } from "@/store/bookmarksSlice"
import Head from "next/head"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useAutoAnimate } from '@formkit/auto-animate/react'


const Bookmarks = () => {
    const bookmarks = useSelector((state) => state.bookmarks.value);
    const dispatch = useDispatch();
    const [bookmarked, setBookmarked] = useState(true);
    const [parent, enableAnimations] = useAutoAnimate();

    const toggleBookmark = (_id, quote, author) => {
      const isBookmarked = bookmarks.find(item => item._id === _id);
    console.log("isBookmarked>>",!!isBookmarked)
      if(!!isBookmarked) {
        dispatch(removeBookmarks({_id}));
        setBookmarked(false)
      } else {
        dispatch(addBookmarks({_id, quote, author}));
        setBookmarked(true)
      }
    }
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
  <article ref={parent} className="flex flex-col justify-around max-w-3xl mx-auto">
    {bookmarks.length !== 0 
        ? bookmarks.map(bookmark => <QuoteCard key={bookmark._id} bookmark={bookmark} bookmarked={bookmarked} toggleBookmark={toggleBookmark} />)
        : <h1 className="h-screen text-secondary-color text-6xl font-bold flex justify-center items-center">No Bookmarks</h1>
    }
  </article> 
  </main>
    </>
  )
}

export default Bookmarks