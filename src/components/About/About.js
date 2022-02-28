import './About.css'

function About (){
    return(
    <div id='about-base-container'> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dd9048" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,133.3C640,139,800,181,960,181.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <div className='about-container'>
            {/* <img src='https://i.imgur.com/u3Zr6eq.jpeg' alt='me at a local park' id='personalPortrait'></img> */}
            <div className='portrait-outline'><img src='https://i.imgur.com/u3Zr6eq.jpeg' alt='me at a local park' id='personalPortrait'></img></div>
            <div className='about-text' id='about-title'>
                <i>Summary</i>
            </div>
            <div className='about-text' id='about-summary'>
                <p>
                    I'm currently a student at the University of Minnesota Duluth<br/> and plan to graduate in December 2022 with a Bacelor of Science.
                    I'm double majoring <br/>in Computer Science and Actuarial Science with a minor in mathematics.<br/> 
                    After graduation I am looking to a become a software engineer<br/> because I have a passion for coding. 
                    Outside of school and work I really <br/>enjoy hiking, fishing, and camping! To see more about my
                    <br/>professional life try visiting my <a className='about-links' href='https://www.linkedin.com/in/joe-fee/'> 
                    LinkedIn</a>, or looking at my <a className='about-links' href='https://onedrive.live.com/embed?cid=3941F29AAE8D1D54&resid=3941F29AAE8D1D54%214740&authkey=AB3Ak1uylMACwyI&em=2'>resume</a>.
                </p>
            </div>
        </div>
            {/* <iframe src="https://onedrive.live.com/embed?cid=3941F29AAE8D1D54&resid=3941F29AAE8D1D54%214740&authkey=AB3Ak1uylMACwyI&em=2"  frameborder="0" scrolling="no" id='about-resume'></iframe> */}
        <div id='about-transition'></div>
    
    </div>);
}

export default About