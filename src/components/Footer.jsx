function Footer(){
    return(
        <>
        <div className="bg-green-900  sticky bottom-0 flex  p-6 text-white w-full">
            <div className="w-1/5">
                <h1 className="font-bold">Disaster Mgt</h1>
            </div>
            <div className="w-1/5">
                <div className="grid">
                    <h2 className="font-bold underline">Navigation</h2>
                    <a href="#" className=" text-white hover:font-bold">Home</a>
                    <a href="" className=" text-white hover:font-bold" >About</a>
                    <a href=""></a>
                    <a href=""></a>
                </div>
               
            </div>
            <div className="w-1/5">
                <div className="grid">
                    <h2 className="font-bold underline">Legal</h2>
                    <a href="" className="hover:font-bold">Terms of service</a>
                    <a href="" className="hover:font-bold">Privacy policy</a>
                    <a href="" className="hover:font-bold">License</a>
                </div>
            </div>
            <div className="w-1/5">
                <h2 className="font-bold underline">Solutions</h2>

            </div>
            <div className="w-1/5">
                <div>
                    <h2 className="font-bold underline">Subscribe to our Newsletter</h2>
                    <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                </div>
                <div>
                    <input type="text" className=" bg-white focus:outline-2 rounded-sm focus:outline-green-300 text-black py-1 px-2" placeholder="Enter your email" />
                    <button className="bg-green-300 text-black rounded-sm py-1 px-2 ml-2 mt-2 font-bold">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
       
        </>
    )
}
export default Footer;