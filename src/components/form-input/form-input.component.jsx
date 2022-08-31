import './form-input.styles.scss';

//the spread operator ...otherAttr takes in any other props and makes it easier to read in
const FormInput = ({ label, ...otherAttr }) => {
    return (
        <div className="group">
        <input
                className="form-input"
                //here we read in the rest of the key value pairs in props
                {...otherAttr}></input>
        { label && <label className={`${otherAttr.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>}
        </div>
    );
};

export default FormInput;