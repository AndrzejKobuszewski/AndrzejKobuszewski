'use strict';


class Nav_Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: "Start" }
    }

    render() {
        var { active } = this.props;

        try {
            switch (active) {

                case 'Start':
                    return (
                        <ul className="navbar-nav">
                            <li onClick={this.props.startclick} className={'navbar-brand text-white'} >Start</li>
                            <li onClick={this.props.itemclick} className={'navbar-brand text-white-50'} >Projekty</li>
                            <li onClick={this.props.umiejetnosciclick} className={'navbar-brand text-white-50'} >Umiejętności</li>
                            <li onClick={this.props.ofertaclick} className={'navbar-brand text-white-50'} >Oferta</li>
                        </ul>);
                    break;
                case 'Projekty':
                    return (
                        <ul className="navbar-nav">
                            <li onClick={this.props.startclick} className={'navbar-brand text-white-50'} >Start</li>
                            <li onClick={this.props.itemclick} className={'navbar-brand text-white'} >Projekty</li>
                            <li onClick={this.props.umiejetnosciclick} className={'navbar-brand text-white-50'} >Umiejętności</li>
                            <li onClick={this.props.ofertaclick} className={'navbar-brand text-white-50'} >Oferta</li>
                        </ul>);
                    break;
                case 'Umiejętności':
                    return (
                        <ul className="navbar-nav">
                            <li onClick={this.props.startclick} className={'navbar-brand text-white-50'} >Start</li>
                            <li onClick={this.props.itemclick} className={'navbar-brand text-white-50'} >Projekty</li>
                            <li onClick={this.props.umiejetnosciclick} className={'navbar-brand text-white'} >Umiejętności</li>
                            <li onClick={this.props.ofertaclick} className={'navbar-brand text-white-50'} >Oferta</li>
                        </ul>);
                    break;
                case 'Oferta':
                    return (
                        <ul className="navbar-nav">
                            <li onClick={this.props.startclick} className={'navbar-brand text-white-50'} >Start</li>
                            <li onClick={this.props.itemclick} className={'navbar-brand text-white-50'} >Projekty</li>
                            <li onClick={this.props.umiejetnosciclick} className={'navbar-brand text-white-50'} >Umiejętności</li>
                            <li onClick={this.props.ofertaclick} className={'navbar-brand text-white'} >Oferta</li>
                        </ul>);
                    break;
                default:
                    console.log("Mam nadzieję, że warto się uczyć Reacta");
            }
        } catch (error) {
            console.log("Wystąpił błąd");
        }
    }
}
class Oferta extends React.Component{
        constructor(props){
            super(props)
            this.state= {total:0, Mwh :0, Mwd:0, inputValue: 0, inputValue1: 0}
               
        console.log(isNaN(this.total));
    }
        
       clickAddMWh=()=>{this.setState({Mwh: this.inputValue, total: this.inputValue1*200+this.inputValue*30});  console.log(this.Mwh)}
       clickAddMWd=()=>{this.setState({Mwd: this.inputValue1, total: this.inputValue1*200+this.inputValue*30}); console.log(this.Mwd)}
       ClearOrder=()=>{this.setState({Mwh: 0, Mwd: 0, total: 0});}
       OnChangeInput=(e)=>{this.inputValue= e.target.value; console.log(e.target.value); console.log(this.inputValue)}
       OnChangeInput1=(e)=>{this.inputValue1= e.target.value; console.log(e.target.value); console.log(this.inputValue1)} 

