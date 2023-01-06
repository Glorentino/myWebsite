import Card from 'react-bootstrap/Card';
import tokyo from '../images/tokyo.jpg' 
import './custom.css'
const Hobby1 = () => {
    return (
        <>
        <Card style={{ width: 'auto', boxShadow:'0px 0px 8px 5px #000000' }}>
        <Card.Body>
          <img className='tokyoIMG' src={tokyo} alt="traveling"/>

            <h2>Coutries visited</h2>
              <ul>
                <li>Japan</li>
                <li>Canada</li>
                <li>South Korea</li>
                <li>Mexico</li>
                <li>Dominican Republic</li>
              </ul>
          
        </Card.Body>

      </Card>
      </>
    )
}
export default Hobby1;