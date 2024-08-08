// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import CardComp from './CardComp';
// // import { NavLink } from 'react-bootstrap';
// import { Button } from 'react-bootstrap'; // Make sure to import the Button component
// export function SubCatName() {

//   let navigate = useNavigate();
//   const [posts, setposts] = useState([]); // Change state variable name to 'posts'
//   const { subCatId } = useParams();

//   useEffect(() => {
//     fetch("http://localhost:8081/api/categorymaster/bysubcatId/" + subCatId)
//       .then(res => res.json())
//       .then(result => {
//         setposts(result); // Update state variable
//       });
//   },[]);

//   console.log(posts);

//   return (
//     <div>
//       <div className="d2">
//         {posts.map(card => (
//           <div key={card.catMasterId}>
//             <CardComp title={card.catName} 
//               imgsrc={card.catImagePath} />
            
//             <Button onClick={()=>navigate(`/bypkgId/${card.catMasterId}`)}>View Details</Button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SubCatName;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import {Row ,Col} from 'react-bootstrap'

// import { NavLink } from 'react-bootstrap';
import { Button } from 'react-bootstrap'; // Make sure to import the Button component
export function SubCatName() {

  let navigate = useNavigate();
  const [posts, setposts] = useState([]); // Change state variable name to 'posts'
  const [cost, setcost] = useState([]);
  const { subCatId } = useParams();


  useEffect(() => {
    fetch("http://localhost:8080/api/byCategory/" + subCatId)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(result => {
        console.log('Posts fetched:', result);
        setposts(result);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, [subCatId]);
  
  useEffect(() => {
    fetch("http://localhost:8080/api/costsBySubCategory/" + subCatId)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(result => {
        console.log('Costs fetched:', result);
        setcost(result);
      })
      .catch(error => {
        console.error('Error fetching costs:', error);
      });
  }, []);
  
  console.log(posts);

  return (
    <div>
        <div>
        <h1 align="center" style={{ color: 'red' }}>Tours</h1>
      <Row md={12}>
        {posts.map(post => (
    
          
          <Col md={5} key={post.subCat_id}>
            <Card className="box" style={{ width: '30rem' }}>
              <Card.Img variant="top" src={`Public/ ${post.sub_cat_image_path}`} alt={post.subCat_name} />
              <Card.Body className="content">
                <Card.Title>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  {post.subCat_name}
                </Card.Title>
                <Card.Text>
                {post.description || 'place description is not found'} 
                </Card.Text>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarRegular} />
                </div>
                {cost
                  .filter(costItem => costItem.subCategoryMaster.subCat_id == post.subCat_id) // Ensure costs match the post
                  .map(costItem => (
                    <div className="price" key={costItem.costId}>
                     
                      <span>$ {costItem.cost}</span>
                    </div>
                  ))}
                {/* <Button variant="primary" href="#" className="btn" onClick={()=>navigate(`/bypkgId/${category.subCatId}`)}> */}
                <Button onClick={()=>navigate(`/bypkgId/${post.subCat_id}`)}>Book Tour</Button>
                  {/* Book Now
                </Button> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>

      
    



    </div>
  );
}

export default SubCatName;








{/* <div className="d2">
      {posts.map(category => (
        <div className="card text-center" key={category.subCatId}>
          <div className="card-body">
            <h5 className="card-title">{category.SubCatName}</h5> */}

            {/* <p className="card-text">{category.catImagePath}</p> */}
              {/*<Button onClick={() => navigate(`/bysubcatId/${category}`)}>View Details</Button>*/}
              {/* { <img src={category.catImagePath} alt="No Image Found" width="250" height="200" /> }
              
          </div>
          <Button onClick={()=>navigate(`/bypkgId/${category.subCatId}`)}>View Details</Button>
        </div>
      ))}
      </div> */}
