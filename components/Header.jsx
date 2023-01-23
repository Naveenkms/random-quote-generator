import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="sticky top-0 py-3 px-6 md:px-12 font-bold text-white text-xl bg-primary-color">
       <ul className="flex justify-between ">
        <li>
        <button type="button" onClick={() => router.push('/')} className={` ${pathname === "/" ? "font-extrabold" : "font-extralight"}`}>
          Home
        </button>
        </li>
        <li>
        <button type="button" onClick={() => router.push('/bookmarks')} className={` ${pathname === "/bookmarks" ? "font-extrabold" : "font-extralight"}`}>
          Bookmarks
        </button>
        </li>
       </ul>
    </nav>
  )
}

export default Header