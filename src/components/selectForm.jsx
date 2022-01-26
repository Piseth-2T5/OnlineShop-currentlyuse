const SelectForm = ({ label,type,name,options, onChange}) => {
	return (
		<div className="form-group col-4">
			<label>{label}</label>
			<select className="form-control " type={type} name={name} onChange={onChange}>
				<option value=""></option>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelectForm;
