import React from "react";

class NameSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }
  changeName(newName) {
    this.setState({
      name: newName,
    });
  }

  componentDidMount(){
    setTimeout(()=>{
        this.changeName("Claudio Bianchi");
    },3000)
  }

  render() {
    return (
      <div className="text-center">
        <h1>Benvenuti nel mio sito</h1>
        <p>Sono {this.state.name}.</p>
        <button className="btn btn-primary "onClick={ ()=> {this.changeName("Mario Rossi")}}> Cambia Nome</button>
      </div>
    );
  }
}
export default NameSection;
