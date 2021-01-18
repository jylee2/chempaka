// const useState = React["useState"];
// const useEffect = React["useEffect"];
const { useState, useEffect } = React;

// Main Component
const Main = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand navbar-dark classNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#home">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>

            <div id="home" className="classDivCenter classHomeSection">
                <div className="classHomeImg"></div>
                <div className="classHomeText">
                    <h1>
                        CHEMPAKA BUDDHIST LODGE<br/>千百家佛教居士林
                    </h1>
                </div>
            </div>

            <div id="about" className="row classAboutSection">
                <div className="col-xl-6 classNoMarPad classDivCenter">
                    <div className="classAboutText">
                        <h1 className="classHeaderText">About</h1>
                        <p>CHEMPAKA BUDDHIST LODGE (CBL), established since 1985, is managed by lay Buddhists and is located in Taman SEA, Petaling Jaya. CBL not only provides a contemplative place for devotees to study, absorb and practice the Buddha’s teachings, it also carries out Dharma classes on weekends as well as chanting ceremonies on Sundays and during various Buddhist occasions.</p>
                        <p>As lay Buddhists, the EXCO members of CBL have not forgotten the needs of the local community, the needy and the underprivileged.</p>

                    </div>
                </div>
                <div className="col-xl-6 classNoMarPad">
                    <div className="classAboutImg"></div>
                </div>
            </div>

            <div id="services" className="row classServicesSection">
                <div className="col-xl-6 classNoMarPad">
                    <div className="classServicesImg"></div>
                </div>
                <div className="col-xl-6 classNoMarPad classDivCenter">
                    <div className="classAboutText">
                        <h1 className="classHeaderText">Services</h1>
                        <p>CBL offers free Dharma classes conducted by teachers who possess good knowledge of Buddhism. Classes are conducted in both Mandarin and English.</p>
                        <p>CBL serves as a local community centre for healthy recreational activities, with facilities for the learning and practice of Chinese Brush Painting, Chinese Calligraphy, Yuan Ji Kung, Zhi Nen Qigong, Wai Tan Gong, line dancing, choir singing, karaoke, yoga, baking and art for children.</p>
                        <p>Free Traditional Chinese medicine (TCM) consultation and medication is provided from Tuesdays to Saturdays, to relieve members and the public from sickness and medical burden.</p>
                        <p>A Distress Fund helps to provide financial aid to the needy who suffer from chronic illness, while a Funerary Aids Fund provides for the bereavement needs of deceased who have no relatives.</p>
                        <p>Our latest addition, a Stroke Rehabilitation Centre, will help to alleviate the physical and financial burdens of the old and infirm.</p>
                        <p>CBL also provides scholarship for its members' children to pursue higher education in Malaysia.</p>
                    </div>
                </div>
            </div>

            <div id="contact" className="row classContactSection">
                <div className="col-xl-6 classNoMarPad classDivCenter">
                    <div className="classContactText">
                        <h1 className="classHeaderText">Contact</h1>
                        <table className="">
                            <tr>
                                <td className="classContactTable"><i class="fa fa-map-marker" aria-hidden="true"></i></td>
                                <td>60, Jalan SS 23/25, Taman Sea, 47400 Petaling Jaya, Selangor</td>
                            </tr>
                            <tr>
                                <td className="classContactTable"><i class="fa fa-phone" aria-hidden="true"></i></td>
                                <td>+603-7880 3936</td>
                            </tr>
                            <tr>
                                <td className="classContactTable"><i class="fab fa-facebook-square" aria-hidden="true"></i></td>
                                <td><a href="https://www.facebook.com/ChempakaBuddhistLodge/" target="_blank">Visit CBL's Facebook Page</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="col-xl-6 classNoMarPad">
                    <div className="classContactImg"></div>
                </div>
            </div>
        
            <footer className="bg-dark classDivCenter classFooterSection">
                <p>Designed by Jun Yi</p>
            </footer>

        </div>
    );
};
const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement)