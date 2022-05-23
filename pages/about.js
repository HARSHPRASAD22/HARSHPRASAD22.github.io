import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
const About = () => {
    return    <body>
       <Image
    alt="Background Image"
    src="https://i.ibb.co/QCp2PkH/20220523-103621.gif"
    layout="fill"
    className={styles.bgimg1}
/><br/>
<div className={styles.about}>
<h1 className={styles.h1ab}>
Hey! It&apos;s Harsh Prasad
</h1>
<p className={styles.pab}>
I am a taciturn who is endeavouring to perceive Theoretical Physics and Cosmology. I started to code 3 years back, since then I have been coding in more than 5 languages. Being a student, I do create responsive websites to enhance my skills.
</p>
<div className={styles.icon}>

 <a href="https://twitter.com/harshprasad_22/" >     h        <Image
    alt="Twitter"
    src="https://i.ibb.co/8KB07GX/icons8-twitter-50.png"
        width={25}
    height={25}
    clas
    className={styles.bgimg2}
/></a>
<a href="https://instagram.com/harshprasad_22">
h   <Image
    alt="Instagram"
    src="https://i.ibb.co/9sb2KR7/icons8-instagram-50-1.png"
        width={25}
    height={25}
    className={styles.bgimg2}
/>
</a>
<a href="mailto:harshprasad7225@gmail.com?subject=feedback">h
   <Image
    alt="Gmail"
    src="https://i.ibb.co/wwn29J4/icons8-mail-50.png"
        width={25}
    height={25}
    className={styles.bgimg2}
/></a>
<a href="https://codepen.io/harshprasad_22">h
   <Image
    alt="Codepen"
    src="https://i.ibb.co/0fdGGDr/icons8-codepen-50.png"
        width={25}
    height={25}
    className={styles.bgimg2}
/></a>
<a href="https://github.com/HARSHPRASAD22/">h
   <Image
    alt="Github"
    src="https://i.ibb.co/FmY5MmX/icons8-github-30.png"
    width={25}
    height={25}
    className={styles.bgimg2}
/></a>

<a href="https://facebook.com/HARSHPRASAD22/">n
   <Image
    alt="Facebook"
    src="https://i.ibb.co/RvSY1Bh/icons8-facebook-50.png"
    width={25}
    height={25}
    className={styles.bgimg2}
/>
</a>
</div>
</div>

    </body>;
};
 
export default About;



