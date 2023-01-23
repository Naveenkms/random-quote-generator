import { BookmarkIcon } from '@heroicons/react/24/solid';
import { TrashIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Loading from './Loading';


const QuoteCard = ({bookmarked = false, toggleBookmark, bookmark = false}) => {
    const {content: quote, author, _id} = useSelector((state) => state.quote.value);
    const router = useRouter();
    const { pathname } = router;
    if(pathname === "/bookmarks") {
        return(
            <div className="bg-secondary-color p-3 md:p-12 my-4 rounded-xl">
                <blockquote>
                    {bookmark && bookmark.quote }
                    {console.log("bookmarked />>",bookmarked)}
                </blockquote>
                <div className="flex md:justify-end my-3">
                    <div className="flex items-center justify-between w-full md:w-1/2 ">
                        <h6 className="md:mr-24">{bookmark.author}</h6>
                        <TrashIcon onClick={() => toggleBookmark(bookmark._id,bookmark.quote, bookmark.author)} className="h-4 hover:cursor-pointer text-primary-color" />
                    </div>
                </div>
            </div>
        )
    }
         return(
            <div className="bg-secondary-color p-3 md:p-12 rounded-xl">
                <blockquote>
                    {quote ? quote : <Loading />}
                </blockquote>
                <div className="flex md:justify-end my-3">
                    <div className="flex items-center justify-between w-full md:w-1/2 ">
                        <h6 className="md:mr-24">{author}</h6>
                        <BookmarkIcon onClick={() => toggleBookmark(_id, quote, author)} className="h-4 hover:cursor-pointer" fill={bookmarked ? "#fff" : "#000"} />
                    </div>
                </div>
            </div>
        )
    }
 

export default QuoteCard