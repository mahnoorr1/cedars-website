import BottomToTopTransition from "./transitionContainer";
import '../css/customerStory.css';
import '../css/textStyles.css';
import { ReactComponent as Star} from '../assets/icons/star.svg';

const CustomerStory = ({image, name, title, description}) => {
    const stars = Array.from({ length: 5 });
    return(
        <div>
            <BottomToTopTransition>
                <div className="customer-story">
                    <div className="content">
                        <div className="head">
                                <h3 >{name}</h3>
                                <div className="card-description">{title}</div>
                        </div>
                        <div className="card-description">"{description}"</div>
                        <div className="stars">
                            {
                                stars.map((_, index)=> (
                                    <Star className="star" key={index}></Star>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </BottomToTopTransition>
        </div>
    );
}

export default CustomerStory;