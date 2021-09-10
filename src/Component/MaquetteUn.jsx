import React from 'react';
import {Button, Card} from "@material-ui/core";

export default function MaquetteUn() {
    return (
      
        <div>
            <Card style={{backgroundColor:"grey", height:"100px"}}>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", fontSize:"x-large", marginTop:"20px" }}>
            Factures fournisseurs pour  <p style={{fontWeight:"bold"}}> SAS ATELIER DES LIEUX</p>
            </div>
            </Card>

            <div style={{display:"flex", justifyContent:"center"}}>
            <div style={{ width: "40px", height: "40px", borderRadius: "20px", border:"1px solid white"}}>
            <img src={"/logoetoile.svg"} alt="Logo SOAN"/>   
            </div>
            </div>

            <div style={{display:"flex"}}>
                <h1 style={{fontSize:"x-large", fontWeight:"bold", display:"flex", marginLeft:"60px", marginTop:"20px"}}>CIKLEA-PARIS</h1>
                <Card style={{ height:"200px", width:"300px",marginLeft:"800px", marginTop:"0px" , position:"fixed",zIndex:'1'}}>
                    <div style={{display:"flex", fontSize:"medium", fontWeight:"bold", marginTop:"15px", marginLeft:"30px"}}>Récapitulatif</div>
                    <div style={{display:"flex", fontSize:"large", opacity:"0.4", marginTop:"15px", marginLeft:"30px"}}>FAC1510</div>
                    <hr style={{ marginTop:"15px", width:"250px", marginLeft:"30px"}}></hr>
                    <div style={{display:"flex", marginLeft:"30px", marginTop:"15px"}}>
                    <div style={{opacity:"0.4"}}>Total</div>
                    <div style={{fontWeight:"bold", marginLeft:"150px"}}>776,00€</div>
                    </div>
                    <Button style={{border:"1px solid blue", marginTop:"15px", backgroundColor:"blue", color:"white", borderRadius: "45px", height: "40px", width:"250px"}}>PAYER PAR VIREMENT</Button>
                </Card>
            </div>

            <div style={{display:"flex", marginTop:"30px"}}>
            <div style={{fontSize:"large", fontWeight:"bold", marginLeft:"20px"}}>À payer</div>
            <div style={{fontSize:"large", opacity:"0.4", marginLeft:"20px"}}>Payé</div>
            </div>
           
            <hr style={{ border:"1px solid #000", height: "5px", marginLeft:"20px", marginTop:"20px", borderRadius: "10px", background: "linear-gradient(to right, blue, grey", width: "50%"}}></hr>
         
            <div style={{display:"flex"}}>
            <div style={{fontWeight:"bold", marginLeft:"20px", marginTop:"20px"}}>FAC1510</div>
            <div style={{textDecoration: "line-through", marginLeft:"505px", marginTop:"20px"}}>800,00€</div>
            </div>
            <div style={{display:"flex"}}>
            <div style={{display:"flex", opacity:"0.4", fontStyle:"italic", marginLeft:"20px"}}>À payer avant le 28/06/2021</div>
            <div style={{color:"blue", fontWeight:"bold", marginLeft:"400px" }}>776,00€</div>
            <img src={"/icon_observateur (1).svg"} alt="bouton visualisation"/>
            <img src={"/icon_download (1).svg"} alt="bouton téléchargement"/>
            </div>
        

            <div style={{display:"flex", marginLeft:"300px"}}>
            <img src={"/escompte.svg"} alt="bouton réduction"/>
            <p style={{ fontStyle:"italic", color:"#FFA500", marginLeft:"20px"}}>5% d'escompte jusqu'au 17/06/2021</p>
            </div>

        </div>
    );
}

