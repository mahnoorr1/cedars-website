import BottomToTopTransition from "../../../components/transitionContainer";
import '../css/howWeWork.css';
import '../../../css/textStyles.css';

const WorkPropositionCard = ({heading, description}) => {
    return (
        <div>
            <BottomToTopTransition>
                <div className="work-proposition-card">
                    <div className="card-heading">{heading}</div>
                    <div className="card-description">{description}</div>
                </div>
            </BottomToTopTransition>
        </div>
    );
}

export default WorkPropositionCard;