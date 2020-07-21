'use strict'
 
//Single position in Main Menu
  
class Nav_Menu_Item extends React.Component {   
    render() {
        var {Menu_Item_Name, BootstrapClass="text-white-50"} = this.props;
        return (<li onClick={itemclick} className={'navbar-brand' + ' '+ BootstrapClass} >{Menu_Item_Name}</li>);
  
   function itemclick(){
    console.log(Menu_Item_Name);    
    return Menu_Item_Name;

    }
}}
class Nav_Menu extends React.Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {LastClicked: 'Start'};
        }
    handleChange(e) {
            this.setState({LastClicked: e.Menu_Item_Name.itemclick()});  }

     render(){
        var {LastClicked} = this.props;
         this.setState={LastClicked: Nav_Menu_Item.Menu_Item_Name}
         console.log(this.state.LastClicked);
         try {  
          switch(this.state.LastClicked){
            
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


  // React Main Menu below
  class Nav_React extends React.Component { 
    render() {     
      
        return (            
            <nav className="col-sm-12 navbar navbar-expand-md bg-dark navbar-dark sticky sticky-top">                                                             
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>                                          
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <h1>Psi .</h1>
                        {<Nav_Menu LastClicked = 'Start'/>} 
                                           
                                               
                </div>
                <div className="clock nav-item nav-link" id="clock">                              
                </div>  
            </nav> );
                 
    }
}
 ReactDOM.render(<Nav_React/>, document.querySelector('#React-Nav'));

