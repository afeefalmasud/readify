import ProfileCard from "@/components/profileCard/profileCard";

export const metadata = {
  title: "Readify | Profile",
  description: "my profile page",
};

const profilePage = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <div className="container mx-auto min-h-screen flex items-center justify-center">
        <ProfileCard></ProfileCard>
      </div>
    </div>
    
  )
}

export default profilePage