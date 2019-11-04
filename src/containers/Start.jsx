import React, {Component} from 'react';  

/* Import Components */
import Input from '../components/Input'; 
import Button from '../components/Button';

class Start extends Component {
        constructor(props) {
          super(props);
      
          this.state = {
            npi: '',
            last_name:'',
            name:'',
            data: []      
      
          }
          this.handleInput = this.handleInput.bind(this);
          this.handleValidateNPI = this.handleValidateNPI.bind(this);
          
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

    handleValidateNPI(e) {
        e.preventDefault();
        let targetUrl = 'https://cors-anywhere.herokuapp.com/https://npiregistry.cms.hhs.gov/api/?version=2.1&number=' + this.state.npi + '&last_name=' + this.state.last_name;
    
        fetch(targetUrl, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }).then(response => {
          response.json().then(data => {
            console.log(data);
            if (data.results.length > 0) { this.setState(
                prevState => ({
                    ...prevState.data,
                    data: data.results[0].basic,
                    name: data.results[0].basic.first_name + ' ' + data.results[0].basic.last_name
                })
              );
              alert('Provider name: ' + this.state.name);
              this.props.handler({npi: this.state.npi, name: this.state.name});
            }
            else {
                alert('Provider not found!')
            }
          });
        });
      }

    render() {
        return(
            <div>
        <Input
          inputType={"text"}
          name={"last_name"}
          title={"last_name"}
          value={this.state.last_name}
          placeholder={"Last Name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the user */}
        <Input
          inputType={"number"}
          name={"npi"}
          title={"npi"}
          value={this.state.npi}
          placeholder={"Enter your NPI number"}
          handleChange={this.handleInput}
        />{" "}
        {/* NPI Number */}
        <Button
          action={this.handleValidateNPI}
          type={"primary"}
          title={"Validate NPI"}
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

export default Start