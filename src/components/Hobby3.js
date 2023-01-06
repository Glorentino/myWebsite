import Card from 'react-bootstrap/Card';
import soccer from '../images/soccer.jpeg' 
import './custom.css'
const Hobby3 = () => {
    return (
      <>
        <Card style={{ width: 'auto', boxShadow:'0px 0px 8px 5px #000000' }}>
          <Card.Body>
            <img className='tokyoIMG' src={soccer} alt="soccer"/>


          </Card.Body>

        </Card>
      </>
    )
}
export default Hobby3;