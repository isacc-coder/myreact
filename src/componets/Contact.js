import {FaInstagram,FaLinkedin,FaGithub,FaTwitter } from "react-icons/fa";
import classes from './Contact.module.css';
const handleURL = (url) =>{
    return () => window.open(url,"_blank")
}

const Contact = () => {
    return (

        <div className={classes.Contact} id="Contact">
            <div className={classes.ContactIcons}>
         <FaGithub color="white" size="30px" style={{padding:'3'}} onClick={handleURL('https://github.com/isacc-coder')} />
         <FaInstagram color="white" size="30px" style={{padding:'3'}} onClick={handleURL()} />
         <FaLinkedin color="white" size="30px" style={{padding:'3'}} onClick={handleURL('https://www.linkedin.com/in/isacc-firew-25a623173')} />
         <FaTwitter color="white" size="30px" style={{padding:'3'}} onClick={handleURL()} />
         
       
        </div>
        </div>
       
    )
}

export default Contact;