        render(){
        return(
            <section id="Oferta">  
            <div>
                    <h1 style={{whiteSpace: "nowrap", overflow: "hidden"}}>          Oferta <span className="badge badge-success">NOWOŚĆ   </span>   
                           Oferta <span className="badge badge-success">NOWOŚĆ   </span>        
                             Oferta <span className="badge badge-success">NOWOŚĆ    </span>     
                                  Oferta <span className="badge badge-success">NOWOŚĆ    </span>    
                                        Oferta <span className="badge badge-success">NOWOŚĆ    </span>     
                                             Oferta <span className="badge badge-success">NOWOŚĆ   </span>    
                                                   Oferta <span className="badge badge-success">NOWOŚĆ   </span></h1>
                    
            </div>
            <div className="jumbotron-fluid container container-fluid my-4" >
                    <div className="row"> 
                            <div className="col-sm-3">
                                    <div className="card promo1" style={{width: "18rem"}}>
                                            
                                            <div className="mt-2 mx-5">
                                            <img src="./img/wall-clock.svg" className="card-img-top" style={{height:" 10vw"}} alt="1 godzina"/>
                                            </div>
                                            <div className="card-body">
                                              <h5 className="card-title">Jedna roboczogodzina mojej pracy nad Twoim projektem</h5>
                                              <p className="card-text"></p>
                                            <form>
                                              <div className="form-group">
                                                    <label for="exampleInputEmail1">Liczba roboczogodzin:</label>
                                                    <input type="number" className="form-control" onChange={this.OnChangeInput} placeholder="1"/>
                                                    <small id="emailHelp" className="form-text text-muted">Wpisz liczbę roboczogodzin</small>
                                                    <button  onClick= {this.clickAddMWh} type="button" className=" btn btn-info my-1" >Dodaj do koszyka</button>
                                                    {/* <small id="emailHelp" className="form-text text-muted">Pay Pal</small>
                                                    <button type="button"className=" btn btn-success">KUP TERAZ </button> */}
                                            </div>
                                            </form>
                                            </div>
                                    </div>
                            
                            </div>
                            <div className="col-sm-3">
                                    <div className="card promo2" style={{width: "18rem"}}>
                                            
                                            <div className="mt-2 mx-5">
                                            <img src="./img/schedule.svg" className="card-img-top" style={{height:"10vw"}} alt="1 dzień"/>
                                            </div>
                                            <div className="card-body">
                                              <h5 className="card-title">Jeden cały dzień roboczy mojej pracy nad Twoim projektem </h5>
                                              <p className="card-text"></p>
                                            <form>
                                              <div className="form-group">
                                                    <label for="exampleInputEmail1">Liczba dni roboczych:</label>
                                                    <input type="number" onChange={this.OnChangeInput1} className="form-control" placeholder="1"/>
                                                    <small id="emailHelp" className="form-text text-muted">Wpisz liczbę dni roboczych</small>
                                                    <button onClick= {this.clickAddMWd}type="button" className=" btn btn-info my-1" >Dodaj do koszyka</button>
                                                    {/* <small id="emailHelp" className="form-text text-muted">Pay Pal</small>
                                                    <button type="button"className=" btn btn-success">KUP TERAZ </button> */}
                                                                                                    
                                                    
                                            </div>
                                            </form>
                                            </div>
                                    </div>
                            
                            </div>
                            <div className="col-sm-3">
                                    <div className="card " style={{width: "18rem"}}>
                                           
                                            <div className="mt-2 mx-5">
                                            <img src="./img/WholeOrder.svg" className="card-img-top" style={{height: "10vw"}} alt="zlecenie"/>
                                            </div>
                                            <div className="card-body">
                                              <h5 className="card-title">Zlecenie</h5>
                                              <p className="card-text"> Możesz złożyć całe zlecenie lub powierzyć fragmenty swojego projektu do kompleksowej realizacji. 
                                              <br/> Sprawdź jak się ze mną pracuje - przyślij mi zadanie sprawdzające.
                                              </p>
                                              <button type="button" className=" btn btn-success my-1" data-toggle="modal" data-target="#exampleModal" >Kontakt</button>
                                            </div>
                                    </div>
                            
                            </div>
                            <div className="col-sm-3">
                                    <div className="card" style={{width: "18rem"}}>
                                        
                                            <div className="mt-2 mx-5 mb-1">
                                            <img src="./img/shopping-cart.svg" className="card-img-top" style={{height:"10vw"}} alt="koszyk"/>
                                            </div>
                                            <div className="card-body">
                                              <h5 className="card-title">Koszyk </h5>
                                              <p className="card-text" >
                                                    Razem do zapłaty: {this.state.total + ' zł'}

                                              </p>
                                              <p className="card-text" alt="Man-working-days" title="Man-working-days">
                                                    Liczba dni roboczych: {this.state.Mwd + ' Mwd'}

                                              </p>
                                              <p className="card-text" alt="Man-working-hours" title="Man-working-hours">
                                                    Liczba godzin roboczych: {this.state.Mwh + ' Mwh'}

                                              </p>
                                            <form>
                                              <div className="form-group">
                                                    
                                                    <small id="emailHelp" className="form-text text-muted">Zacznij zakupy od początku</small>
                                                    <button onClick={this.ClearOrder} type="button" className="btn btn-info my-1" >Opróżnij koszyk</button>
                                                    {/* <small id="emailHelp" className="form-text text-muted mt-2">Pay Pal</small>
                                                   
                                                    <button type="button"className=" btn btn-success mb-1">KUP TERAZ </button> */}
                                                    
                                                    <div id="paypal-button-container"></div> 
                                                    
                                                    {/* {paypal.Buttons().render('#paypal-button-container')}                                       */}
                                                   
                                                  
                                            </div>
                                               
                                            </form>
                                          
                                            </div>
                                           
                                    </div>
                            
                            </div>
                    </div>
                    <div className="row"></div>
            </div>                        
    </section>    
        );
        }
    }

