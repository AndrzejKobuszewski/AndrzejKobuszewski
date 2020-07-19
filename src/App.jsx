'use strict';


function Nav_Menu_Item({Menu_Item_Name, BootstrapClass="text-white-50"}){
    
return (<li onClick={itemclick} className={'navbar-brand' + ' '+ BootstrapClass} >{Menu_Item_Name}</li>);
}

function itemclick(){
console.log(Menu_Item_Name);
return Menu_Item_Name;

}
  
function Nav_Menu(stanTeraz){
    
    render()
    { 
        try {  
            switch (stanTeraz){
              
              case 'Start':
              return(  
                  <ul className="navbar-nav">
                     <Nav_Menu_Item Menu_Item_Name="Start" BootstrapClass="text-white" />
                     <Nav_Menu_Item Menu_Item_Name="Projekty" BootstrapClass="text-white-50"/>   
                     <Nav_Menu_Item Menu_Item_Name="Umiejętności" BootstrapClass="text-white-50"/> 
                     <Nav_Menu_Item Menu_Item_Name="Oferta" BootstrapClass="text-white-50"/> 
                  </ul>); 
              break;
              case 'Projekty':
                  return(  
                      <ul className="navbar-nav">
                         <Nav_Menu_Item Menu_Item_Name="Start" BootstrapClass="text-white-50" />
                         <Nav_Menu_Item Menu_Item_Name="Projekty" BootstrapClass="text-white"/>   
                         <Nav_Menu_Item Menu_Item_Name="Umiejętności" BootstrapClass="text-white-50"/> 
                         <Nav_Menu_Item Menu_Item_Name="Oferta" BootstrapClass="text-white-50"/> 
                      </ul>); 
                  break;
              case 'Umiejętności':
                  return(  
                      <ul className="navbar-nav">
                          <Nav_Menu_Item Menu_Item_Name="Start" BootstrapClass="text-white-50" />
                          <Nav_Menu_Item Menu_Item_Name="Projekty" BootstrapClass="text-white-50"/>   
                          <Nav_Menu_Item Menu_Item_Name="Umiejętności" BootstrapClass="text-white"/> 
                          <Nav_Menu_Item Menu_Item_Name="Oferta" BootstrapClass="text-white-50"/> 
                      </ul>); 
                  break;
              case 'Oferta':
                  return(  
                      <ul className="navbar-nav">
                          <Nav_Menu_Item Menu_Item_Name="Start" BootstrapClass="text-white-50" />
                          <Nav_Menu_Item Menu_Item_Name="Projekty" BootstrapClass="text-white-50"/>   
                          <Nav_Menu_Item Menu_Item_Name="Umiejętności" BootstrapClass="text-white-50"/> 
                          <Nav_Menu_Item Menu_Item_Name="Oferta" BootstrapClass="text-white"/> 
                      </ul>); 
                  break;
              default:
                  console.log("Mam nadzieję, że warto się uczyć Reacta");
           } } catch (error) {
              console.log("Wystąpił błąd");
          }
    }
}



class App extends React.Component {
constructor(props) {
        super(props);
        this.state = { active: "Start" };
    }


render(){
    var {stan="Projekty"}=this.props;
    return (            
        <nav className="col-sm-12 navbar navbar-expand-md bg-dark navbar-dark sticky sticky-top">                                                             
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>                                          
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <h1>{this.state.active}</h1>
                <h1>{stan}</h1>
                {<Nav_Menu stanTeraz='Oferta'/>}
            </div>
            <div className="clock nav-item nav-link" id="clock">                              
            </div>  
        </nav> )
}

}
ReactDOM.render(<App/>, document.querySelector('#App'));