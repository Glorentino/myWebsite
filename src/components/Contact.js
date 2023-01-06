import Card from 'react-bootstrap/Card';
import './custom.css'
const Contact = () => {
    return (
        <>
          <Card id='contact' style={{ width: 'auto', boxShadow:'0px 0px 8px 5px #000000' }}>
          <Card.Body>
            <Card.Text>

                Email: <a href='Christopher.Florentino@Baruchmail.cuny.edu'>Christopher.Florentino@Baruchmail.cuny.edu </a>
                <br/>
                GitHub:<a href='https://github.com/Glorentino'> https://github.com/Glorentino </a>
                <br/>
                LinkedIn: <a href='https://www.linkedin.com/in/christopher-florentino-912707198/'> https://www.linkedin.com/in/christopher-florentino-912707198/</a>

            </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
}
export default Contact;