import Card from 'react-bootstrap/Card';
import anime from '../images/anime.jpg' 
import './custom.css'
const Hobby2 = () => {
    return (
        <>
        <Card style={{ width: 'auto', boxShadow:'0px 0px 8px 5px #000000' }}>
        <Card.Body>
          <img className='tokyoIMG' src={anime} alt="anime"/>

            <h2>Top 10 My fav Animes</h2>
            <ol type="1">
              <li>Code Geass</li>
              <li>Naruto</li>
              <li>G Gundam</li>
              <li>Gundam 00</li>
              <li>Haikyuu!</li>
              <li>Cyborg 009</li>
            </ol>
            <h2>My Top 10 Mangas</h2>
            <ol>
              <li>FireForce</li>
              <li>Promise Neverland</li>
              <li>Mashle</li>
              <li>Tokyo Ghoul</li>
            </ol>

        </Card.Body>

      </Card>
      </>
    )
}
export default Hobby2;