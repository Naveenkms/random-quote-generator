import { updateBookmarks } from '@/store/bookmarksSlice';
import { BookmarkIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';


const QuoteCard = ({bookmark = false}) => {
    const {content: quote, author, _id} = useSelector((state) => state.quote.value)
    const dispatch = useDispatch();
    const [click, setClick] = useState(false);

    useEffect(() => {
        setClick(false)
    },[quote, author, _id])

    const handleClick = () => {
        setClick(prev => !prev);
        dispatch(updateBookmarks({quote, author, _id}))
    }
    if(bookmark) {
        return(
            <div className="bg-secondary-color p-2 md:p-12 rounded-xl my-4">
            <blockquote>
                {bookmark ? bookmark.quote : <Loading />}
            </blockquote>
            <div className="flex justify-end">
            <div className="flex items-center justify-between md:w-1/2 ">
                <h6 className="md:mr-24">{bookmark.author}</h6>
                <BookmarkIcon  className="h-4" fill="#fff" />
            </div>
            </div>
        </div>
        )
    } else {
        return (
            <div className="bg-secondary-color p-3 md:p-12 rounded-xl">
                <blockquote>
                    {quote ? quote : <Loading />}
                </blockquote>
                <div className="flex md:justify-end my-3">
                    <div className="flex items-center justify-between w-full md:w-1/2 ">
                        <h6 className="md:mr-24">{author}</h6>
                        <BookmarkIcon onClick={handleClick} className="h-4" fill={click ? "#fff" : "#000"} />
                    </div>
                </div>
            </div>
          )
    }
 
}

export default QuoteCard