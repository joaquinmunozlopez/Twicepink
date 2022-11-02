import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../itemCount';

const ItemDetalle = (id, image, title, price, description, category) => {
    return(
        <div>
          <Link to={`/${category}/${id}`}>
          <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" alt={`album ${title}`} src={image}/>
             <Card.Body>
                 <Card.Title className="link">{title}</Card.Title>
                 <Card.Text className="link" >{price}</Card.Text>
                 <Card.Text className="link" >{description}</Card.Text>
                 <Card.Text ><ItemCount /></Card.Text>
                 <Button variant="primary">agregar al carrito</Button>
             </Card.Body>
             
           </Card>
        </Link> 
        </div>
    )
}

export default ItemDetalle;