// // import React, { useState,useEffect } from 'react';
// // import { Button, Form } from 'react-bootstrap';
// // import { useNavigate } from 'react-router-dom';

// // const BookingPage = () => {
// //     const [bookingId, setBookingId] = useState(null);
// //     const [passengerName, setPassengerName] = useState('');
// //     const [passengers, setPassengers] = useState([]);
// //     const navigate = useNavigate();

// //     const handleCreateBooking = async () => {
// //         try {
// //             const response = await fetch('http://localhost:8080/api/booking', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 },
// //                 body :JSON.stringify({
// //                     "booking_date": "2014-08-10",
// //                     "no_of_pax": 4,
// //                     "taxes": 50.00,
// //                     "total_amount": 500.00,
// //                     "tour_amount": 450.00,
// //                     "cust_id": 1,
// //                     "departure_id": 1,
// //                     "tour_id": 1
// //                 }),
                  
// //             });

// //             if (!response.ok) {
// //                 throw new Error('Network response was not ok');
// //             }
// //             console.log("hello");
// //             const data = await response.json();
// //             setBookingId(data.bookingId);
// //         } catch (error) {
// //             console.error('Error creating booking:', error);
// //         }
// //     };

// //     const handleAddPassenger = async () => {
// //         if (passengerName.trim() === '') return;
// //         try {
// //             for (const passenger of passengers) {
// //               const response = await fetch("http://localhost:8080/api/passengers", {
// //                 method: 'POST',
// //                 headers: { 'Content-Type': 'application/json' },
// //                 body: JSON.stringify({ ...passenger, bookingId })
// //               });
// //               if (!response.ok) {
// //                 console.log("Passenger booking failed.");
// //               }
// //             }
// //             console.log("All passengers booked successfully!");
// //           } catch (error) {
// //             console.error("An error occurred while registering the passengers:", error);
// //           }
// //     };

// //     const handleDone = async () => {
// //         try {
// //             await fetch('http://localhost:8080/api/booking/'+bookingId, {  //for checking hardcode value is taken
// //                 method: 'PUT',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 },
// //                 body: JSON.stringify({ bookingId, updateData: 'Passengers added' }),
// //             });

// //             navigate('/success-page'); // Redirect to a success page or another component
// //         } catch (error) {
// //             console.error('Error updating booking:', error);
// //         }
// //     };

// //     return (
// //         <div style={{ display: 'flex', justifyContent: "center" }}>
// //             <div className="user-input-container">
// //                 <h2 className="text-center">Passenger Details 📄</h2>
// //                 <Form onSubmit={handleSubmit} className="custom-form">
// //                     <Form.Group controlId="inputValue">
// //                         <Form.Label className="custom-label">Passenger Name:</Form.Label>
// //                         <Form.Control
// //                             type="text"
// //                             placeholder="Enter Name..."
// //                             value={passengerName}
// //                             onChange={handleInputChange}
// //                             className="custom-input"
// //                         />
// //                     </Form.Group>
// //                     <Form.Group controlId="birthdate">
// //                         <Form.Label className="custom-label">Birth Date:</Form.Label>
// //                         <Form.Control
// //                             type="date"
// //                             placeholder="Enter Birth Date..."
// //                             value={birthdate}
// //                             onChange={handleDateChange}
// //                             className="custom-input"
// //                         />
// //                     </Form.Group>
// //                     <Form.Group controlId="radioGroup">
// //                         <Form.Label className="custom-label">Passenger Type:</Form.Label>
// //                         <Col>
// //                             <Form.Check
// //                                 type="radio"
// //                                 label={`Single Person Cost: ₹1000`}
// //                                 name="radioGroup"
// //                                 value="singlePrsnCost"
// //                                 checked={selectedOption === 'singlePrsnCost'}
// //                                 onChange={handleRadioChange}
// //                                 className="radio-input"
// //                             />
// //                             <Form.Check
// //                                 type="radio"
// //                                 label={`Extra Person Cost: ₹500`}
// //                                 name="radioGroup"
// //                                 value="extraPrsnCost"
// //                                 checked={selectedOption === 'extraPrsnCost'}
// //                                 onChange={handleRadioChange}
// //                                 className="radio-input"
// //                             />
// //                             <Form.Check
// //                                 type="radio"
// //                                 label={`Child with Bed: ₹800`}
// //                                 name="radioGroup"
// //                                 value="childWithBed"
// //                                 checked={selectedOption === 'childWithBed'}
// //                                 onChange={handleRadioChange}
// //                                 className="radio-input"
// //                             />
// //                             <Form.Check
// //                                 type="radio"
// //                                 label={`Child without Bed: ₹400`}
// //                                 name="radioGroup"
// //                                 value="childWithoutBed"
// //                                 checked={selectedOption === 'childWithoutBed'}
// //                                 onChange={handleRadioChange}
// //                                 className="radio-input"
// //                             />
// //                         </Col>
// //                     </Form.Group>
// //                     <Button variant="primary" type="button" onClick={addPassenger} className="submit-button">
// //                         Add Passenger
// //                     </Button>
// //                     <Button
// //                         variant="info"
// //                         type="button"
// //                         className="submit-button"
// //                         onClick={() => setShowTable(!showTable)}
// //                     >
// //                         Show Table
// //                     </Button>
// //                 </Form>

