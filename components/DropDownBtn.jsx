import { updateQuotes } from '@/store/quoteSlice';
import { useDispatch, useSelector } from 'react-redux';

const DropDownBtn = () => {
const tags = useSelector((state) => state.tags.value);
const dispatch = useDispatch();
const handleChange = async(e) => {
    try {
        const response = await fetch(`https://api.quotable.io/random?tags=${e.target.value}`);
        const data = await response.json();
        dispatch(updateQuotes(data))
    } catch(error) {
        console.log(error)
    }
}
  return (
<select name="tags" id="tags" onChange={handleChange} className="text-black rounded-xl w-1/4 mx-auto shadow-2xl p-2 hover:cursor-pointer">
    {tags.length != 0 &&  tags.map(tag => <option className="" key={tag._id} value={tag.name}>{tag.name}</option>)}
</select>

  )
}

export default DropDownBtn