import Heading from "../../../components/heading";
import BottomToTopTransition from "../../../components/transitionContainer";
import '../css/toolsTechnologies.css';
import '../../../css/textStyles.css';

// assets
import vue from '../../../assets/images/vue.png';
import reactLogo from '../../../assets/images/react.png';
import figma from '../../../assets/images/figma.png';
import xd from '../../../assets/images/XD.png';
import flutter from '../../../assets/images/flutter.png';
import dart from '../../../assets/images/dart.png';
import nodeJS from '../../../assets/images/nodeJS.png';
import selenium from '../../../assets/images/selenium.png';
import postman from '../../../assets/images/postman.png';
import laravel from '../../../assets/images/laravel.png';
import php from '../../../assets/images/php.png';
import linux from '../../../assets/images/linux.png';
import firebase from '../../../assets/images/firebase.png';

const ToolsAndTechnologies = () => {
    var techList = [
        {title: "UI UX", subtitle: "Product Design", images: [figma, xd]},
        {title: "Mobile App", subtitle: "Development", images: [reactLogo, flutter, dart]},
        {title: "Front-end", subtitle: "Development", images: [vue, reactLogo]},
        {title: "Back-end", subtitle: "Development", images: [laravel, php, nodeJS]},
        {title: "Infrastructure", subtitle: "Development", images: [firebase, linux]},
        {title: "QA", subtitle: "Quality Assurance", images: [postman, selenium]},
    ];
    return (
        <section className="tools-tech-section">
            <BottomToTopTransition>
                <Heading text={"Tools & Major Technologies We Use"} color={"black"}/>
            </BottomToTopTransition>
            <BottomToTopTransition>
                <div className="tech-list">
                    {
                        techList.map((item)=> (
                            <div className="tech-item">
                                <div className="card-heading">{item.title}</div>
                                <div className="card-description">{item.subtitle}</div>
                                <div className="image-list">
                                    {item.images.map((image)=> (
                                        <img src={image}></img>
                                    ))}
                                </div>
                                
                            </div>
                        ))
                    }
                </div>
            </BottomToTopTransition>

        </section>
    );
}

export default ToolsAndTechnologies;