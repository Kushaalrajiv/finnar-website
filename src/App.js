import React from "react";
import Carousel from "./components/Carousel.js";
import Navbar from "./components/Navbar.js";
import faq from "./components/faq";
import Dropdown from "./components/dropdown";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services.js";
import ServData from "./components/ServData.js";
import Contact from "./components/Contact.js";

import acc from "./components/images/acc.jpg";
import cfo from "./components/images/cfo.jpg";
import startup from "./components/images/startup.jpg";
import compliance from "./components/images/compliance.jpg";
import stat from "./components/images/stat.jpg";
import six from "./components/images/6.png";
import company from "./components/images/company.jpg";

import "./App.css";

function App() {
  const service1_faq = faq[0].service1;
  const service2_faq = faq[0].service2;
  const dropdown1 = service1_faq.map((item) => {
    return <Dropdown key={item.id} item={item} />;
  });

  const dropdown2 = service2_faq.map((item) => {
    return <Dropdown key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <AboutUs />
      <h1 style={{ textAlign: "center" }}>Services</h1>
      <section className="services-cards">
        <Services
          src={acc}
          data="Finnar offers comprehensive Accounting Outsourcing Services designed to streamline your financial operations. Our team of seasoned professionals takes the helm, meticulously managing your financial transactions, payroll processing, and reporting responsibilities. With a keen eye for detail, we guarantee accuracy and strict compliance, allowing you the peace of mind to channel your focus towards the expansion and growth of your business. "
          title="Accounting Outsourcing Services"
        />
        <Services
          src={cfo}
          data="Elevate your financial strategy effortlessly with our CFO Services, where we provide access to strategic financial leadership without the burden of overhead costs. Our comprehensive and tailored solutions encompass a wide range of services to address the diverse needs of your business. From meticulous budgeting and precise forecasting to intricate financial analysis, our expert team is dedicated to propelling your business towards a path of sustained success with ease and precision. We go beyond the conventional, offering services such as risk management, cash flow management, and tax planning, ensuring a holistic approach to financial excellence. Additionally, our strategic financial consulting extends to areas like operational cost optimization, compliance and governance, and the integration of cuttingedge technology. With our CFO Services, you not only gain financial insight but also benefit from a multifaceted approach that aligns with your business goals, facilitating a seamless journey towards financial prosperity."
          title="CFO Services"
        />
        <Services
          src={startup}
          data="Embark on your entrepreneurial journey with resilience and confidence through our Startup Advisory Services. We specialize in empowering startups to commence their operations robustly. Our services extend beyond mere guidance; we offer strategic insights, meticulous financial planning, and invaluable mentorship to assist you in navigating the intricate challenges of entrepreneurship. With our dedicated support, your startup is not just launched; it's strategically positioned for enduring success, ensuring a foundation that stands the test of time in the dynamic business landscape."
          title="Startup Advisory Services"
        />
        <Services src={compliance}
        data="Streamline the intricate path of financial compliance with our specialized Financial Compliance Services. We understand that navigating the complexities of financial regulations can be daunting, but with us, it doesn't have to be. Our team of experts is dedicated to ensuring that your business not only meets but exceeds compliance standards. We provide a comprehensive approach, offering peace of mind as we meticulously safeguard your financial interests. With our services, staying compliant becomes a seamless and assured journey, allowing you to focus on your core business activities while we manage the intricacies of regulatory adherence." 
        title="Financial Compliance Services"
        />
        
        <Services src={six}
        data="Stay ahead of regulatory challenges with our Statutory Compliance Services, seamlessly navigating the dynamic landscape with a dedicated team. We take charge of all compliance facets, from filings to reporting, letting you focus on core business activities. Our commitment extends to expertly managing Tax Compliance, ensuring accurate filings and strategic planning, complying legal requirements, maintaining records and facilitating audits. Our comprehensive approach grants the confidence to drive your business forward, knowing all regulatory aspects are adeptly handled."
        title="Statutory Compliance Services" />
        <Services src={stat}
        data="Effortlessly navigate the complexities of Goods and Services Tax (GST) with our specialized GST Compliance Services. Our dedicated specialists are committed to simplifying your compliance processes, ensuring accurate returns and strict adherence to GST regulations. With a strong focus on precision in GSTrelated tasks, we provide comprehensive attention to detail, empowering your business to fulfill all the compliance standards. Through our services, you gain valuable insights and support, streamlining your GST obligations and allowing you to concentrate on your core operations with enhanced knowledge, efficiency, and ease."
        title="GST Compliance Services"/>
        <Services src={company}
        data="Embark on the exciting journey of establishing your business with confidence through our specialized Company Incorporation Services. Our dedicated team is here to guide you through the intricate legal formalities, ensuring a seamless and hasslefree process as you give life to your business entity. With our comprehensive support, you can navigate the complexities of company incorporation with ease, allowing you to focus on your business vision and goals. From document preparation to regulatory compliance, we take care of every detail, providing you the assurance and expertise needed to kickstart your entrepreneurial venture on a solid foundation."
        title="Company Incorporation Services"/>
      </section>
      <div className="Faq_overall">
        <h1 className="Faq_Header">FAQs</h1>
        <div className="Faq_container">
          <div id="CFO_Faq">
            <h3 className="CFO_header">CFO Services for Small Businesses</h3>
            <section className="CFO">{dropdown1}</section>
          </div>
          <div id="Account_Faq">
            <h3 className="Account_header">Accounting Outsourcing Services</h3>
            <section className="Accountname">{dropdown2}</section>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default App;