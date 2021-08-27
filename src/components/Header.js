import Image from 'next/image'
import { MenuIcon, SearchIcon , ShoppingCardIcon} from "@heroicons/react/outline";
import { signIn, signOut, useSession} from "next-auth/client"
import {useRouter} from "next/router"
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

function Header() {

    const [session] = useSession();

    const router = useRouter();
    const items = useSelector(selectItems);

    // session.user.
    return (
        <header className="sticky top-0 z-50">
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                    onClick={() => router.push("/")}
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
                <div className= "hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text"  />
                    <SearchIcon className=" h-12 p-4"/>
                </div>
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={signIn} className="link hover:underline">
                        <p>{session ? `Hello, ${session.user.name}`:'signIn'} </p>
                        <p  className="font-extrabold md:text-sm">Account & List</p>
                    </div>

                    <div className="link hover:underline">
                        <p>Return</p>
                        <p className="font-extrabold md:text-sm">& order</p>
                    </div>

                    <div onClick={() => router.push("/checkout")} className=" relative flex  items-center  link hover:underline">
                    <span className="absolute top-0 right-0  md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                        {items.length}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
                        <p className="font-extrabold md:text-sm mt-2 hidden md:inline ">Basket</p>
                    </div>

                </div>
            </div>

            {/* Bottom nav */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
                <p className="link hover:underline flex items-center">
                    <MenuIcon className="h-6 mr-1 " />All
                </p>
                <p className="link hover:underline"> Prime Video</p>
                <p className="link hover:underline">Amazon Business</p>
                <p className="link hover:underline">Today Deal</p>
                <p className="link hover:underline hidden lg:inline-flex"> Electronics</p>
                <p className="link hover:underline hidden lg:inline-flex"> Food & grocery</p>
                <p className="link hover:underline hidden lg:inline-flex"> Prime</p>
                <p className="link hover:underline hidden lg:inline-flex"> Buy Again</p>
                <p className="link hover:underline hidden lg:inline-flex"> Shopper toolkit</p>
                <p className="link hover:underline hidden lg:inline-flex"> Health & personal Care</p>
            </div>
        </header>
    )
}

export default Header
