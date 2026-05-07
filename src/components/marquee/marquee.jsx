import Marquee from "react-fast-marquee"


const MarqueeComponent = () => {
  return (
    <div className="text-[#0369A1] bg-[#E0F2FE] text-[14px] font-medium p-4">
        <Marquee>
            <div className="px-15">
                New Arrivals: "The Midnight Library" by Matt Haig 
            </div>
            <div className="px-15">
                Special Discount on Annual Memberships! 
            </div>
            <div className="px-15">
                New Arrivals: "Project Hail Mary" by Andy Weir 
            </div>
            <div className="px-15">
                Students get 50% off this month 
            </div>
            <div className="px-15">
                Exclusive Author Meet & Greet This Saturday 
            </div> 
        </Marquee>
    </div>
  )
}

export default MarqueeComponent