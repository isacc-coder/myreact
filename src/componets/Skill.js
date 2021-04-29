import classes from './Skill.module.css';
import PageHeader from './../PageHeader/PageHeader';
import Code from './../img/Code.svg';
const ListTitleStyle = {fontWeight:900,color:'#be8e25', marginBottom: '4px'}
const backendSkills =
<ul>
    <li style={ListTitleStyle}>BACKEND</li>
    <li> Django</li>
    <li>Node-express-MogodB</li>
</ul>
const frontendSkills =
<ul>
    <li style={ListTitleStyle}>FRONTEND</li>
    <li>React-vue-Redux</li>
    <li>Javascript-Materialize-Bootstrap</li>
    <li>python-Typescript-</li>
</ul>
const DatabaseSkills =
<ul>
    <li style={ListTitleStyle}>Database</li>
    <li>MongoDB-PostgreSQL-SQL</li>
   
</ul>
const otherSkills =
<ul>
    <li style={ListTitleStyle}>OTHERS</li>
    <li>Git - Docker- json</li>
   
</ul>
const totoalskills =[frontendSkills,backendSkills,DatabaseSkills,otherSkills]
const Skill = () => {
    return (

        <div className={classes.Skills} id="Skills">
               <PageHeader title={'what about the skills?'}/>
         <p>
         I’m a life long learner and enjoy learning new stuff!! Below are some programmilng languages,
         toolikits,frameworks and libraries that I worked with and like Some of them 
         I control better than the other
         </p>
         <div className={classes.Container}>
             <img src={Code} alt="Code"/>
            {totoalskills.map(skills=>{
                return(
                    <div className={classes.List}>
                      {skills}
                    </div>
                )
            })}
         </div>
        </div>
       
    )
}

export default Skill;