import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Tarjeta ({id, image, title, price, category}) {
  return (
    <div>
        <Link to={`/${category}/${id}`}>
          <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" alt={`album ${title}`} src={image}/>
             <Card.Body>
                 <Card.Title className="link">{title}</Card.Title>
                 <Card.Text className="link" >{price}</Card.Text>
                 <Button variant="primary">ver detalle</Button>
             </Card.Body>
           </Card>
        </Link>
    
    </div>
  );
}

export default Tarjeta;