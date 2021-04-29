//import classes from "*.module.css";
import classes from './Home.module.css';
//import Code from './../img/Code.svg';
import connected from './../img/connected.svg';
const Home = () => {
    return (

        <div className={classes.Home} id="Home">
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello,world</h1>
            <h1>Welcome to  MyWebsite</h1>
            </div>
             {/* <img className={classes.Code} src={Code} alt="Code" />  */}
            <img className={classes.connected} src={connected} alt="connected" /> 
         
        </div>
       
    )
}

export default Home;