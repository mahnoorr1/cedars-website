import '../css/textStyles.css';
const Heading = ({text, color}) => {
    return (
        <div>
            <svg width="169" height="36" viewBox="0 0 169 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8" fill={color}/>
                <path d="M12 9H168.5V36" stroke={color}/>
            </svg>
            <div style={{"color": color}} className="heading">{text}</div>
        </div>
    );
}

export default Heading;