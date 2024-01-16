import Form from '@/components/Form'
import Image from 'next/image'
import instagramImg from '../../assets/images/instagram.png'
import styles from '../../styles/contact.module.css'
import Link from 'next/link'

export default function page() {
  return (
    <div className={styles.container}>
        <Form />
        <div className={styles.containerContact}>
           
            <Link href='https://www.instagram.com/psi.pamelacostaofc/?igsh=MWZ6MnVramk1NDVrNA%3D%3D'>
                <Image src={instagramImg} width='50' height='50' alt=''/>
                <p>@psi.pamelacostaofc</p>
                </Link>
                <p>psi.pamelacostaofc@gmail.com</p>
        </div>
    </div>
  )
}
