//1.1 access to framework
import React from 'react'; 

//2.1 New Styles Code
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import court from '../../assets/images/court.png';


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

    return (
        <div className={classes.root}>
            {/*New and Updated HTML Code */}
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={ `${classes.logo} `}>
                        <a href="#" className={ `${classes.logo_a} ${classes.logo_navigation}` }>Brand</a>
                    </h1>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                        <li>
                            <a href="" className={classes.nav_a}>Home</a>
                        </li>
                        <li>
                            <a href="" className={classes.nav_a}>About</a>
                        </li>
                        <li>
                            <a href="" className={classes.nav_a}>Learn More</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{ props.title }</h1>
                    <p>Soccer Roster</p>
                    <Button color='primary' variant="contained">Click Me</Button>
                </div>
            </main>
        </div>
    )
}