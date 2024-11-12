import CustomerStories from "./sections/customerStories";
import Header from "./sections/header";
import HowWeWork from "./sections/howWeWork";
import OurProjects from "./sections/ourProjects";
import Services from "./sections/services";
import ProjectStats from "./sections/stats";
import ToolsAndTechnologies from "./sections/toolsTechnologies";
import WhyChooseCedars from "./sections/whyChoose";

const Home = () => {
    return (
        <div>
            <Header />
            <br/>
            <ProjectStats/>
            <br/><br/>
            <Services/>
            <br/><br/>
            <HowWeWork/>
            <br/><br/>
            <OurProjects/>
            <br/><br/>
            <WhyChooseCedars/>
            <br/><br/>
            <CustomerStories/>
            <br/><br/>
            <ToolsAndTechnologies/>
        </div>
    );
}

export default Home;