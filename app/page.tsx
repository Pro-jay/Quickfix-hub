// component
import Photo from "@/components/Photo";
import Social from "@/components/Social";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              {"Welcome to"} <br />
              <span className="text-accent-default">Quickfix hub</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              your reliable helping hand for everyday chores. From cleaning to
              laundry and home errands, we make your space shine while you focus
              on what matters most.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="mb-8 xl:mb-10">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent-default rounded-full flex 
                  justify-center items-center text-accent-defaul text-base hover:bg-accent-default 
                  hover:text-black hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
