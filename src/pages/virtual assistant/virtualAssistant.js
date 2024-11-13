import cedarsMark from "../../assets/images/cedars-mark.png"
import './virtualAssistant.css';
import { ReactComponent as RadialImage } from '../../assets/images/radial-image.svg';
import BubbleItem from "../../components/bubbleItem";
import Heading from '../../components/heading';
import '../../css/textStyles.css';
import Footer from "../footer/footer";
import BottomToTopTransition from '../../components/transitionContainer';
import { ReactComponent as Problem1 } from '../../assets/icons/problem1.svg';
import { ReactComponent as Problem2 } from '../../assets/icons/problem2.svg';
import { ReactComponent as Problem3 } from '../../assets/icons/problem3.svg';
import { ReactComponent as Problem4 } from '../../assets/icons/problem4.svg';
import { ReactComponent as Problem5 } from '../../assets/icons/problem5.svg';
import { ReactComponent as Problem6 } from '../../assets/icons/problem6.svg';
import { ReactComponent as Problem7 } from '../../assets/icons/problem7.svg';
import DigitalTwinCover from '../../assets/images/digital-twin-cover.png';

import { ReactComponent as Solution1 } from '../../assets/icons/solution1.svg';
import { ReactComponent as Solution2 } from '../../assets/icons/solution2.svg';
import { ReactComponent as Solution3 } from '../../assets/icons/solution3.svg';
import { ReactComponent as Solution4 } from '../../assets/icons/solution4.svg';
import { ReactComponent as Solution5 } from '../../assets/icons/solution5.svg';

import feature1 from '../../assets/images/vr-feature1.png';
import feature2 from '../../assets/images/vr-feature2.png';
import feature3 from '../../assets/images/vr-feature3.png';
import feature4 from '../../assets/images/vr-feature4.png';
import feature5 from '../../assets/images/vr-feature5.png';
import feature6 from '../../assets/images/vr-feature6.png';
import feature7 from '../../assets/images/vr-feature7.png';
import feature8 from '../../assets/images/vr-feature8.png';
import feature9 from '../../assets/images/vr-feature9.png';
import feature10 from '../../assets/images/vr-feature10.png';
import feature11 from '../../assets/images/vr-feature11.png';
import feature12 from '../../assets/images/vr-feature12.png';


