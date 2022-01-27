 const SelectForm = ({ label,type,name,options,error,...rest}) => {
	return (
		<div className="form-group col-4">
			<label htmlFor={name}>{label}</label>
			<select className="form-control "name={name} {...rest}>
				<option value=""></option>	
				{options.map((option) => (
					<option key={option.id} value={option.id}>
						{option.name}
					</option>
				))}
			</select>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
};

export default SelectForm;
