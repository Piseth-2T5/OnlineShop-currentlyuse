const InputForm = ({ label, value, type, name,error, onChange }) => {
	return (
		<div className="form-group col-4">
			<label htmlFor={name}>{label}</label>
			<input
				className="form-control "
				onChange={onChange}
				value={value}
				type={type}
				error={error}
				name={name}
			/>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
};

export default InputForm;
