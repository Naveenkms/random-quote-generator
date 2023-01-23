import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import QuoteCard from '@/components/QuoteCard'
import DropDownBtn from '@/components/DropDownBtn'
import RandomQuoteGtrBtn from '@/components/RandomQuoteGtrBtn'

import { useEffect } from 'react';
import { updateQuotes } from '@/store/quoteSlice';
import { updateTags } from '@/store/tagsSlice'
import { useDispatch } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch();
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
  },[])

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
  }, [])

  return (
    <>
      <Head>
        <title>Random Quote Generator</title>
        <meta name="description" content="Random Quote Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className='bg-primary-color h-screen text-white'>
      <article className="flex flex-col justify-evenly h-full max-w-3xl mx-auto">
        <QuoteCard />
        <DropDownBtn />
        <RandomQuoteGtrBtn />
      </article> 
      </main>
    </>
  )
}
