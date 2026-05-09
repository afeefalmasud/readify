
import { Navigation } from "@/components/shared/drawer/drawer";
import { Basic } from "@/components/shared/search/search";


const Layout = ({children}) => {
  return (
    <div className="bg-[#F8FAFC] px-5 md:px-0" >
      <div className="container mx-auto pt-20 ">
        <div>
          
          {children}
        </div>
    </div>
  </div>
    
  )
}

export default Layout