// //                 {showTable && (
// //                     <Table striped bordered hover variant="light">
// //                         <thead>
// //                             <tr>
// //                                 <th>Name</th>
// //                                 <th>Birth Date</th>
// //                                 <th>Type</th>
// //                                 <th>Amount</th>
// //                             </tr>
// //                         </thead>
// //                         <tbody>
// //                             {passengers.map((passenger, index) => (
// //                                 <tr key={index}>
// //                                     <td>{passenger.passengerName}</td>
// //                                     <td>{passenger.birthdate}</td>
// //                                     <td>{passenger.passengerType}</td>
// //                                     <td>₹{passenger.passengerAmount}</td>
// //                                 </tr>
// //                             ))}
// //                         </tbody>
// //                     </Table>
// //                 )}
// //                 <Button variant="primary" onClick={() => navigate('/success-page')} className="submit-button">
// //                     Book My Tour
// //                 </Button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default BookingPage;





// import React, { useState, useEffect } from 'react';
// import { Form, Button, Col, Table } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const BookingPage = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [datevalue, setDateValue] = useState('');
//   const [selectedOption, setSelectedOption] = useState('');
//   const [passengers, setPassengers] = useState([]);
//   const [showTable, setShowTable] = useState(false);
//   const [cost, setCost] = useState({});
//   const [bookingId, setBookingId] = useState(null);
//   const [subCatId, setSubCatId] = useState(null); // Added definition
//   const navigate = useNavigate();

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     const selectedDate = event.target.value;
//     const today = new Date().toISOString().split('T')[0];
//     if (selectedDate > today) {
//       alert("Birth date cannot be greater than today's date.");
//     } else {
//       setDateValue(selectedDate);
//     }
//   };

//   const handleRadioChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const getCost = () => {
//     fetch(`http://localhost:8080/api/cost/subCatId/${subCatId}`)
//       .then(response => response.json())
//       .then(data => {
//         setCost(data[0]);
//         setSelectedOption(data?.key || cost.singlePrsnCost);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   };

//   useEffect(() => {
//     if (subCatId) {
//       getCost();
//     }
//   }, [subCatId]); // Added dependency

//   const addPassenger = () => {
//     const passenger = {
//       passengerName: inputValue,
//       birthdate: datevalue,
//       passengerType: selectedOption,
//       passengerAmount: cost[selectedOption]
//     };

//     setPassengers([...passengers, passenger]);
//     setInputValue('');
//     setDateValue('');
//     setSelectedOption('');
//   };

