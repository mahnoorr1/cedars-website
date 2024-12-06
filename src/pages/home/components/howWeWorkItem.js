import '../css/howWeWork.css';

const HowWeWorkItem = ({icon, text}) => {
    return (
        <div className='work-item-container'>
            <div className="work-container">
                <img src={icon}></img>
            </div>
            <h3>{text}</h3>
        </div>
    );
}

export default HowWeWorkItem;