import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, Checkbox, Icon } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

export default function Login() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
  const classes = useStyles();

  return (
    <div style={{display:"flex", alignItems:"center", marginTop:"50px", flexDirection:"column"}}>
    <Card style={{height:"500px", width:"400px",}}>
    <div style={{display:"flex", justifyContent:"center", marginBottom:"15px"}} >
    <img src={"/logoetoile.svg"} alt="Logo SOAN"/>
    </div>
    <form className={classes.root} noValidate autoComplete="off">
    <h1 style={{fontSize:"x-large", fontWeight:"bold"}}>Inscription</h1>
      <div style={{display:"flex", flexDirection:"column", marginLeft:"50px"}}>
        <h2 style={{ display:"flex", marginLeft:"8px"}}>Adresse email</h2>
        <TextField
        style={{ width:"300px"}}
          
          id="outlined-required"
          placeholder="Adresse email"
          variant="outlined"
        />
        <h2 style={{display:"flex", marginLeft:"8px"}}>Mot de passe</h2>
        <TextField
        style={{width:"300px"}}
          id="outlined-password-input"
          placeholder="Mot de passe"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          endIcon={<Icon>send</Icon>}
        />
      </div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center" }}>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    <p>J'accepte les Conditions Générales d'Utilisation</p>
    </div>
    <Button style={{borderRadius: "45px", height: "45px", width:"300px", backgroundColor:"blue"}} variant="contained" color="primary">
    S'incrire
    </Button>
    <div style={{ display:"flex", justifyContent:"space-evenly", marginTop:"15px" }}>
    <Button style={{border:"1px solid blue"}}><img style={{height:"40px", width:"40px"}} src={"/logo_google.jpeg"} alt="Logo google"/>GOOGLE</Button>
    <Button style={{border:"1px solid blue"}}><img style={{height:"40px", width:"40px"}} src={"/LinkedIn_logo.png"} alt="Logo linkedIn"/>LINKEDIN</Button>
    </div>
    </form>
    </Card>
    <h1 style={{marginTop:"20px", color:"blue"}}>J'ai déjà un compte</h1>
    </div>
       
  );
}