class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        var { active } = this.props;
        try {
            switch (active) {

                case 'Start':
                    return (
                        <section id="intro" style={{position:"relative"}}>

                            <div id="demo" className="col-sm-12 carousel slide" data-ride="carousel">

                                <ul className="carousel-indicators">
                                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                                    <li data-target="#demo" data-slide-to="1"></li>
                                </ul>


                                <div className=" carousel-inner" style={{ height: "98vh", backgroundImage: "url('./img/tree.jpg')", backgroundSize: "cover" }} >

                                    <div className=" row carousel-item active"   >
                                        <img src="./img/usmiechniety.png" style={{ height: "600px" }} className="rounded" alt="usmiechniety" />

                                    </div>

                                    <div className="row carousel-item" >
                                        <img src="./img/powazny.png" className="rounded" style={{ height: "600px" }} alt="powazny" />

                                    </div>

                                </div>

                                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </a>
                                <a className="carousel-control-next" href="#demo" data-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </a>

                            </div>
                            <div className="lead p-3 mr-5">
                                <span><i><q>Nawet z pozoru najdziwaczniejsza, najskromniejsza pasja jest czymś
                                bardzo, ale to bardzo cennym. </q>
                                </i><br /><span className="blockquote"><b><cite>- Stephen King </cite></b></span> </span>
                                <div>
                                    <button type="button" className=" btn btn-success" data-toggle="modal" data-target="#exampleModal" >Kontakt</button>
                                    <button onClick={this.props.itemclick} type="button" className=" btn btn-info">Projekty</button>
                                </div>
                            </div>

                        </section>);

                    break;
                case 'Projekty':
                    return (
                        <section id="projekty">
                            <div className="contant parallax my-3" style={{

                                backgroundImage: "url('./img/screenshot.png')",

                                backgroundAttachment: "fixed",
                                backgroundPosition: "center",
                                backgroundRepeat: "repeat",
                                backgroundSize: "cover"
                            }}>

                                <div className="container text-white">
                                    <div className="row">
                                        <h2 className="mx-auto ">Projekty
                                            </h2>

                                        
                                   
                                    </div>
                                    <div className=" ">
                                    <LikeButton />
                                        </div>


                                    <div className="hexagony">
                                        <article className="article1 ">
                                            <figure><a href="#" style={{ textDecoration: "none", color: "white" }}>
                                                <h2><br />Kobuszewski.com<br /></h2>
                                                <p>Strona powstała podczas pandemii COVID19 w celu praktycznego zapoznania się z frameworkiem Bootstrap 4 oraz React.</p>
                                            </a>
                                            </figure>

                                            <img src="./img/react.png" alt="react" title="react" height="3vw" />

                                        </article>
                                        <article className="article2">
                                            <figure><a href='https://github.com/AndrzejKobuszewski/NT4.git' target="blanc" style={{ textDecoration: "none", color: "white" }}>
                                                <h2>Napędzamy Polskę 4.0</h2>
                                                <p>Projekt strony inicjatywy, której celem jest wprowadzenie zarządzania mobilnością
                                    w Polsce.</p>
                                            </a>
                                            </figure>
                                            <img src="./img/phpmysql.jpeg" alt="php, mysql" title="php, mysql" height="40px" />
                                        </article>
                                        <article className="article0">
                                            <figure>
                                                <h2>Projekty zrealizowane przeze mnie w ostatnich latach</h2>
                                                <p></p>
                                            </figure>

                                        </article>
                                        <article className="article3">
                                            <figure>
                                                <h2>Tourfast.pl</h2><a href='http://www.tourfast.pl' target='blanc' style={{ textDecoration: "none", color: "white" }}>
                                                    <p>Strona zrealizowana dla start-upu, oferującego szybkie zwiedzanie miasta stołecznego Warszawy.</p>
                                                </a>
                                            </figure>
                                            <img alt src='./img/logo-elementor.png' />

                                        </article>
                                        <article className="article4">
                                            <figure>
                                                <h2>Coders Lab</h2>
                                                <p>Coders Lab to szkoła programowania. Zajęcia prowadzone były
                                            w trybie dziennym w formie intensywnego bootcampu przez 2 miesiące.</p>
                                            </figure>
                                            <img alt src='./img/ajax-logo.jpg' />
                                        </article>
                                        <article className="article5">
                                            <figure>
                                                <h2>Sieć Wewnętrzna</h2>
                                                <p>Sieć wewnętrzna to codzienne czynności związane z administracją urządzeniami domowymi.</p>
                                            </figure>
                                            <img alt src='./img/ubuntu-logo.jpg' />
                                        </article>
                                        <article className="article6">
                                            <figure>
                                                <h2>IT Service Management</h2>
                                                <p>Zarządzanie usługami IT w transporcie towarzywszy mi przez całe życie zawodowe.</p>
                                            </figure>
                                            <img alt src='./img/DevOps-logo.png' />
                                        </article>
                                        
                                    </div>

                                </div>
                                <div>
                                    <p id="OpisProjektowTabela" style={{backgroundColor:"grey"}} className="text-white">Poniższa tabela stanowi wykaz moich projektów zrealizowanych
                                    w ostatnich latach. Projektom zostały nadane nazwy robocze wraz z podaniem
                                    nazw wykorzystanych technologii. W tabeli znajdują
                                    się odnośniki do repozytariów na github lub do opublikowanych witryn.</p>
                                    <table className="table table-dark table-hover">
                                        <thead>
                                            <tr>
                                                <th>Projekt</th>
                                                <th>Technologia</th>
                                                <th>Opis</th>
                                                <th>Link</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Kobuszewski.com</td>
                                                <td>
                                                    <img src="https://www.dutchwebdesign.nl/wp-content/uploads/2011/02/html5-1920x1200.png" alt="HTML" title="HTML" height="40px" />
                                                    <img src="http://w3widgets.com/responsive-slider/img/css3.png" alt="css" title="css" height="40px" />
                                                    <img src="https://michel.dumont.io/mdgFront/uploads/post/19/logo_javascript-small.png" alt="js" title="js" height="40px" />
                                                    <img src="./img/bootstrap4.jpg" alt="bootstrap4" title="bootstrap4" height="40px" />
                                                    <img src="./img/react.png" alt="react" title="react" height="40px" />

                                                </td>
                                                <td><button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#opisKobuszewski">Opis Projektu</button>
                                                </td>
                                                <td><a href="https://github.com/AndrzejKobuszewski/AndrzejKobuszewski.git" target="blanc"><img src="./img/gitLogo.jpg" alt="github" title="github" height="40px" /></a></td>
                                            </tr>
                                            <tr id="opisKobuszewski" className="collapse">
                                                <td></td>
                                                <td colspan="4" >
                                                    Opis projektu "Kobuszewski.com":<br />
                                            Strona powstała podczas pandemii COVID19 w celu praktycznego zapoznania się z frameworkiem Bootstrap 4 oraz React.

                                            </td>
                                            </tr>

                                            <tr>
                                                <td>Napędzamy Transport 4.0</td>
                                                <td>
                                                    <img src="https://www.dutchwebdesign.nl/wp-content/uploads/2011/02/html5-1920x1200.png" alt="HTML" title="HTML" height="40px" />
                                                    <img src="http://w3widgets.com/responsive-slider/img/css3.png" alt="css" title="css" height="40px" />
                                                    <img src="https://michel.dumont.io/mdgFront/uploads/post/19/logo_javascript-small.png" alt="js" title="js" height="40px" />
                                                    <img src="./img/phpmysql.jpeg" alt="php, mysql" title="php, mysql" height="40px" />
                                                    <img src="./img/mariadb.jpg" alt="mariadb logo" title="mariadb logo" height="40px" />
                                                    <img src="./img/SassGulp_logo.png" alt="Sass Gulp logo" title="Sass Gulp logo" height="40px" />
                                                    <img src="./img/wordpress-logo.png" alt="wordpress" title="wordpress" height="40px" />
                                                    <img src="./img/ytApi.png" alt="youtubeapi" title="youtube api" height="40px" />
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRre2hbPNrjdZNQgXjRmf3sTv6R9oCYxUawL39KAx5PJX4DS6gW" alt="mailing" title="mailing" height="40px" />
                                                    <img src="./img/rss.png" alt="rss logo" title="rss logo" height="40px" />



                                            </td>
                                                <td><button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#opisNT">Opis Projektu</button></td>

                                                <td><a href="https://github.com/AndrzejKobuszewski/NT4.git" target="blanc"><img src="./img/gitLogo.jpg" alt="github" title="github" height="40px" /></a></td>
                                            </tr>
                                            <tr id="opisNT" className="collapse">
                                                <td></td>
                                                <td colspan="4" >
                                                    Opis projektu "Napędzamy Transport 4.0":<br />
                                            Projekt strony inicjatywy, której celem jest wprowadzenie zarządzania mobilnością
                                            w Polsce opartej na współpracy śrdowisk kształtujących mobilność przy wiodącej
                                            roli społeczności korzytającej systemu transportowego.
                                            </td>
                                            </tr>
                                            <tr>
                                                <td>Tourfast.pl</td>
                                                <td>
                                                    <img src="https://www.dutchwebdesign.nl/wp-content/uploads/2011/02/html5-1920x1200.png" alt="HTML" title="HTML" height="40px" />
                                                    <img src="http://w3widgets.com/responsive-slider/img/css3.png" alt="css" title="css" height="40px" />
                                                    <img src="https://michel.dumont.io/mdgFront/uploads/post/19/logo_javascript-small.png" alt="js" title="js" height="40px" />
                                                    <img src="./img/phpmysql.jpeg" alt="php, mysql" title="php, mysql" height="40px" />
                                                    <img src="./img/wordpress-logo.png" alt="wordpress" title="wordpress" height="40px" />
                                                    <img src="./img/logo-elementor.png" alt="elementor" title="elementor" height="40px" />
                                                    <img src="./img/Gtranslate.jpeg" alt="google translate" title="google translate" height="40px" />
                                                    <img src="./img/Facebook_icon.png" alt="facebook logo" title="facebook logo" height="40px" />



                                                </td>
                                                <td><button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#opisTFW">Opis Projektu</button></td>

                                                <td><a href="http://www.tourfast.pl" target="blanc"><img src="./img/TFlogo.png" alt="tourfast.pl link to website" title="tourfast.pl link to website" height="40px" /></a></td>
                                            </tr>
                                            <tr id="opisTFW" className="collapse">
                                                <td></td>
                                                <td colspan="4" >
                                                    Opis projektu "TourFast.pl":<br />
                                            Strona zrealizowana dla start-upu, oferującego szybkie zwiedzanie miasta stołecznego Warszawy w
                                            nowoczesny i szybki sposób na hulajnogach elektrycznych.
                                            </td>
                                            </tr>
                                            <tr>
                                                <td>Coders Lab</td>
                                                <td>
                                                    <img src="https://www.dutchwebdesign.nl/wp-content/uploads/2011/02/html5-1920x1200.png" alt="HTML" title="HTML" height="40px" />
                                                    <img src="http://w3widgets.com/responsive-slider/img/css3.png" alt="css" title="css" height="40px" />
                                                    <img src="https://michel.dumont.io/mdgFront/uploads/post/19/logo_javascript-small.png" alt="js" title="js" height="40px" />
                                                    <img src="./img/jquery-logo.png" alt="jquery logo" title="jquery logo" height="40px" />
                                                    <img src="./img/ajax-logo.jpg" alt="ajax logo" title="ajax logo" height="40px" />
                                                    <img src="./img/SassGulp_logo.png" alt="Sass Gulp logo" title="Sass Gulp logo" height="40px" />
                                                    <img src="./img/phpmysql.jpeg" alt="php, mysql" title="php, mysql" height="40px" />
                                                    <img src="./img/phpmyadmin-logo.jpg" alt="phpmyadmin-logo" title="phpmyadmin-logo" height="40px" />
                                                    <img src="./img/wordpress-logo.png" alt="wordpress" title="wordpress" height="40px" />
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRre2hbPNrjdZNQgXjRmf3sTv6R9oCYxUawL39KAx5PJX4DS6gW" alt="mailing" title="mailing" height="40px" />

                                                </td>
                                                <td><button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#opisCL">Opis Projektu</button>
                                                    <div id="opisCL" className="collapse">

                                                    </div></td>
                                                <td><a href="https://github.com/AndrzejKobuszewski/Fork.git" target="blanc"><img src="./img/gitLogo.jpg" alt="github" title="github" height="40px" /></a></td>
                                            </tr>
                                            <tr id="opisCL" className="collapse">
                                                <td></td>
                                                <td colspan="4" >
                                                    Opis projektu "Coders Lab":<br />
                                            Coders Lab to szkoła programowania, którą ukończyłem w 2018 roku. Zajęcia prowadzone były
                                            w trybie dziennym w formie intensywnego bootcampu przez 2 miesiące z cotygodniowymi egzaminami.
                                            Szkoda, że się już skończyły... :-) Każdemu polecam taką przygodę.<br />
                                                    <i>Z uwagi na prawa autorskie Szkoły dostęp do repo na github mocno ograniczyłem.</i>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Sieć wewnętrzna</td>
                                                <td>
                                                    <img src="./img/vba-logo.jpg" alt="vba logo" title="vba logo" height="40px" />
                                                    <img src="./img/synology.png" alt="Synology logo" title="Synology logo" height="40px" />
                                                    <img src="./img/Windows.png" alt="Windows logo" title="Windows logo" height="40px" />
                                                    <img src="./img/android-logo.jpg" alt="android logo" title="android logo" height="40px" />
                                                    <img src="./img/debian-logo.jpeg" alt="Debian logo" title="Debian logo" height="40px" />
                                                    <img src="./img/ubuntu-logo.jpg" alt="Ubuntu logo" title="Ubuntu logo" height="40px" />
                                                    <img src="./img/ansible-logo.jpg" alt="ansible logo" title="ansible logo" height="40px" />
                                                    <img src="./img/arduino-logo.png" alt="arduino logo" title="arduino logo" height="40px" />
                                                    <img src="./img/scratch-logo.png" alt="scratch logo" title="scratch logo" height="40px" />

                                                </td>
                                                <td><button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#opisN">Opis Projektu</button></td>
                                                <td>-------</td>
                                            </tr>
                                            <tr id="opisN" className="collapse">
                                                <td></td>/
                                            <td colspan="4" >
                                                    Opis projektu "Sieć wewnętrzna":<br />
                                            Sieć wewnętrzna to codzienne czynności związane z administracją urządzeniami domowymi w tym serwerami
                                            i komputerami z systemami linux, windows 10 oraz domowymi urządzeniami z własnym autorskim oprogramowaniem.
                                            </td>
                                            </tr>



                                            <tr>
                                                <td>IT Service Management</td>
                                                <td>
                                                    <img src="./img/DevOps-logo.png" alt="DevOps logo" title="DevOps logo" height="40px" />
                                                    <img src="./img/itil3-logo.jpeg" alt="itil3 logo" title="itil3 logo" height="40px" />
                                                    <img src="./img/prince_2_practitioner.jpg" alt="prince_2_practitioner logo" title="prince_2_practitioner logo" height="40px" />
                                                    <img src="./img/tk-logo.jpg" alt="tk logo" title="tk logo" height="40px" />
                                                    <img src="./img/warszawa-logo.png" alt="warszawa logo" title="warszawa logo" height="40px" />
                                                    <img src="./img/gddkia-logo.jpg" alt="gddkia logo" title="gddkia logo" height="40px" />
                                                    <img src="./img/Jacobs-logo.png" alt="Jacobs logo" title="Jacobs logo" height="40px" />
                                                    <img src="./img/cpk-logo.jpg" alt="Jcpk logo" title="cpk logo" height="40px" />
                                                </td>
                                                <td><button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#opisITSM">Opis Projektu</button></td>

                                                <td>-------</td>
                                            </tr>
                                            <tr id="opisITSM" className="collapse">
                                                <td></td>
                                                <td colspan="4" >
                                                    Opis projektu "IT Service Management":<br />
                                            Zarządzanie usługami IT w transporcie towarzywszy mi przez całe życie zawodowe. Zaczynałem pracę przy systemie
                                             radiokomunikacji GSM-R dla kolei, następnie pracowałem w systemach ITS w drogownictwie, a obecnie zajmuję się
                                             usługami integrującymi gałęzie transportu.
                                            </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* <!-- Container element --> */}




                        </section>

                    );
                    break;
                case 'Umiejętności':
                    return (
                        <section id="capabilities">
                        <div className="jumbotron-fluid container container-fluid my-3" >
                               
                                <div className="row">
                                <h2 className="mx-auto mb-1">Umiejętności</h2>
                                </div>
                               <div className="row">
                                <div className="col-sm-4">
                                <h3>Edukacja</h3>
                                <ol>

                                <li className="my-4">Skills sp. z o.o. – Prince2 Practitioner Certificate – 2019 r.</li>
                                <li className="my-4">Coders Lab – Junior Programmer Certificate – 2018</li>
                                <li className="my-4">Warsaw University of Technology (Politechnika Warszawska), Transport Division, Telecommunication in Transport (ITS)</li>
                                </ol>
                                </div>
                                <div className="col-sm-4">
                                <h3>Szkolenia</h3>
                                <ol>
                                        <li className="my-2">2019        ITIL v.3 Transition - Szkolenie wewnętrzne</li>
                                        <li className="my-2">2017	IT Manager Academy - IT Leader Club Polska</li>
                                        <li className="my-2">2017	Expert Business Process Management – Altkom</li>                        
                                        <li className="my-2">2017	Service Oriented Architecture – Altcom</li>
                                        <li className="my-2">2017	Togaf – prof. Andrzej Sobczak</li>
                                        <li className="my-2">2017  	Montreal World ITS Congress</li>
                                        <li className="my-2">2016	IT Agreements – Maruta Wachta sp.j. – Law office</li>                                 
                                        <li className="my-2">2016        Service Design – Prime Minister Office</li>                           
                                        <li className="my-2">2015	ITIL v.3 – CTPartners	</li>
                                        <li className="my-2">2015 	Detroit World ITS Congress</li>
                                      
                                </ol>
                                </div>  
                                <div className="col-sm-4">
                                <h3>Języki obce</h3>
                                <ol>
                                <li className="my-4">English - very good</li>
                                <li className="my-4">German - comunicative</li>
                                <li className="my-4">French - basic</li>
                                </ol>
                                </div>
                                </div>
                        </div>
                </section>  
                        );
                    break;
                case 'Oferta':
                    return (<Oferta />                        
                    );
                    break;
                default:
                    console.log("Mam nadzieję, że warto się uczyć Reacta");
            }
        }
        catch (error) {
            console.log("Wystąpił błąd");
        }
       
    }
}


