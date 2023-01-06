import Card from 'react-bootstrap/Card';
import soccer from '../images/soccer.jpeg' 
import './custom.css'
const Hobby3 = () => {
    return (
      <>
        <Card style={{ width: 'auto' }}>
          <Card.Body>
            <img className='tokyoIMG' src={soccer} alt="soccer"/>


          </Card.Body>

        </Card>
      </>
    )
}
export default Hobby3;