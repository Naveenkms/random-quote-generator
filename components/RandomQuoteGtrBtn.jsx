import { useDispatch } from "react-redux";
import {  updateQuotes } from '@/store/quoteSlice';

const RandomQuoteGtrBtn = () => {
    const dispatch = useDispatch();
    const handleClick = async() => {
        try{
            const response = await fetch("https://api.quotable.io/random");
            const data = await response.json();
            dispatch(updateQuotes(data))
        } catch(error) {
            console.log(error)
        }
    }
  return (
    <button onClick={handleClick} className="bg-[#009c51] p-3 w-1/4 mx-auto rounded-xl">Next Quote</button>
  )
}

export default RandomQuoteGtrBtn