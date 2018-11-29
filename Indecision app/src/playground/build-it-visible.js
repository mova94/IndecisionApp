class VisibiltyToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state ={
            visibilty: false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
              visibilty: !this.state.visibilty  
            };
        });
    }
    render(){
        return(
            <div>
                <h1> Visibilty Toggle </h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibilty ? 'Hide Details' : 'Show Details'} </button>
                {this.state.visibilty && <p> Hi this worked! </p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibiltyToggle/>, document.getElementById("app"));





// let toggle = true;
// const toggleSwitch = () => {
//     toggle = !toggle;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibilty Toggle</h1>

//             <button onClick={toggleSwitch}>{toggle ? "Show Details" : "Hide Details"} </button>
//             {!toggle && <p>Hi, my build-it test run</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// var appRoot = document.getElementById("app");



// render();