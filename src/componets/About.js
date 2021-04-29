import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader';
import fog from './../img/fog.jpg';
const About = () => {
  return (

      <div className={classes.About} id="About">
        <PageHeader title={'About Me'}/>
         <div className={classes.Container}>
            <div className={classes.Text}>
           <h2>Hello I'am Isacc</h2>
           <p>I'am Software developer.........
           I,graduated from Micro-Link Information Technology College with B.Sc. in Computer Science on Jan 24/2021.
           To perform the responsibility given by any organization till my potential is allowed and to the best of my knowledge 
           for the satisfaction of the requirement of the organization.
           </p>
            </div>
            <div className={classes.Photo}>
              <img className={classes.fog} src={fog} alt="fog"></img>

            </div>
         </div>
      </div>
     
  )
}

export default About;