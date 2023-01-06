import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import headshot from '../images/headshot.png' 
import './custom.css'
const CardIntro = () => {
    return (
      <>
        <Card style={{ width: 'auto', boxShadow:'0px 0px 8px 5px #000000' }}>
          <Card.Body>
            <div className='imgPlacement'>
              <img className='headshotimg' variant="top"  src={headshot} alt='Me'/>
            </div>
            <div className='textPlacement'>
              <h2 className='introtext'>
                Hello! 👋 <br/> I'm Chris and 
                I am a Senior at Baruch College majoring in CIS graduating this Spring 2023.
              </h2>  
            </div>

          </Card.Body>
          <div className='introButtons'>
            <div className='resumeButton'>
              <Button href="https://docs.google.com/document/d/1TJbwdhgLy43eI6mgq3yvn8M7FUDrwFTgC1onpYkYksI/edit?usp=sharing">Resume</Button>  
            </div>
            <div className='contactButton'>
              <Button href="#contact">Contact</Button>
            </div>
          </div>
        </Card>
      </>
    )
}
export default CardIntro;