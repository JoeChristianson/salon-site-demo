import { ContactWithMap1 } from "@sitestitch/jic-site-components"
import styles from "./index.module.scss"

type Props = {
    
}

const coordinates = {
    lat:50,
    lng:10,
    zoom:10
}

const Contact = ({}: Props) => {

    const apiKey = process.env.GOOGLE_MAPS_API_KEY

    if(!apiKey){
        return<></>
    }

    return <main className={styles['main']}>
        <ContactWithMap1
        coordinates={coordinates}
        googleMapsAPIKey={apiKey}
        ></ContactWithMap1>
    </main>
}

export default Contact