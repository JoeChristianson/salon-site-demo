import { Heading, ImageAndTextSideBySide, Paragraph, ServicesSection1, Team1 } from "@sitestitch/jic-site-components"
import styles from "./index.module.scss"

type Props = {
    
}

const team = [{
    src:"/images/team/image4.png",
    alt:"",
    name:"Olivia Johnson",
    position:"Manager / Stylist"
},{
    src:"/images/team/image2.png",
    alt:"",
    name:"Mary Olsen",
    position:"Stylist"
},{
    src:"/images/team/image3.png",
    alt:"",
    name:"Jessica Thurton",
    position:"Stylist"
}
]


const About = ({}: Props) => {
    return <main className={styles['main']}>
        <ImageAndTextSideBySide
        src="/images/about/image2.png"
        alt=""
        reverse={true}
        className={styles.section1}
        >
            <div className={styles.right}>
            <Heading>About us</Heading>
            <Paragraph>Nestled in the heart of the city, our salon is a sanctuary of elegance and tranquility, dedicated to enhancing your personal beauty. We believe that true beauty comes from a harmony of inner confidence and outer radiance, and our mission is to nurture both. Our team of seasoned professionals is not just passionate about beauty, but also about making every client feel special, valued, and understood.</Paragraph>
            <Paragraph>We offer a wide range of services tailored to meet the unique needs of each individual. Our stylists are artists in their own right, boasting years of experience in cutting-edge hair design, transformative skincare treatments, and exquisite nail art. We stay abreast of the latest trends and techniques in the beauty industry, ensuring that we bring the most innovative and effective treatments to our clients. Whether you are seeking a bold new haircut, a relaxing facial, or the perfect bridal makeup, our team is here to ensure that your experience is nothing short of perfection.</Paragraph>
            <Paragraph>Your satisfaction is our highest priority. From the moment you step into our salon, we strive to provide a welcoming and luxurious atmosphere where you can unwind and enjoy being pampered. We use only the finest products and equipment, ensuring the highest standards of quality and care in all our services. At [Salon Name], we are not just a salon – we are a community of beauty enthusiasts who cherish the joy of making our clients look and feel their absolute best.</Paragraph>
            </div>
        </ImageAndTextSideBySide>
        <Team1
        className={styles.team}
        team={team}
        heading="OUR TEAM"
        ></Team1>
    </main>
}

export default About
