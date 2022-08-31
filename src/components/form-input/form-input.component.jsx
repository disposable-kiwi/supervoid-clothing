import './form-input.styles.scss';

const FormInput = ({ label, ...otherAttr }) => {
    return (
        <div className="group">
        <input
                className="form-input"
                {...otherAttr}></input>
        { label && <label className={`${otherAttr.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>}
        </div>
    );
};

export default FormInput;