class App extends React.Component {
    state = { active: "Start" };

    itemclick = () => {
        this.setState({ active: "Projekty" });

    }
    startclick = () => {
        this.setState({ active: "Start" });
    }

    umiejetnosciclick = () => {
        this.setState({ active: "Umiejętności" });
    }

    ofertaclick = () => {
        this.setState({ active: "Oferta" });
    }

    render() {
        // const active = this.state.active;
        return (
            <main className="container-fluid">
                <header>
                    <nav className="col-sm-12 navbar navbar-expand-md bg-dark navbar-dark sticky sticky-top">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            {<Nav_Menu active={this.state.active} itemclick={this.itemclick} startclick={this.startclick} umiejetnosciclick={this.umiejetnosciclick} ofertaclick={this.ofertaclick} />}
                        </div>
                        <div className="clock nav-item nav-link" id="clock">
                        </div>
                    </nav>
                </header>
                {<Content active={this.state.active} itemclick={this.itemclick} />}
            </main>);
    }
}
ReactDOM.render(<App />, document.querySelector('#App'));




class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
  
    render() {
      if (this.state.liked) {
          
        return (<button className="btn btn-success" style={{float:"left"}} onClick={() => this.setState({ liked: false }) }>
        Polubiłeś to :-)
      </button>);
      }
  
      return (
        <button  className="btn btn-info" style={{float:"left"}} onClick={() => this.setState({ liked: true }) }>
          Lubię To
        </button>
      );
    }
  }


  
  
  
  
  function tick() {
      const element = (
        
  
              <div className='clock text-white'> 
                                    
                  {new Date().toLocaleTimeString()}
                  </div>
       
      );
      ReactDOM.render(element, document.getElementById('clock'));}
    
setInterval(tick, 1000);
    
    