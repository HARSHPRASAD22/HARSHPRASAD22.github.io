import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
 
function Skills() {
  return(
  <body>
  
   <Image
    alt="Background Image"
    src="https://i.ibb.co/m9rvcbD/diego-ph-5-LOhyd-Ot-TKU-unsplash.jpg"
    layout="fill"
    className={styles.bgimg1}
/>
  <br/>


<fieldset className={styles.skills}>
<legend className={styles.ppp}>
Skills 
</legend>
<ul>
<li>HTML</li>
<li>CSS</li>
<li>JAVASCRIPT</li>
<li>REACT JS</li>
<li>NEXT JS</li>
<li>GIT/GITHUB</li>
<li>UI/UX</li>

</ul>
</fieldset>
 </body>
 
 )
 
 
}

export default Skills