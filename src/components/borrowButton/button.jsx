'use client'
import { FaHandshake } from 'react-icons/fa';
import { Bounce, ToastContainer, toast } from 'react-toastify';
const handleBorrow = () => {
    toast.success('Book checked out successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
};
const Button = () => {
  return (
    <div>
        <button onClick={handleBorrow} className='btn bg-[#0284C7] text-[#ffffff] w-full mt-auto active:scale-95 transition-transform duration-150 flex items-center gap-2 rounded-lg'>
            <FaHandshake />
            <p>Borrow Digital Copy</p>
        </button>
        <ToastContainer />
    </div>
  )
}

export default Button