import styles from './style.module.scss';
import Image from 'next/image';
import Picture from '../../../public/medias/8.jpeg';

export default function Index() {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image 
                fill
                alt="image"
                placeholder='blur'
                src={Picture}
            />
        </div>
        <div className={styles.body}>
            <h2>Lorem Ipsum</h2>
            <p>Aliquam metus lacus, efficitur sit amet ligula a, vehicula eleifend dolor. Pellentesque vulputate consectetur lectus, sit amet pellentesque leo congue ut. Vivamus turpis est, mollis et elit eget, venenatis dictum nisl. Suspendisse sit amet erat vel ipsum elementum mattis. In vel sagittis velit.</p>
        </div>
    </div>
  )
}
