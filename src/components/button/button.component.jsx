import './button.styles.scss';
/* how do we get different button stylings for:
-default
-inverted
-Google sign-in
 */

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
};


const Button = ({children, buttonType, ...otherAttr})=>{
    return(
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherAttr}>
            {children}
        </button>
    );
}

export default Button;