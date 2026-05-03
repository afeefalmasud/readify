
import { Navigation } from "@/components/shared/drawer/drawer";
import { Basic } from "@/components/shared/search/search";


const Layout = ({children}) => {
  return (
    <div className="bg-[#F8FAFC] px-5 md:px-0" >
      <div className="container mx-auto pt-20 ">
        <div>
          <div className="flex justify-between flex-col md:flex-row gap-4 ">
            <div>
              <Navigation></Navigation>
            </div>
            <div>
              <Basic></Basic>
            </div>
          </div>
          {children}
        </div>
    </div>
  </div>
    
  )
}

export default Layout