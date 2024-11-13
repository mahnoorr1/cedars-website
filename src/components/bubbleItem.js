const BubbleItem = ({ text, icon }) => {
    return (
        <div className={`bubbleItem ${icon ? '' : 'no-icon'}`}>
            {icon && <div className="icon">{icon}</div>}
            <div>{text}</div>
        </div>
    );
};

export default BubbleItem;
