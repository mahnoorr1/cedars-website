import CustomerStory from "../../../components/customerStory";
import Heading from "../../../components/heading";
import BottomToTopTransition from "../../../components/transitionContainer";
import '../css/customerStories.css';

const CustomerStories = () => {
    var stories = [
        {name: 'Rami Dada', title: 'CCO Prime Insurance Brokers', image: '', description: 'Cedar Digital Team helped us open a new market in a very short time for personal lines and target a new segment that required a huge operation infrastructure before'},
        {name: 'Mahmoud Daher', title: 'CEO, Middle East Insurance Broker', image: '', description: 'Cedar Digital has revolutionized our brokerage operations. Our clients love the experience, our renewals improved and we have an end-end sales operations!'},
    ];
    return(
        <section className="customer-stories">
            <BottomToTopTransition>
                <Heading text={"Customer Success Stories"} color={"black"}/>
                <div className="stories-list">
                {stories.map((story)=> (
                    <CustomerStory name={story.name} title={story.title} description={story.description}></CustomerStory>
                ))}
                </div>
                
            </BottomToTopTransition>
        </section>
    );
}

export default CustomerStories;