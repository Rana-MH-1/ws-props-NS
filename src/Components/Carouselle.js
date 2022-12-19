import { Carousel } from "react-bootstrap";
import propTypes from 'prop-types'

const Carouselle = ({User1,User2,User3,children}) => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={User1.imgUrl}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{User1.name}</h3>
            <p>{User1.Bio}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={User2.imgUrl}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>{User2.name}</h3>
            <p>{User2.Bio}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={User3.imgUrl}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{User3.name}</h3>
            <p>{User3.Bio}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {children}
    </div>
  );
};

Carouselle.propTypes={
    User1: propTypes.object,
    User2: propTypes.object,
    User3: propTypes.object,
}

export default Carouselle
