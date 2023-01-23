import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import QuoteCard from '@/components/QuoteCard'
import DropDownBtn from '@/components/DropDownBtn'
import RandomQuoteGtrBtn from '@/components/RandomQuoteGtrBtn'

import { useEffect, useState } from 'react';
import { updateQuotes } from '@/store/quoteSlice';
import { updateTags } from '@/store/tagsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addBookmarks, removeBookmarks } from '@/store/bookmarksSlice'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch();
  const bookmarks = useSelector(state => state.bookmarks.value);
  const [bookmarked, setBookmarked] = useState(false)
 console.log("bookmarks>>",bookmarks)
  
  useEffect(() => {
    const fetchQuote = async() => {
      try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        dispatch(updateQuotes(data))
      } catch (error) {
        console.error(error);
      }
    }
    fetchQuote();
  },[dispatch])

  useEffect(() => {
    const fetchTags = async() =>{
      try {
        const response = await fetch("https://api.quotable.io/tags");
        const data = await response.json();
        dispatch(updateTags(data))
      } catch(error) {
        console.log(error)
      }
    }
    fetchTags();
  }, [dispatch]);

const toggleBookmark = (_id, quote, author) => {
  const isBookmarked = bookmarks.find(item => item._id === _id);
console.log("isBookmarked>>",isBookmarked)
  if(isBookmarked) {
    dispatch(removeBookmarks({_id}));
    setBookmarked(false)
  } else {
    dispatch(addBookmarks({_id, quote, author}));
    setBookmarked(true)
  }
}

const handleBookmarked = () => {
  setBookmarked(false);
}


  return (
    <>
      <Head>
        <title>Random Quote Generator</title>
        <meta name="description" content="Random Quote Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className='bg-primary-color h-screen text-white px-6'>
      <article className="flex flex-col justify-evenly h-full md:max-w-3xl mx-auto">
         <QuoteCard bookmarked={bookmarked} toggleBookmark={toggleBookmark} />
         <DropDownBtn handleBookmarked={handleBookmarked} />
         <RandomQuoteGtrBtn toggleBookmark={toggleBookmark} handleBookmarked={handleBookmarked} />
      </article> 
      </main>
    </>
  )
}