const VirtualAssistant = () => {
    var tags= ["Real Estate App", "Virtual Assistant", "User Friendly", "3D Real Estate", "3D Apartment Tour ",];
    var problems = [
        {title: "Market Competition", svg: <Problem1 />, description: "Numerous developers compete for the same buyer demographic, making it difficult to stand out"},
        {title: "Changing Buyer Preferences", svg: <Problem2 />, description: "Evolving buyer demands require developers to adapt quickly to trends and preferences"},
        {title: "Ineffective Marketing Strategies", svg: <Problem3 />, description: "Traditional marketing methods may not engage modern buyers, necessitating a shift to digital strategies"},
        {title: "Limited Engagement", svg: <Problem4 />, description: "Traditional marketing materials, like photos and brochures, fail to engage buyers, making it difficult for developers to showcase properties effectively"},
        {title: "Prolonged Sales Cycles", svg: <Problem5 />, description: "Lack of engaging property experiences can lead to longer sales cycles, delaying transactions and reducing overall sales volume"},
        {title: "Lack of Innovation", svg: <Problem6 />, description: "To meet changing buyer expectations, developers must adopt innovative solutions that enhance the property viewing experience"},
        {title: "Effective Showcase of Features", svg: <Problem7 />, description: "Developers need a way to effectively highlight unique property features and layouts, which traditional methods often fail to achieve"},
    ];
    var solutions = [
        {title: "Immersive 3D Virtual Tours", svg: <Solution1 />, description: "Our application offers lifelike 3D tours that allow potential buyers to explore apartments in detail from anywhere, enhancing engagement and interest"},
        {title: "Interactive Floor Plans", svg: <Solution2 />, description: "Users can interact with floor plans, enabling them to visualize the layout and flow of each space, reducing uncertainty in their decision-making process"},
        {title: "Showcase Unique Features", svg: <Solution3 />, description: "The application will highlight the unique features and amenities of each property, helping developers differentiate their offerings in a competitive market"},
        {title: "Real-Time Interest Indicators", svg: <Solution4 />, description: "Potential buyers can easily express interest or request more information through the app, streamlining the communication process between developers and clients"},
        {title: "Enhanced Marketing Reach", svg: <Solution5 />, description: "By integrating 3D tours into marketing strategies, developers can reach a broader audience online, attracting more potential buyers and generating leads effectively"},
    ];

    var features = [
        {title: "Building Coverage", image: feature1},
        {title: "2D Floor Plans", image: feature2},
        {title: "3D Floor Plans", image: feature3},
        {title: "Floors Tour", image: feature4},
        {title: "360 Features Tours", image: feature5},
        {title: "360 Apartment Tour", image: feature6},
        {title: "Live Availability Check", image: feature7},
        {title: "CRM Connection", image: feature8},
        {title: "Sales Agent Support", image: feature9},
        {title: "Live Assistance", image: feature10},
        {title: "Booking Engine", image: feature11},
        {title: "Email Marketing & Updates", image: feature12},
    ];

    var howItWorksList = [
        {title: "Property Digitization and 3D Modeling", description: "We begin by creating accurate 3D models of each property, capturing every detail to provide an immersive, lifelike experience. This includes detailed interiors, floor plans, and virtual walk-throughs of apartments and homes"},
        {title: "Designing a User-Friendly Interface", description: "Our platform prioritizes a clean, intuitive interface, making it easy for potential buyers to navigate properties, explore features, and interact with 3D tours. The mobile-friendly design ensures seamless access on any device"},
        {title: "Immersive 3D Virtual Tours", description: "Users can explore properties through fully interactive 3D virtual tours, walking through rooms, viewing different angles, and zooming in on specific features to get a feel for the space without visiting in person"},
        {title: "Interactive Floor Plans and Views", description: "The platform provides detailed, interactive floor plans that allow  users to visualize the layout of each apartment. They can switch between different views, such as top-down perspectives or room-by-room exploration"},
        {title: "Real-Time Buyer Engagement", description: "The app enables users to express interest in a property by requesting more information or scheduling a visit directly through the platform, simplifying the lead generation process for developers"},
        {title: "Integration with Marketing Campaigns", description: "Developers can integrate the 3D tours into their online marketing strategies, such as websites and social media, expanding the reach of property listings and attracting a wider audience of potential buyers"},
    ];

    var benefits = [
        {title: "Increased Buyer Engagement", description: "Immersive 3D tours capture buyers’ attention and allow them to explore properties from anywhere, increasing interest and engagement compared to traditional marketing methods"},
        {title: "Faster Sales Cycles", description: "By offering detailed virtual experiences, buyers can make quicker, more informed decisions, reducing the time it takes to close deals and speeding up the sales process"},
        {title: "Broader Audience Reach", description: "The platform’s integration with digital marketing channels allows developers to reach a wider, global audience, attracting potential buyers who may not be able to visit properties in person"},
        {title: "Cost-Effective Marketing", description: "Virtual tours reduce the need for physical property showings, saving time and resources for both developers and potential buyers, while also providing a more scalable and efficient way to showcase properties"},
    ];

    return (
        <body>
            <div class="image-container">
            <img src={cedarsMark} class="fixed-image" alt="Fixed Position Image" />
            </div>
            <div className='svg-radial-container'>
            <RadialImage />
            </div>
            <BottomToTopTransition>
            <header className="header">
                    <div className='header-heading'>3D Virtual Assistant</div>
                    <h3 className='subheading'>A 3D real estate virtual assistant application offers users immersive property exploration through lifelike 3D tours and interactive floor plans. It enables buyers and sellers to view and engage with listings from anywhere, enhancing the home-buying experience with real-time assistance and detailed property insights</h3>
                    <div className="tags-list">
                        {tags.map((tag)=> (
                            <BubbleItem text={tag}/>
                        ))}
                    </div>
                </header>
            </BottomToTopTransition>
            <br/><br/><br/>
            <BottomToTopTransition>
                <section className="section">
                    <Heading text= {"Project Challenges"} color={'black'}></Heading>
                    <p className="problem-description">Real estate developers encounter numerous challenges in marketing properties and closing deals effectively in a competitive landscape</p>
                    <div className="problems-section">
                        {problems.map((problem)=> (
                            <div className="problem-item">
                                <BubbleItem text={problem.title} icon={problem.svg}/>
                                <p className="problem-description">{problem.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </BottomToTopTransition>
            <BottomToTopTransition>
                <img className="cover-image" src={DigitalTwinCover}></img>
            </BottomToTopTransition>
            <br/><br/><br/>
            <BottomToTopTransition>
                <section className="section">
                    <Heading text= {"Our Solution"} color={'black'}></Heading>
                    <div className="problems-section">
                        {solutions.map((solution)=> (
                            <div className="problem-item">
                                <BubbleItem text={solution.title} icon={solution.svg}/>
                                <p className="problem-description">{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </BottomToTopTransition>
            
            <br/><br/><br/>
            <BottomToTopTransition>
            <section className="section">
                <Heading text={"Rich Features of Our Solution"} color={'black'}/>
                <div className="features-list">
                    {features.map((feature)=> (
                        <div className="feature-item">
                            <h3>{feature.title}</h3>
                            <img src={feature.image}></img>
                        </div>
                    ))}
                </div>
            </section>
            </BottomToTopTransition>
            <br/><br/><br/>

            <BottomToTopTransition>
            <section  className="section">
                <Heading text={"How It Works"} color={'black'}/>
            </section>
            <div className="how-it-works">
                <div className="how-it-work-list">
                    {
                        howItWorksList.map((item)=> (
                            <div className="how-it-work-item">
                                <div className="card-heading">{item.title}</div>
                                <div className="card-description">{item.description}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
                
            </BottomToTopTransition>
            <br/><br/><br/>
            <BottomToTopTransition>
            <section className="section">
                <Heading text={"Solution Benefits"} color={'black'}/>
                <p className="problem-description">Our diverse solution provides seamless benefits to our respected clients</p>
                <div className="benefits-section">
                    <div className="benefits-list">
                        {
                            benefits.map((benefit)=> (
                                <div className="benefit-item">
                                    <div className="card-heading">{benefit.title}</div>
                                    <div className="card-description">{benefit.description}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </section>
            </BottomToTopTransition>
            <br/><br/><br/>
            <Footer/>
        </body>
    );
}

export default VirtualAssistant;