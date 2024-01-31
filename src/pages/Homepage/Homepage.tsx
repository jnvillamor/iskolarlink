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

const Section2 = () => {
  return (
    <div className='my-[120px] flex flex-col gap-[80px] md:gap-[160px] 2xl:px-32 lg:px-16 px-6'>
      <div className='mx-auto text-center lg:w-4/5'>
        <h1 className='mb-6 textGradient1'>
          Explore the <br /> Newest Pathways
        </h1>
        <p className='text-secondary font-Inter'>
          Embark on a journey of exploration as you delve into the latest and most exhilarating internship possibilities spanning a multitude of
          industries. Uncover the stepping stones that promise a transformative and fulfilling career voyage.
        </p>
      </div>

      <div className='flex gap-6'>
        <div className='w-1/3 hidden md:flex items-center'>
          <img src='/images/homepage-section-hero-1.svg' alt='hero' className='w-full' />
        </div>
        <div className='w-full text-center lg:text-left lg:w-2/3 pt-16'>
          <h1 className='mb-6 textGradient1'>Unveiling Student Internship Opportunities</h1>
          <p className='text-secondary font-Inter'>
            Your Gateway to transformative internships. Discover and secure a wide array of internships across industries, connecting ambitious
            talents with leading companies. Unleash your potential and take the first step towards a rewarding and impactful career with Iskolarlink
            today.
          </p>
        </div>
      </div>

      <div className='flex flex-row-reverse gap-6'>
        <div className='w-1/3 hidden md:flex items-center'>
          <img src='/images/homepage-section-hero-2.svg' alt='hero' className='w-full' />
        </div>
        <div className='w-full text-center lg:text-left lg:w-2/3 pt-16'>
          <h1 className='mb-6 textGradient1'>A Vast Network of Company Collaborations</h1>
          <p className='text-secondary font-Inter'>
            Our platform showcases a vast network of collaborations, spanning promising startups to established tech giants. This diverse range of
            partnerships translates into tailored internship opportunities for ambitious university students. Whether you aim for hands-on experience
            with rising stars or to contribute to household names, our network offers abundant possibilities to shape your future.
          </p>
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
      <Section2 />
      {/* <Section3 /> */}
      {/* <Section4 /> */}
      {/* <Footer /> */}
    </main>
  )
}

const Homepage = () => {
  return <HomepageComponent />;
};

export default Homepage;
