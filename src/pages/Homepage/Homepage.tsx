import Header from "@/components/custom/Header";

const HomepageComponent = () => {
  return (
    <main className="bg-white opacity-60">
      <Header />
    </main>
  )
}

const Homepage = () => {
  return <HomepageComponent />;
};

export default Homepage;
