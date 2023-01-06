import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import project1 from '../images/project1.png' 
import './custom.css'

const Project1 = () => {
    return (
      <>
        <Card style={{ width: 'auto', boxShadow:'0px 0px 8px 5px #000000' }}>
          <Card.Body>
            <img className='projectIMG' src={project1} alt='project1'/>

          </Card.Body>
          <div className='introButtons'>
            <div className='resumeButton'>
              <Button>Live View</Button>
            </div>
            <div className='contactButton'>
              <Button href='https://github.com/Glorentino/ecommerce-auto-site'>GitHub</Button>
            </div>
          </div>
        </Card>
      </>
    )
}
export default Project1;