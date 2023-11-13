import Changing from "@/components/Changing";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import SideBar from "@/components/SideBar";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <SideBar></SideBar>
      <Changing></Changing>
      <Testimonials></Testimonials>
      <News></News>
      <Team></Team>
      <Footer></Footer>
    </>
  )
}
