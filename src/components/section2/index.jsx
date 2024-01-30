'use client';
import Image from 'next/image';
import styles from './style.module.scss';
import Picture1 from '../../../public/medias/3.jpeg';
import Picture2 from '../../../public/medias/4.jpeg';
import Picture3 from '../../../public/medias/5.jpg';
import Picture4 from '../../../public/medias/6.jpeg';
import Picture5 from '../../../public/medias/7.jpeg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {

    const container = useRef(null);

    useLayoutEffect( () => {
        const context = gsap.context( () => {
            gsap.to(container.current, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "+=2500px",
                    scrub: true,
                    pin: true,
                    pinSpacing: true,
                    ease: "none"
                },
                x: `-=${container.current.scrollWidth - window.innerWidth}`
            })
        })
        return () => context.revert();
    }, [])

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.intro}>
                <div className={styles.header}>
                    <h2>Lorem ipsum</h2>
                    <p>Sed neque purus, imperdiet eu purus sit amet, hendrerit semper quam. Praesent elementum, nisl sit amet tincidunt tincidunt, ex tortor cursus lorem, non tempus purus libero et metus.</p>
                </div>
                <div className={styles.imageContainer}>
                    <Image 
                        src={Picture1}
                        fill
                        alt="image"
                        placeholder='blur'
                    />
                </div>
            </div>
    
            <div className={styles.double}>
                <div className={styles.imageContainer}>
                    <Image 
                        src={Picture2}
                        fill
                        alt="image"
                        placeholder='blur'
                    />
                </div>
                <div className={styles.imageContainer}>
                    <Image 
                        src={Picture3}
                        fill
                        alt="image"
                        placeholder='blur'
                    />
                </div>
            </div>
        
            <div className={styles.description}>
                <p>Aliquam metus lacus, efficitur sit amet ligula a, vehicula eleifend dolor. Pellentesque vulputate consectetur lectus, sit amet pellentesque leo congue ut. Vivamus turpis est, mollis et elit eget, venenatis dictum nisl. Suspendisse sit amet erat vel ipsum elementum mattis. In vel sagittis velit.</p>
            </div>
            <div className={styles.end}>
                <div className={styles.imageContainer}>
                    <Image 
                        src={Picture4}
                        fill
                        alt="image"
                        placeholder='blur'
                    />
                </div>
                <div className={styles.imageContainer}>
                    <Image 
                        src={Picture5}
                        fill
                        alt="image"
                        placeholder='blur'
                    />
                </div>
            </div>
        </div>
  )
}