//   const handleCreateBooking = async () => {
//             try {
//                 const response = await fetch('http://localhost:8080/api/booking', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body :JSON.stringify({
//                         "booking_date": "2014-08-10",
//                         "no_of_pax": 4,
//                         "taxes": 50.00,
//                         "total_amount": 500.00,
//                         "tour_amount": 450.00,
//                         "cust_id": 1,
//                         "departure_id": 1,
//                         "tour_id": 1
//                     }),
                      
//                 });
    
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 console.log("hello");
//                 const data = await response.json();
//                 setBookingId(data.bookingId);
//             } catch (error) {
//                 console.error('Error creating booking:', error);
//             }
//         };
    
//         const handleAddPassenger = async () => {
//             // if (passengerName.trim() === '') return;
//             try {
//                 for (const passenger of passengers) {
//                   const response = await fetch("http://localhost:8080/api/passengers", {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({ ...passenger, bookingId })
//                   });
//                   if (!response.ok) {
//                     console.log("Passenger booking failed.");
//                   }
//                 }
//                 console.log("All passengers booked successfully!");
//               } catch (error) {
//                 console.error("An error occurred while registering the passengers:", error);
//               }
//         };

//   const postPassengers = async () => {
//     try {
//       for (const passenger of passengers) {
//         const response = await fetch("http://localhost:8080/api/passengers", {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ ...passenger, bookingId })
//         });
//         if (!response.ok) {
//           console.log("Passenger booking failed.");
//         }
//       }
//       console.log("All passengers booked successfully!");
//     } catch (error) {
//       console.error("An error occurred while registering the passengers:", error);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     await handleCreateBooking(); // Create booking first
//     if (bookingId) {
//       await postPassengers(); // Then post passengers
//       try {
//         const response = await fetch(`http://localhost:8080/api/booking/${bookingId}`, {
//           method: 'PUT',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ bookingId, updateData: 'Passengers added' })
//         });
//         if (response.ok) {
//           navigate('/success-page'); // Navigate to success page if PUT request is successful
//         } else {
//           console.log("Booking update failed.");
//         }
//       } catch (error) {
//         console.error('Error updating booking:', error);
//       }
//     }
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: "center" }}>
//       <div className="user-input-container">
//         <h2 className="text-center">Passenger Details 📄</h2>
//         <Form onSubmit={handleSubmit} className="custom-form">
//           <Form.Group controlId="inputValue">
//             <Form.Label className="custom-label">Passenger Name:</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter Name..."
//               value={inputValue}
//               onChange={handleInputChange}
//               className="custom-input"
//             />
//           </Form.Group>
//           <Form.Group controlId="birthdate">
//             <Form.Label className="custom-label">Birth Date:</Form.Label>
//             <Form.Control
//               type="date"
//               placeholder="Enter Birth Date..."
//               value={datevalue}
//               onChange={handleDateChange}
//               className="custom-input"
//             />
//           </Form.Group>
//           <Form.Group controlId="radioGroup">
//             <Form.Label className="custom-label">Passenger Type:</Form.Label>
//             <Col>
//               <Form.Check
//                 type="radio"
//                 label={`Single Person Cost: ₹${cost.singlePrsnCost}`}
//                 name="radioGroup"
//                 value="singlePrsnCost"
//                 checked={selectedOption === 'singlePrsnCost'}
//                 onChange={handleRadioChange}
//                 className="radio-input"
//               />
//               <Form.Check
//                 type="radio"
//                 label={`Extra Person Cost: ₹${cost.extraPrsnCost}`}
//                 name="radioGroup"
//                 value="extraPrsnCost"
//                 checked={selectedOption === 'extraPrsnCost'}
//                 onChange={handleRadioChange}
//                 className="radio-input"
//               />
//               <Form.Check
//                 type="radio"
//                 label={`Child with Bed: ₹${cost.childWithBed}`}
//                 name="radioGroup"
//                 value="childWithBed"
//                 checked={selectedOption === 'childWithBed'}
//                 onChange={handleRadioChange}
//                 className="radio-input"
//               />
//               <Form.Check
//                 type="radio"
//                 label={`Child without Bed: ₹${cost.childWithoutBed}`}
//                 name="radioGroup"
//                 value="childWithoutBed"
//                 checked={selectedOption === 'childWithoutBed'}
//                 onChange={handleRadioChange}
//                 className="radio-input"
//               />
//             </Col>
//           </Form.Group>
//           <Button variant="primary" type="submit" className="submit-button">
//             Submit
//           </Button>
//           <Button
//             variant="secondary"
//             type="button"
//             className="submit-button"
//             onClick={addPassenger}
//           >
//             Add Passenger
//           </Button>
//           <Button
//             variant="info"
//             type="button"
//             className="submit-button"
//             onClick={() => setShowTable(!showTable)}
//           >
//             Show Table
//           </Button>
//         </Form>

