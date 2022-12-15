import { Card, Button } from "react-bootstrap";
import propTypes from 'prop-types'

const Cardd = ({name,age,Bio,func,imgUrl,children}) => {
   
console.log(children);
  //  const {name,age,Bio,func,imgUrl} = props
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {Bio}
          </Card.Text>
          <Card.Text>
            {age}
          </Card.Text>
          <Button onClick={func} variant="primary">show my name</Button>
        </Card.Body>
        {children}
      </Card>
    </div>
  );
};

Cardd.propTypes ={
    name: propTypes.string.isRequired,
    age: propTypes.number,
    Bio: propTypes.string,
    imgUrl : propTypes.string,
    func: propTypes.func
}

Cardd.defaultProps ={
    name:'user'
}

/* we changed the name type from string to number
==> Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `Cardd`, expected `string`.
*/

/* we delete the key props name ==> Warning: Failed prop type: The prop `name` is marked as required in `Cardd`, but its value is `undefined`.
    at Cardd */

/* props are immutable ==> we cannot change it in the child comp */


export default Cardd;
