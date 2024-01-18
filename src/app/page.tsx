import { About1, AppointmentBooking1, FullWidthImageSection, Hero1, Testimonials1, ThreeGrid1 } from "@sitestitch/jic-site-components";
import styles from "./index.module.scss"
export default function Home() {

  const cards = [
    {image:"/images/three-grid-1/image1.png",alt:"",heading:"Natural",subheading:"Feeling"},
    {image:"/images/three-grid-1/image2.png",alt:"",heading:"Full",subheading:"Substance"},
    {image:"/images/three-grid-1/image3.png",alt:"",heading:"Pure",subheading:"Radiance"}
  ]


  const testimonials = [
    {
      img:"/images/testimonials/image1.png",
      alt:"",
      name:"Maria Turner",
      title:"Regular Client",
      quote:"I visited for a bridal hair trial and was blown away by the creativity and expertise on display. The stylist understood exactly what I wanted and made it even better than I imagined. I've already booked them for my wedding day!"
    },
    {
      img:"/images/testimonials/image2.png",
      alt:"",
      name:"Sophia Hais",
      title:"New Client",
      quote:"This salon is a hidden gem! From the relaxing atmosphere to the top-notch styling services, every visit is a luxury experience. My hair has never looked better, and I've found my go-to spot for all my beauty needs."
    },
    {
      img:"/images/testimonials/leo.png",
      alt:"",
      name:"Leo Martinez",
      title:"Model",
      quote:"After my session at the salon, I felt absolutely rejuvenated. The staff was incredibly welcoming and skilled, especially in their cutting-edge hair treatments. It's rare to find such attention to detail and personalized care."
    }
  ]

  const aboutText = "Nestled in the heart of the city, our salon is a sanctuary of elegance and tranquility, dedicated to enhancing your personal beauty. We believe that true beauty comes from a harmony of inner confidence and outer radiance, and our mission is to nurture both. Our team of seasoned professionals is not just passionate about beauty, but also about making every client feel special, valued, and understood.<br>We offer a wide range of services tailored to meet the unique needs of each individual. Our stylists are artists in their own right, boasting years of experience in cutting-edge hair design, transformative skincare treatments, and exquisite nail art. We stay abreast of the latest trends and techniques in the beauty industry, ensuring that we bring the most innovative and effective treatments to our clients. Whether you are seeking a bold new haircut, a relaxing facial, or the perfect bridal makeup, our team is here to ensure that your experience is nothing short of perfection.<br>Your satisfaction is our highest priority. From the moment you step into our salon, we strive to provide a welcoming and luxurious atmosphere where you can unwind and enjoy being pampered. We use only the finest products and equipment, ensuring the highest standards of quality and care in all our services. At [Salon Name], we are not just a salon – we are a community of beauty enthusiasts who cherish the joy of making our clients look and feel their absolute best."

  return (
    <main>
      <Hero1
      boldHeading="Beauty"
      lightHeading="Elegance"
      paragraph="We believe in the art of beauty. Every client is special, and our aim is to make you feel your absolute best. "
      image="/images/hero-figure.png"
      className={styles.hero}
      ></Hero1>
      <ThreeGrid1
      className={styles['three-grid-one']}
      cards={cards}></ThreeGrid1>
      <FullWidthImageSection
      src="/images/full-width-1/image2.jpg"
      alt="alt"
      ></FullWidthImageSection>
      <AppointmentBooking1
      src="/images/appointment/image1.png"
      alt=""
      className={styles['appointment-section']}
      availableServices={["hair cut","hair dye","eyebrows"]}
      ></AppointmentBooking1>
      <Testimonials1
      testimonials={testimonials}
      ></Testimonials1>
      <About1 img="/images/about/image1.png" alt={""} smallHeading={""} bigHeading={"Glamour Grove"} text={aboutText} steleBg={"#eeddff"} className={styles.about}></About1>
    </main>
  )
}

