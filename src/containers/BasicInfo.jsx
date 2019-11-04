import React, {Component} from 'react';  

/* Import Components */
import TextArea from '../components/TextArea'; 
import CheckBox from '../components/CheckBox';
import Radio from '../components/Radio';
import Button from '../components/Button';

class BasicInfo extends Component {
        constructor(props) {
          super(props);
      
          this.state = {
            gender: '',
            expertise: '',
            about: '',
            skills:[], 
            genderOptions: ['Male', 'Female', 'Others'],
            skillOptions: ['Programming', 'Development', 'Design', 'Testing']
          }
         
          this.handleInput = this.handleInput.bind(this);
          this.handleCheckBox = this.handleCheckBox.bind(this);
          this.handleNext = this.handleNext.bind(this);
          
        }
        handleInput(e) {
            let value = e.target.value;
            let name = e.target.name;
            this.setState(
                prevState => ({
                    ...prevState,
                    [name]: value
                }),
              () => console.log(this.state)
            );
          }

    
        handleCheckBox(e) {
            const newSelection = e.target.value;
            let newSelectionArray;

            if (this.state.skills.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.skills.filter(
                s => s !== newSelection
            );
            } else {
            newSelectionArray = [...this.state.skills, newSelection];
            }

            this.setState(prevState => ({
            ...prevState, 
            skills: newSelectionArray }
            ));
        }

        handleNext(e) {
            e.preventDefault();
            this.props.handler({gender: this.state.gender, skills: this.state.skills, about: this.state.about});
          }

    render() {
        return(
            <div>
             <Radio
                title={"Gender"}
                name={"gender"}
                options={this.state.genderOptions}
                value={this.state.gender}
                //   placeholder={"Select Gender"}
                handleChange={this.handleInput}
            />{" "}
            {/* Age Selection */}
            <CheckBox
                title={"Skills"}
                name={"skills"}
                options={this.state.skillOptions}
                selectedOptions={this.state.skills}
                handleChange={this.handleCheckBox}
            />{" "}
            {/* Skill */}
            <TextArea
                title={"About you."}
                rows={10}
                value={this.state.about}
                name={"about"}
                handleChange={this.handleInput}
                placeholder={"Describe your past experience and skills"}
            />
            {/* About you */}
            <Button
                action={this.handleNext}
                type={"primary"}
                title={"Next"}
                style={buttonStyle}
            />{" "}
            {/*Submit */}
        </div>
        )
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 10px"
  };

export default BasicInfo