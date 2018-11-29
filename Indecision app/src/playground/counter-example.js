class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }

    componentDidMount(){
        const num = localStorage.getItem('count');
        if(!isNaN(num)){
            this.setState(() => ({
                count: parseInt(num)
            }));
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count) {
            
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
        console.log("add one");
    }
    handleMinusOne() {
        this.setState((prevState) => ({ count: prevState.count - 1}));
        console.log("minus one");
    }
    handleReset() {
        this.setState(() => ({count: 0}));
        console.log("reset");
    }
    
    render(){
        return(
            <div>
            <h1>Count: {this.state.count} </h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter />, document.getElementById("app"));













// //------------------------------------------------------------
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }


// //------challenge---------------

// //Make button -1 - setup minusOne function and register - log "minusOne"
// //Make reset button "reset" - setups reset function - log "reset"

// const appRoot = document.getElementById("app");



// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1> Count: {count}  </h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>

//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();