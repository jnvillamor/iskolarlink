import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";

const Section1 = () => {
  return (
    <div className='relative py-12 px-6 lg:px-16 2xl:px-32'>
      <div className='absolute top-1/2 -translate-y-1/2 bg-primary-100 lg:w-1/3 w-2/5 blur-[100px] lg:blur-[150px] aspect-square rounded-full -z-10'></div>
      <div className='flex md:gap-12'>
        <div className='w-full md:w-1/2 flex justify-center items-center'>
          <div className='w-96 md:w-3/4 lg:w-fit mx-auto flex flex-col justify-center'>
            <div className='flex flex-col mb-6'>
              <span className='font-Fontspring text-[55px] md:text-[85px] lg:text-[100px] leading-none'>aspire</span>
              <span className='font-Fontspring text-[55px] md:text-[85px] lg:text-[100px] leading-none'>connect</span>
              <span className='font-Fontspring text-[55px] md:text-[85px] lg:text-[100px] leading-none'>succeed</span>
            </div>
            <p className='text-secondary mb-12'>Connecting aspiring tech innovators to career opportunities</p>

            <Button className='rounded-full px-8 py-4 h-full lg:max-w-fit backgroundGradient1'>Kickstart your career &gt;</Button>
          </div>
        </div>
        <div className='hidden md:w-1/2 md:flex justify-start'>
          <img src='/images/homepage-hero.svg' alt='hero' className='md:w-[350px] lg:w-[512px]' />
        </div>
      </div>
    </div>
  );
};

const HomepageComponent = () => {
  return (
    <main className='bg-white bg-opacity-60'>
      <Header />
      <Section1 />
      {/* <Section2 />
      <Section3 />
      <Section4 />
      <Footer /> */}
    </main>
  )
}

const Homepage = () => {
  return <HomepageComponent />;
};

export default Homepage;
