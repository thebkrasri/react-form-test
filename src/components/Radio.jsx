import React from "react";
const Radio = props => {
    return (
      <div className="form-group">
        <label for={props.name} className="form-label">
          {props.title}
        </label>
        <div className="radio-group">
          {props.options.map(option => {
            return (
              <label key={option} className="radio-inline">
                <input
                  id={props.name}
                  name={props.name}
                  onChange={props.handleChange}
                  value={option}
                  checked={props.value.indexOf(option) > -1}
                  type="radio"
                />
                {option}
              </label>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default Radio;