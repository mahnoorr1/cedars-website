import React from 'react';
import productIcon from '../../../assets/icons/product.svg';
import designIcon from '../../../assets/images/design.png';
import crmIcon from '../../../assets/icons/crm.svg';
import cxIcon from '../../../assets/images/cx.png';
import '../css/services.css';
import '../../../css/textStyles.css';
import Heading from '../../../components/heading';
import BottomToTopTransition from '../../../components/transitionContainer';

const services = [
  { title: 'Product Strategy & Growth Consultancy', description: 'We work with businesses to design tailored product strategies, ensuring alignment with market needs and business goals. Our consultancy services focus on driving growth through data-driven insights and actionable plans.', icon: productIcon },
  { title: 'Product Design & Development', description: 'We work with businesses to design tailored product strategies, ensuring alignment with market needs and business goals. Our consultancy services focus on driving growth through data-driven insights and actionable plans.', icon: designIcon },
  {title: 'Customer Service Enablement', description: 'Our comprehensive customer service enablement solutions empower your team with the right tools, workflows, and training to deliver top-notch support that meets and exceeds client expectations.',},
  { title: 'Customer Relationship Management (CRM) and AI-enabled Solutions', description: 'We integrate powerful CRM systems and AI-driven chatbots to boost customer retention, automate interactions, and provide exceptional service, all while creating personalized experiences that increase loyalty.', icon: crmIcon },
  { title: 'Customer Experience (CX) Management', description: 'Our comprehensive customer service enablement solutions empower your team with the right tools, workflows, and training to deliver top-notch support that meets and exceeds client expectations.', icon: cxIcon },
  
];

const Services = () => (
    <section className="services">
      <BottomToTopTransition>
        <Heading text={"Our Valuable Services"} color={"black"}/>
        <div className="services-list">
          
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className='card-heading'>{service.title}</div>
              <div className='card-description'>{service.description}</div>
              {service.icon && <img src={service.icon} alt={service.title} />}
            </div>
          ))}
        </div>
      </BottomToTopTransition>
    </section>
);

export default Services;
