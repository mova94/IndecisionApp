class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options: []
        };

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleAddOption.bind(this);
    }

    componentDidMount() {
        try{
            //store the saved data into a variable
            const json = localStorage.getItem('options');
            //parse the data using JSON.parse() and store it in a variable
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({
                    options
                }));
            }
        }
        catch(e){
            //do nothing
        }
        
        
    }
//Store the object using JSON and save to localStorage
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log("UNMOUNTED!");
    }

    handleDeleteOptions (){
        //to return an object using the short hand syntax ({}). wrap paratheses around the brackets to return object.
        this.setState(() => ({options: []}));
    }

    handleDeleteOption (optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    handlePick() {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        alert(option);
    }

    handleAddOption(option){
        if(!option){
            return 'Enter Valid Value TO ADD ITEM';
        }
        else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exist!';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option)}));
    }
    //handlePick - pass down to Action and setup onCLick - bind here
    //random pick option
    render(){
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                hasOptions = {this.state.options.length > 0} 
                handlePick = {this.handlePick}
                />
                <Options 
                options = {this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption
                handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
return(
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        );
}

// class Header extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return(
            <div>
                <button onClick={props.handlePick}
                disabled={!props.hasOptions} 
                >
                
                What Should I Do? 
                
                </button>
            </div>
        )
}

// class Action extends React.Component{   
//     render(){
//         return(
//             <div>
//                 <button onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions} 
//                 >
                
//                 What Should I Do? 
                
//                 </button>
//             </div>
//         )
//     }
// }

const Options = (props) => {
    return(
            <div>
                <button onClick={props.handleDeleteOptions}>Remove All</button>
                {props.options.length === 0 && <p> please add option to get started </p>}
                {
                    props.options.map((option) => (
                    <Option 
                    key={option} optionText = {option} 
                    handleDeleteOption = {props.handleDeleteOption}
                    />
                ))
            }
            </div>
        );
}

// class Options extends React.Component{
//     render(){
//         return(
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>

//                 {this.props.options.map((option) => {
//                     return <Option key={option} optionText = {option} />;
//                 })}
//             </div>
//         );
//     }
// }

class AddOption extends React.Component{
    constructor(props){
        super(props);

        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error: error}));

        if(!error) {
            e.target.elements.option.value = "";
        }
    }

    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const Option = (props) => {
    return (
            <div>
               {props.optionText}
               <button onClick = {(e) => {
                props.handleDeleteOption(props.optionText);
               }}>
               remove</button>
            </div>
        );
}

// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//                {this.props.optionText}
//             </div>
//         );
//     }
// }


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
