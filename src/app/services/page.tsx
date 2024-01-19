import { ServicesSection1 } from "@sitestitch/jic-site-components"
import styles from "./index.module.scss"

type Props = {
    
}

const hairServices = [
    { name: "Haircut - Women", price: "$40" },
    { name: "Haircut - Men", price: "$25" },
    { name: "Haircut - Children", price: "$20" },
    { name: "Hair Coloring - Full", price: "$70" },
    { name: "Hair Coloring - Roots", price: "$50" },
    { name: "Highlights", price: "$80" },
    { name: "Balayage", price: "$90" },
    { name: "Keratin Treatment", price: "$100" },
    { name: "Blowout", price: "$35" },
    { name: "Updo Hairstyle", price: "$60" },
    { name: "Deep Conditioning Treatment", price: "$30" },
    { name: "Perm", price: "$75" }
];



const makeupServices = [
    { name: "Manicure", price: "$18" },
    { name: "Deluxe Manicure", price: "$25" },
    { name: "Pedicure", price: "$22" },
    { name: "Deluxe Pedicure", price: "$30" },
    { name: "Eyebrow Shaping", price: "$15" },
    { name: "Makeup Application", price: "$50" },
    { name: "Hair Styling", price: "$35" },
    { name: "Full Body Massage", price: "$60" },
    { name: "Waxing", price: "$20" },
    { name: "Eyelash Extensions", price: "$70" },
    { name: "Spray Tan", price: "$25" }
];

const skinTreatments = [
    { name: "Basic Facial", price: "$30" },
    { name: "Acne Treatment", price: "$45" },
    { name: "Anti-Aging Facial", price: "$55" },
    { name: "Brightening Facial", price: "$50" },
    { name: "Chemical Peel", price: "$60" },
    { name: "Microdermabrasion", price: "$70" },
    { name: "Hydrating Facial", price: "$40" },
    { name: "Oxygen Facial", price: "$65" },
    { name: "LED Light Therapy", price: "$50" },
    { name: "Laser Skin Resurfacing", price: "$80" },
    { name: "Microneedling", price: "$75" },
    { name: "Dermaplaning", price: "$55" }
];

const Services = ({}: Props) => {
    return <main className={styles['main']}>
        <ServicesSection1 alt="" img="/images/services/image1.webp" overheading="Beauty Salon" category="Hair" services={hairServices}></ServicesSection1>
        <ServicesSection1 alt="" img="/images/services/image2.webp"  overheading="Beauty Salon" category="Skin"  services={skinTreatments} reverse={true}></ServicesSection1>
        <ServicesSection1 alt="" img="/images/services/image3.webp"  overheading="Beauty Salon" category="Makeup" services={makeupServices}></ServicesSection1>
    </main>
}

export default Services