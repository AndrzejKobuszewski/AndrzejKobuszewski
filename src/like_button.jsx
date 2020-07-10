'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return (<button onClick={() => this.setState({ liked: false }) }>
      Polubiłeś to :-)
    </button>);
    }

    return (
      <button onClick={() => this.setState({ liked: true }) }>
        Lubię To
      </button>
    );
  }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);



function tick() {
    const element = (
      

            <a>
                                  
                {new Date().toLocaleTimeString()}
                </a>
     
    );
    ReactDOM.render(element, document.getElementById('clock'));}
  
  setInterval(tick, 1000);
  
  