import React from 'react';
//import components
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';



class IndecisionApp extends React.Component{
    state = {
        options: []
    };
    
    handleDeleteOptions = () => {
        //to return an object using the short hand syntax ({}). wrap paratheses around the brackets to return object.
        this.setState(() => ({
            options: [],
            selectedOption: undefined
        }));
    };

    handleDeleteOption = (optionToRemove) => {
        console.log("works");
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    };

    handlePick = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        this.setState(() =>({
            selectedOption: option
        }));
    };

    handleCloseModal = () => {
        this.setState( () => ({
            selectedOption: undefined
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter Valid Value TO ADD ITEM';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist!';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };
    //handlePick - pass down to Action and setup onCLick - bind here
    //random pick option

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

    
    render(){
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />

                    </div>
                  
                </div>
                
                <OptionModal
                selectedOption = {this.state.selectedOption}
                handleCloseModal = {this.handleCloseModal} 
                />
            </div>
        );
    }
}


export default IndecisionApp;