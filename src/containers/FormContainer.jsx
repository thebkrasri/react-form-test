import React, {Component} from 'react';  

/* Import Components */
import Button from '../components/Button';
import Start from '../containers/Start';
import BasicInfo from '../containers/BasicInfo';

class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
        currentStep: 'Start',
      newUser: {
        npi:'',
        name: '',
        email: '',
        age: '',
        gender: '',
        expertise: '',
        about: '',
        skills:[],
        sites: []

      },

      genderOptions: ['Male', 'Female', 'Others'],
      skillOptions: ['Programming', 'Development', 'Design', 'Testing'],
      steps:['Start', 'BasicInfo']

    }
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  /* This life cycle hook gets executed when the component mounts */
  handleUpdate(object) {
      Object.keys(object).map((key, index) => 
        this.setState( prevState => ({
            newUser: {
              ...prevState.newUser,
              [key]: object[key]
            }
          })
        )
    );
    alert('Info updated!');
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    console.log(userData);
    alert(userData.name + ', ' + userData.npi + ', ' + userData.gender + ', ' + userData.skills.map( k => ' ' + k ));
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        npi: "",
        gender: "",
        skills: [],
        about: ""
      },
      sites:[]
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Start handler = {this.handleUpdate}/>
        <BasicInfo handler = {this.handleUpdate}/>
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
