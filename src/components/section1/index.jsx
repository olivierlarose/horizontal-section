import Image from 'next/image';
import styles from './style.module.scss';
import Picture1 from '../../../public/medias/1.jpeg';
import Picture2 from '../../../public/medias/2.jpeg';

export default function Index() {
  return (
    <div className={styles.container}>
        <div className={styles.images}>
            <div className={styles.imageContainer}>
                <Image 
                    fill
                    src={Picture1}
                    placeholder='blur'
                    alt="image"
                />
            </div>
            <div className={styles.imageContainer}>
                <Image 
                    fill
                    src={Picture2}
                    placeholder='blur'
                    alt="image"
                />
            </div>
        </div>
        <div className={styles.body}>
            <div className={styles.header}>
                <h1>Horizontal Section</h1>
                <h2>With GSAP and Next.js</h2>
            </div>
            <p>Pictures by Zissou</p>
        </div>
    </div>
  )
}
