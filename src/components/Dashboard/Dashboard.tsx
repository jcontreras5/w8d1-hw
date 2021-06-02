import React from 'react';
//3.1 import of styling and theming
import {useState} from 'react'; //hook relates to state of data of app
import { Drawer as MUIDrawer, 
    ListItem, 
    List, 
    ListItemIcon, 
    ListItemText, 
    Theme,
    useTheme, 
    makeStyles, 
    createStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    Dialog, // new item
    DialogActions, // new item
    DialogContent, // new item
    DialogContentText, // new item
    DialogTitle // new item
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import clsx from 'clsx';
import { RouteComponentProps, withRouter, Switch, Route } from "react-router-dom";
import {DataTable} from '../../components'
import { PlayerForm } from '../PlayerForm';

//3.2 var for width 
const drawerWidth = 100;
//3.3 hook 
const useStyles = makeStyles((theme: Theme) => //use theme of type Theme from ui core
    createStyles({
        root: {
            display: 'flex', 
        },
        appBar: { // sidebar with animations, make it an object
        transition: theme.transitions.create(['margin', 'width'], { // targetors depending on state of drawer
            easing: theme.transitions.easing.sharp, //css selector,easing: transition speed
            duration: theme.transitions.duration.leavingScreen, //duration for it to leave screen
            })
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`, //formula that specifies width for app when sidebar triggered
            marginLeft: drawerWidth, //app width as margin
            transition: theme.transitions.create(['margin', 'width'], { 
              easing: theme.transitions.easing.easeOut, //easOut: slower speed anmation
              duration: theme.transitions.duration.enteringScreen,// 
            })
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: { //class for making something invisible to end user but still in code  
          display: 'none', 
        },
        drawer: {
          width: drawerWidth,
          flexShrink: 0, // lives inside of flexbox,allows shrinking so it doesn't overflow container
        },
        drawerPaper: { //gives paper-esque effect and styling
          width: drawerWidth
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center', 
            padding: theme.spacing(0, 1), //top-bottom,left-right
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end'
        },
        content: {
            flexGrow: 1, //content( ie. SignIn) needs to grow as well along with sidebar
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            // still within content
            marginLeft: -drawerWidth
        },
        contentShift: { 
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0
          },
          toolbar:{
            display: 'flex',
          },
          toolbar_button: {
            marginLeft: 'auto',
                  color: 'white'
          }
        }),
      );

//3.4 DB properties interface using router components props
//using the correct DataType inside of our Dashboard's props object.      
interface DashProps{
    history: RouteComponentProps["history"]; //keep track of where weve been;push to old point in history 
    location: RouteComponentProps['location'];
    match: RouteComponentProps['match'];
  }

//2.5 Basically creating a new route 
export const Dashboard = withRouter(( props:DashProps ) => {
//3.5 112-116 React Hooks to create Classes
    console.log(props)
    //using hooks to create classes
    const {history} = props;//history object nested inside of our props object
    const classes = useStyles(); //using React's Hook syntax
    const theme = useTheme();//Creating a Material-UI Theme (default == no params)
    const [open, setOpen] = useState(false); //[var,function];useStatehook keeps track of state;currently open=false
    const [dialogOpen, setDialogOpen] = useState(false);

      // Handle Dialog Open/Close
    const handleDialogClickOpen = () => {
      setDialogOpen(true);
    }

    const handleDialogClickClose = () => {
      setDialogOpen(false);
    }

    const handleDrawerOpen = () => {//if used,sets open=true
        setOpen(true);
    };

    const handleDrawerClose = () => {// if used,open =false
        setOpen(false);
    };

    const itemsList = [  //array of objects, specify side menu value,clcked direction the router
        {
          text: 'Home', 
          onClick: () => history.push('/') 
        },
        {
          text: 'Sign In',
          onClick: () => history.push('/signin')
        }
    ]

//3.6 returning html
return (
    <div className={classes.root}> 
      <CssBaseline/>
      {/* ----------app bar section aka nav bar -------------*/}
      <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: open})}> {/* container for sidebar; clsx has its own syntax*/}
        <Toolbar className={classes.toolbar}>
          <IconButton //physical hamburger button
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen} // function triggered from above
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)} //if open true, eval to hide 
            >
            <MenuIcon />  {/* self closing tag */}
          </IconButton>

        <Button className={classes.toolbar_button} onClick={handleDialogClickOpen}>Create New Player</Button>

                  {/*Dialog Pop Up begin */}
                <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title">Add New Player</DialogTitle>
                  <DialogContent>
                    <DialogContentText>Add A New Player</DialogContentText>
                      <PlayerForm/>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick = {handleDialogClickClose} color="primary">Cancel</Button>
                    <Button onClick={handleDialogClickClose} color = "primary">Done</Button> 
                  </DialogActions>

                </Dialog>        
        </Toolbar>
      </AppBar>
    {/* ----------drawer ------------- */}
      <MUIDrawer
        className={classes.drawer}
        variant="persistent" //perm
        anchor="left"
        open={open} //JS var open=true
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}> 
            {/*  ternery operator below: are two objects(value and type) equal to each other is so Cleft ,else Cright ;ltr=;left2right 
            chevron right is completely  optional,only here for education purpose  */}
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        {/* thinline similar to hor line to seperate html elements  */}
        <Divider/> 

        {/* programmatically map over items list to create html elements;scalable */}
        <List>
        {itemsList.map((item, index) => { 
          const { text, onClick } = item;
          return (
            //  
            <ListItem button key={text} onClick={onClick}> 
              <ListItemText primary={text}/>
            </ListItem>
          );
        })}
        </List>
      </MUIDrawer>

      
      {/*3.7-- clsx conditional syntax for rendering  
      main area that doesnt hold nav or sidebar stuff*/}
      <main className={clsx(classes.content, { 
        //   do this shift based on boolean:open
          [classes.contentShift]: open,
        })}
      >
          {/* self closed tag below */}
        <div className={classes.drawerHeader} /> 
        {/*  We will add this shortly. Nested within Dashboard component*/} 
        <DataTable/>
      </main>
    </div>
    )
});


