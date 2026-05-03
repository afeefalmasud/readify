import { BsBookHalf } from "react-icons/bs"
import { ImLab } from "react-icons/im"
import { MdLaptop } from "react-icons/md"


const Category = () => {
  return (
    <div className="bg-[#F8FAFC] ">
      <div className="container mx-auto px-5 md:px-0 py-30">
        <h1 className="text-[30px] text-[#0F172A] font-bold pb-8 text-center">Browse Categories</h1>
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="p-6 border-2 border-[#bfbfbf53] rounded-2xl bg-[#ffffff]">
            <div className="p-3 bg-[#FEF3C6] text-[#E17100] text-2xl rounded-md w-fit mb-4">
              <BsBookHalf />
            </div>
            <h2 className="text-[#0F172A] font-bold text-[20px] mb-3">Story</h2>
            <p className="text-[#64748B] mb-6">Immerse yourself in captivating fiction, from
            timeless classics to modern thrillers.</p>
            <button className="btn btn-primary btn-soft w-full text-[#155DFC] hover:text-[#ececec]">Explore Now</button>
          </div>
          <div className="p-6 border-2 border-[#bfbfbf53] rounded-2xl bg-[#ffffff]">
            <div className="p-3 bg-[#DBEAFE] text-[#155DFC] text-2xl rounded-md w-fit mb-4">
              <MdLaptop />
            </div>
            <h2 className="text-[#0F172A] font-bold text-[20px] mb-3">Tech</h2>
            <p className="text-[#64748B] mb-6">Stay ahead with books on programming, AI,
            design, and software engineering.</p>
            <button className="btn btn-primary btn-soft w-full text-[#155DFC] hover:text-[#ececec]">Explore Now</button>
          </div>
          <div className="p-6 border-2 border-[#bfbfbf53] rounded-2xl bg-[#ffffff]">
            <div className="p-3 bg-[#D0FAE5] text-[#009966] text-2xl rounded-md w-fit mb-4">
              <ImLab />
            </div>
            <h2 className="text-[#0F172A] font-bold text-[20px] mb-3">Science</h2>
            <p className="text-[#64748B] mb-6">Explore the universe, biology, and physics
            with our extensive science collection.</p>
            <button className="btn btn-primary btn-soft w-full text-[#155DFC] hover:text-[#ececec]">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category