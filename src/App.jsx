
import './css/app.css'


function App() {
  

  return (
  <>
  <section className="top-part">
        <div className="hlaf-width">
            <h1>welcome to <br /> <span className="name-highlight">Al Shahoriar</span> Website</h1>
            <h3>World Class Devloper</h3>
            <p>Hi! My name is Al Shahoriar. Welcome to my personal page that I’ve designed to showcase my skills and expertise that I have accumulated over the year. I have also placed all my social links at the left side, feel free to connect with me. I would love to be given the opportunity to hear from you.</p>
            <a className="link-btn" target="_blank" href="https://www.linkedin.com/in/al-shahoriar-860314220/">Hire me</a>
        </div>
        <div className="hlaf-width">
          <img src="../public/Untitled.png" alt="me"/>
        </div>
    </section>
    <section className="dream-part">
         <div className="hlaf-width">
          <img src="../public/Untitled12.png" alt="me"/>
        </div>
        <div className="hlaf-width">
            <h2>Dream <span className="name-highlight">To Big</span> </h2>
            <h3>Become a world Best Software Engineer</h3>
            
            <p>Hi! My name is Al Shahoriar. Welcome to my personal page that I’ve designed to showcase my skills and expertise that I have accumulated over the year. I have also placed all my social links at the left side, feel free to connect with me. I would love to be given the opportunity to hear from you.</p>
            <a className="link-btn" target="_blank" href="https://drive.google.com/drive/folders/1FzRHPiix0FWhu1liNypiWkiyqdpc_vHZ">Download My CV</a>
            
        </div>
    </section>
    <section  className="experiance-part">
        <h2>Experiance</h2>
        <div id="mern-stack" className="hlaf-width single-experiance">
            <h2>MERN Stack Web Developer</h2>
            <h3 className="name-highlight">2023-Present | Pro-level Developer</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo repudiandae modi cumque officia atque fugit recusandae suscipit dignissimos aperiam ea.</p>

        </div>
        <div id="baby-web" className="hlaf-width single-experiance">
            <h2>Baby Web Developer</h2>
            <h3 className="name-highlight">2021-2022 | Pro-level Developer</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo repudiandae modi cumque officia atque fugit recusandae suscipit dignissimos aperiam ea.</p>
        </div>
    </section>
    <footer>
        <p>© 2024 Al Shahoriar, All rights reseved</p>
    </footer>
   
    
  </>

  )
}

export default App
