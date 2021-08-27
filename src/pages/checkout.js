import Header from "../components/Header"
import Image from "next/image"
import { useSelector } from "react-redux"
import { selectItems } from "../slices/basketSlice"
import CheckoutProduct from "../components/CheckoutProduct"
import Currency from "react-currency-formatter"
import { session } from "next-auth/client"

function Checkout() {
    const items = useSelector(selectItems)
    return (
        <div className="bg-gray-100">
            <Header/>
            <main className="lg:flex max-w-screen-2xl mx-auto">
                <div className="flex-grow m-5 shadow-sm">
                    <Image
                        src="https://links.papareact.com/ikj"
                        width ={1020}
                        height={250}
                        objectFit="contain"
                    />
                    <div className="flex flex-col space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4 ">
                            {items.length === 0 ? "Your Amazon Basket is Empty" : "Shopping Basket"}
                        </h1>
                        {items.map((item, i)=>(
                            <CheckoutProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                hasPrime={item.hasPrime}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    {items.length > 0 && (
                        <>
                            <h2 className="whitespace-nowrap">Subtotal ({items.length} items): <span className="font-bold">
                            {/* <Currency quantity={total} currency="INR"/> */}
                            </span>
                            </h2>
                            <button>
                                {!session? 'Sign in To checkout': 'Procced to checkout'}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Checkout
