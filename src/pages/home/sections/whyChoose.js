import Heading from "../../../components/heading";
import BottomToTopTransition from "../../../components/transitionContainer";
import '../css/whyChoose.css';
import '../../../App.css';
import '../../../css/textStyles.css';

const WhyChooseCedars = () => {
    const items3 = [
        {title: "Top 5% Talented Team of Professionals", description: "Bring your bold ideas and innovative vision to life with our skilled design and engineering team. We blend top-tier code with sleek, user-friendly designs to captivate even the most discerning users."},
        {title: "Legal and Financial Guarantees", description: "When you partner with Cedars Digital, legal and financial concerns are never an issue. We provide contracts compliant with proper jurisdictions, and all payments are handled through official channels, ensuring full transparency."},
        {title: "Promised Delivery within Estimated Time", description: "Say goodbye to unpleasant surprises, delays, and cost overruns! With our team, everything runs smoothly and according to plan. We set realistic timelines and provide accurate estimates, allowing you to allocate resources efficiently and minimize development risks."},
    ];
    const items5 = [
        {title: "Efficient Workflow", description: "At Cedars Digital, we treat every project with care, ensuring full engagement from our entire team. No hassle, no confusion! We plan meticulously, develop efficiently, and deliver seamlessly through clear communication, Agile practices, and a personalized approach for each client."},
        {title: "Cross Platform Expertise", description: "Create intuitive, feature-rich cross-platform solutions with Cedars Digital to expand your audience and boost your business. We leverage cutting-edge technologies to develop apps that deliver a native-like experience and perform flawlessly across various devices and platforms."},
    ];
    return(
        <section className="why-choose">
            <BottomToTopTransition>
                <Heading text={"Why Choose Cedars Digital"} color={"white"}/>
            </BottomToTopTransition>
            <BottomToTopTransition>
                <div style={{"color" : "white"}} className="paragraph">Cedars Digital Team always handles projects with great responsibility following User Centric approach</div>
            </BottomToTopTransition>
            <br/><br/>
            <BottomToTopTransition>
                <div className="why-us-list3">
                {items3.map((item)=> (
                    <div className="why-us-item">
                        <div style={{"color":"white"}} className='card-heading'>{item.title}</div>
                        <div className='card-description'>{item.description}</div>
                    </div>
                ))}
                </div>
                <div className="why-us-list5">
                {items5.map((item)=> (
                    <div className="why-us-item">
                        <div style={{"color":"white"}} className='card-heading'>{item.title}</div>
                        <div className='card-description'>{item.description}</div>
                    </div>
                ))}
                </div>
            </BottomToTopTransition>
        </section>
    );
}

export default WhyChooseCedars;