//         {showTable && (
//           <Table striped bordered hover variant="light">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Birth Date</th>
//                 <th>Type</th>
//                 <th>Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               {passengers.map((passenger, index) => (
//                 <tr key={index}>
//                   <td>{passenger.passengerName}</td>
//                   <td>{passenger.birthdate}</td>
//                   <td>{passenger.passengerType}</td>
//                   <td>₹{passenger.passengerAmount}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         )}
//         <Button variant="primary" onClick={() => navigate('/success-page')} className="submit-button">
//           Book My Tour
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default BookingPage;




import React,{ useState, useEffect } from 'react';
import { Button, Form ,Col, Table} from 'react-bootstrap';
import { useNavigate ,useParams } from 'react-router-dom';

const BookingPage = () => {
    const [inputValue, setInputValue] = useState('');
  const [datevalue, setDateValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [passengers, setPassengers] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [cost, setCost] = useState([]);
  const [bookingId, setBookingId] = useState(null); // State for booking ID
  const { catid } = useParams();
  console.log(catid+"hello");
   
    const [passengerName, setPassengerName] = useState('');
    
    const navigate = useNavigate();


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    
      const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        const today = new Date().toISOString().split('T')[0];
        if (selectedDate > today) {
          alert("Birth date cannot be greater than today's date.");
        } else {
          setDateValue(selectedDate);
        }
      };
    
      const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
      };
      const getCost = () => {
        fetch("http://localhost:8080/api/cost/subCatId/" + catid)
          .then(response => response.json())
          .then(data => {
            setCost(data);
            setSelectedOption(data?.key || (cost.singlePrsnCost));
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      };
    
      useEffect(() => {
        getCost();
      }, []);
    
      const addPassenger = () => {
        const passenger = {
            paxName: inputValue,
            paxBirthdate: datevalue,
            paxType: selectedOption,
            paxAmount: cost[selectedOption],
            bookingHeader: {
                bookingId: bookingId // Assuming `bookingId` is available in your component state
            }
        };





    
        setPassengers([...passengers, passenger]);
        setInputValue('');
        setDateValue('');
        setSelectedOption('');
      };
    

    const handleCreateBooking = async () => {

        try {
            const response = await fetch('http://localhost:8080/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body :JSON.stringify({
                    "booking_date": "2014-08-10",
                    "no_of_pax": 4,
                    "taxes": 50.00,
                    "total_amount": 500.00,
                    "tour_amount": 450.00,
                    "cust_id": 1,
                    "departure_id": 1,
                    "tour_id": 1
                }),
                  
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            setBookingId(data.bookingId);
        } catch (error) {
            console.error('Error creating booking:', error);
        }
    };

    const handleAddPassenger = async () => {
        // if (passengerName.trim() === '') return;
        console.log("jay");

        try {
            const response = await fetch('http://localhost:8080/api/passengers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(passengers ),
                
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log("jay" + 1);

           
        } catch (error) {
            console.error('Error adding passenger:', error);
        }
    };

    const handleDone = async () => {
        try {
            await fetch('http://localhost:8080/api/booking/6', {  //for checking hardcode value is taken
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ bookingId, updateData: 'Passengers added' }),
            });

            navigate('/success-page'); // Redirect to a success page or another component
        } catch (error) {
            console.error('Error updating booking:', error);
        }
    };
    
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // await createBooking(); // Create booking first
//     if (bookingId) {
//       await postPassengers(); // Then post passengers
//       navigate(`/bybooking/${pkgId}`);
//     }
//   };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleCreateBooking(); // Create booking first
    if (bookingId) {
    //   await postPassengers(); // Then post passengers
      try {
        const response = await fetch(`http://localhost:8080/api/booking/${bookingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ bookingId, updateData: 'Passengers added' })
        });
        if (response.ok) {
          navigate('/success-page'); // Navigate to success page if PUT request is successful
        } else {
          console.log("Booking update failed.");
        }
      } catch (error) {
        console.error('Error updating booking:', error);
      }
    }
  };

    return (
        <div>
            {!bookingId ? (
                <Button onClick={handleCreateBooking}>Create Booking</Button>
            ) : (
                <div style={{ display: 'flex', justifyContent: "center" }}>
      <div className="user-input-container">
        <h2 className="text-center">Passenger Details 📄</h2>
        <Form onSubmit={handleAddPassenger} className="custom-form">
          <Form.Group controlId="inputValue">
            <Form.Label className="custom-label">Passenger Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name..."
              value={inputValue}
              onChange={handleInputChange}
              className="custom-input"
            />
          </Form.Group>
          <Form.Group controlId="birthdate">
            <Form.Label className="custom-label">Birth Date:</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Birth Date..."
              value={datevalue}
              onChange={handleDateChange}
              className="custom-input"
            />
          </Form.Group>
          <Form.Group controlId="radioGroup">
            <Form.Label className="custom-label">Passenger Type:</Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label={`Single Person Cost: ₹${cost.singlePrsnCost}`}
                name="radioGroup"
                value="singlePrsnCost"
                checked={selectedOption === 'singlePrsnCost'}
                onChange={handleRadioChange}
                className="radio-input"
              />
              <Form.Check
                type="radio"
                label={`Extra Person Cost: ₹${cost.extraPrsnCost}`}
                name="radioGroup"
                value="extraPrsnCost"
                checked={selectedOption === 'extraPrsnCost'}
                onChange={handleRadioChange}
                className="radio-input"
              />
              <Form.Check
                type="radio"
                label={`Child with Bed: ₹${cost.childWithBed}`}
                name="radioGroup"
                value="childWithBed"
                checked={selectedOption === 'childWithBed'}
                onChange={handleRadioChange}
                className="radio-input"
              />
              <Form.Check
                type="radio"
                label={`Child without Bed: ₹${cost.childWithoutBed}`}
                name="radioGroup"
                value="childWithoutBed"
                checked={selectedOption === 'childWithoutBed'}
                onChange={handleRadioChange}
                className="radio-input"
              />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit" className="submit-button">
            Submit
          </Button>
          <Button
            variant="secondary"
            type="button"
            className="submit-button"
            onClick={addPassenger}
          >
            Add Passenger
          </Button>
          <Button
            variant="info"
            type="button"
            className="submit-button"
            onClick={() => setShowTable(!showTable)}
          >
            Show Table
          </Button>
        </Form>

        {showTable && (
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Name</th>
                <th>Birth Date</th>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {passengers.map((passenger, index) => (
                <tr key={index}>
                  <td>{passenger.passengerName}</td>
                  <td>{passenger.birthdate}</td>
                  <td>{passenger.passengerType}</td>
                  <td>₹{passenger.passengerAmount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        {/* <Button variant="primary" onClick={() => navigate(`/bybooking/${pkgId}`)} className="submit-button"> */}
        <Button variant="primary" onClick={handleSubmit} className="submit-button">
          Book My Tour
        </Button>
      </div>
    </div>
            )}
        </div>
    );
};

export default BookingPage;
