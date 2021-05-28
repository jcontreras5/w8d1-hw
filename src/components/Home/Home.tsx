//1.1 access to framework
import React from 'react'; 

//2.1 New Styles Code
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import court from '../../assets/images/court.png';

//2.8 import link from react-router-dom
import {Link} from 'react-router-dom'


//1.2 create functional comp:prop is child/attr of comp
interface Props{
    title: string;
}



// 2.2 New Make Styles Code
// var that holds function/ custom hooks utilize 'use' 
// hooks create object which will allow us to pull as class name for HTML 
const useStyles = makeStyles({ 
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black'
    },

    main: {
        backgroundImage: `url(${court});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    }
    
})

//1.3 exporting for use around the rest of project,hence export
export const Home = ( props:Props) => {

// 2.3 New classes variable code
const classes = useStyles();//putting hook to use,acces to obj within func makeStyle

    return(
        // 2.4{/* New and update HTML code */}
        <div className={classes.root}>
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={`${classes.logo}`}>

                        {/* Changed all a tags to links , and changed href=to, and point them somewhere */}
                        <Link to="/" className={`${classes.logo_a} ${classes.logo_navigation}`}>{props.title}</Link> 
                    </h1>
                    <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
                        <li>
                            <Link to="/" className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className={classes.nav_a}>About</Link>
                        </li>
                        <li>
                            <Link to="/signin" className={classes.nav_a}>Learn More</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{props.title}</h1>
                    <p>I like drones</p>
                    <Link to='/dashboard'>
                        {/* button from import|| styling  attributes from material ui */}
                        <Button color='primary' variant='contained'>Click Me</Button> 
                    </Link>
                </div>
            </main>
        </div>
    )
    }