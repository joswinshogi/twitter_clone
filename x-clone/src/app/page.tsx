import LeftSidebar from "@/components/LeftSidebar";




const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSidebar/>
        
        {/* <div>Home timeline</div>
        <section>Right section</section> */}
      </div>
    </div>
  );
};

export default Home;
