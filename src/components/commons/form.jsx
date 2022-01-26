import React, { Component } from "react";
import InputForm from "../inputForm";
import SelectForm from "../selectForm";
class Form extends Component {
	state = { data: {}, errors: {} };
	hanldeSubmit = (e) => {
		e.preventDefault();
		this.doSubmit();
	};
  
	handleChange = ({ currentTarget }) => {
		const data = { ...this.state.data };
		data[currentTarget.name] = currentTarget.value;
    
		this.setState({ data });
		console.log(data.category)
	};
	renderInput(name, label, type = "text") {
		const { data, errors } = this.state;
		return (
			<InputForm
				type={type}
				name={name}
				value={data[name]}
				error={errors[name]}
				label={label}
				onChange={this.handleChange}
			/>
		);
	}
	renderSelect(options, label, name, type = "text") {
		const { data } = this.state;
		return (
			<SelectForm
				label={label}
				type={type}
				options={options}
				name={name}
				value={data[name]}
                onChange={this.handleChange}
			/>
		);
	}
	renderButton(label) {
		return <button className="btn btn-primary">{label}</button>;
	}
}

export default Form;
