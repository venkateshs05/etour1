import React, { useState, useEffect } from "react";
import { Button, Form, Col, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const BookingPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [passengers, setPassengers] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [cost, setCost] = useState({});
  const [bookid, setBookid] = useState(null); // State for booking ID
  const [totalCost1, setTotalCost1] = useState(null);

  const { catid } = useParams();
  const navigate = useNavigate();
  const c_id = sessionStorage.getItem("uid");
  sessionStorage.setItem("bid",bookid);

  useEffect(() => {
    getCost();
  }, [catid]);

  const getCost = () => {
    fetch(`http://localhost:8080/api/cost/subCatId/${catid}`)
      .then((response) => response.json())
      .then((result) => {
        if (result && result.length > 0) {
          setCost(result[0]); // Set the cost to the first object in the array
          setSelectedOption("singlePrsnCost"); // Set the default selected option
          console.log("Costs fetched:", result[0]);
        } else {
          console.error("No cost data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    const today = new Date().toISOString().split("T")[0];
    if (selectedDate > today) {
      alert("Birth date cannot be greater than today's date.");
    } else {
      setDateValue(selectedDate);
    }
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const addPassenger = () => {
    const passenger = {
      paxName: inputValue,
      paxBirthdate: dateValue,
      paxType: selectedOption,
      paxAmount: cost[selectedOption],
      bookingHeader: {
        bookingId: bookid, // Assuming `bookingId` is available in your component state
      },
    };
    setPassengers((prevPassengers) => [...prevPassengers, passenger]);
    setInputValue("");
    setDateValue("");
    setSelectedOption("singlePrsnCost");
   
  };

  const calculate = () => {
  let totalCost = 0;

  passengers.forEach((passenger) => {
    switch (passenger.paxType) {
      case 'singlePrsnCost':
        totalCost += cost.singlePrsnCost;
        break;
      case 'extraPrsnCost':
        totalCost += cost.extraPrsnCost;
        break;
      case 'childWithBed':
        totalCost += cost.childWithBed;
        break;
      case 'childWithoutBed':
        totalCost += cost.childWithoutBed;
        break;
      default:
        break;
    }
  });

  // You can update the state with the calculated total cost
  setTotalCost1(totalCost);

  console.log("Total calculated cost:", totalCost);
};

  const handleCreateBooking = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookingDate: new Date().toISOString().split("T")[0],
          noOfPax: 0,
          taxes: 0,
          totalAmount: 0,
          tourAmount: 0,
          customerMaster: {
            custId: c_id,
          },
        }),
      });

      const data = await response.json();
      setBookid(data.bookingId);
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  const handleAddPassenger = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    addPassenger(); // Add the passenger details to the passengers array

    try {
      const response = await fetch("http://localhost:8080/api/passengers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(passengers),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error adding passenger:", error);
    }

    await handleSubmit();
  };

  const handleSubmit = async (event) => {
    await calculate();

    if (bookid) {
      try {
        const response = await fetch(
          `http://localhost:8080/api/booking/${bookid}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              booking_Id: bookid,
              bookingDate: new Date().toISOString().split("T")[0],
              customerMaster: { custId: c_id },
              noOfPax: passengers.length,
              tourAmount: cost.cost,
              taxes: (cost.cost + totalCost1) * 0.1,
              totalAmount: cost.cost + totalCost1 + (cost.cost + totalCost1) * 0.1,
            }),
          }
        );
        if (response.ok) {
          navigate("/success-page");
        }
      } catch (error) {
        console.error("Error updating booking:", error);
      }
    }
  };

  return (
    <div>
      {!bookid ? (
        <Button onClick={handleCreateBooking}>Create Booking</Button>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="user-input-container">
            <h2 className="text-center">Passenger Details 📄</h2>
            <Form onSubmit={handleAddPassenger} className="custom-form">
              <Form.Group controlId="inputValue_1">
                <Form.Label className="custom-label">Passenger Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name..."
                  value={inputValue}
                  onChange={handleInputChange}
                  className="custom-input"
                />
              </Form.Group>
              <Form.Group controlId="birthdate_1">
                <Form.Label className="custom-label">Birth Date:</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter Birth Date..."
                  value={dateValue}
                  onChange={handleDateChange}
                  className="custom-input"
                />
              </Form.Group>
              <Form.Group controlId="radioGroup_1">
                <Form.Label className="custom-label">Passenger Type:</Form.Label>
                <Col>
                  <Form.Check
                    type="radio"
                    label={`Single Person Cost: ₹${cost.singlePrsnCost}`}
                    name="radioGroup_1"
                    value="singlePrsnCost"
                    checked={selectedOption === "singlePrsnCost"}
                    onChange={handleRadioChange}
                    className="radio-input"
                  />
                  <Form.Check
                    type="radio"
                    label={`Extra Person Cost: ₹${cost.extraPrsnCost}`}
                    name="radioGroup_1"
                    value="extraPrsnCost"
                    checked={selectedOption === "extraPrsnCost"}
                    onChange={handleRadioChange}
                    className="radio-input"
                  />
                  <Form.Check
                    type="radio"
                    label={`Child with Bed: ₹${cost.childWithBed}`}
                    name="radioGroup_1"
                    value="childWithBed"
                    checked={selectedOption === "childWithBed"}
                    onChange={handleRadioChange}
                    className="radio-input"
                  />
                  <Form.Check
                    type="radio"
                    label={`Child without Bed: ₹${cost.childWithoutBed}`}
                    name="radioGroup_1"
                    value="childWithoutBed"
                    checked={selectedOption === "childWithoutBed"}
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
                      <td>{passenger.paxName}</td>
                      <td>{passenger.paxBirthdate}</td>
                      <td>{passenger.paxType}</td>
                      <td>₹{passenger.paxAmount}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
            <Button
              variant="primary"
              onClick={handleSubmit}
              className="submit-button"
            >
              Book My Tour
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;


// import React, { useState, useEffect } from "react";
// import { Button, Form, Col, Table } from "react-bootstrap";
// import { useNavigate, useParams } from "react-router-dom";

// const BookingPage = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [dateValue, setDateValue] = useState("");
//   const [selectedOption, setSelectedOption] = useState("");
//   const [passengers, setPassengers] = useState([]);
//   const [showTable, setShowTable] = useState(false);
//   const [cost, setCost] = useState({});
//   const [bookid, setBookid] = useState(null); // State for booking ID
//   const [totalCost1, setTotalCost1] = useState(null);

//   const { catid } = useParams();
//   const navigate = useNavigate();
//   const c_id = sessionStorage.getItem("uid");
// console.log(c_id+"       c i d");
//   useEffect(() => {
//     getCost();
//   }, [catid]);

//   const getCost = () => {
//     fetch(`http://localhost:8080/api/cost/subCatId/${catid}`)
//       .then((response) => response.json())
//       .then((result) => {
//         if (result && result.length > 0) {
//           setCost(result[0]); // Set the cost to the first object in the array
//           setSelectedOption("singlePrsnCost"); // Set the default selected option
//           console.log("Costs fetched:", result[0]);
//         } else {
//           console.error("No cost data available");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     const selectedDate = event.target.value;
//     const today = new Date().toISOString().split("T")[0];
//     if (selectedDate > today) {
//       alert("Birth date cannot be greater than today's date.");
//     } else {
//       setDateValue(selectedDate);
//     }
//   };

//   const handleRadioChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const addPassenger = () => {
//     const passenger = {
//       paxName: inputValue,
//       paxBirthdate: dateValue,
//       paxType: selectedOption,
//       paxAmount: cost[selectedOption],
//       bookingHeader: {
//         bookingId: bookid, // Assuming `bookingId` is available in your component state
//       },
//     };

//     setPassengers([...passengers, passenger]);
//     setInputValue("");
//     setDateValue("");
//     setSelectedOption("singlePrsnCost");
//   };

//   const calculate = () => {
//     let totalCost = 0;

//     passengers.forEach((passenger) => {
//       totalCost += cost[passenger.paxType] || 0;
//     });

//     setTotalCost1(totalCost);
//     console.log("Total calculated cost:", totalCost);
//   };

//   const handleCreateBooking = async () => {
//     try {
//       console.log("inside handle create booking");
//       const response = await fetch("http://localhost:8080/api/booking", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           bookingDate: new Date().toISOString().split("T")[0],
//           noOfPax: 0,
//           taxes: 0,
//           totalAmount: 0,
//           tourAmount: 0,
//           customerMaster: {
//             custId: c_id,
//           },
//         }),
//       });

//       const data = await response.json();
//       setBookid(data.bookingId);
//     } catch (error) {
//       console.error("Error creating booking:", error);
//     }
    
//   };

//   const handleAddPassenger = async () => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/passengers`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(passengers),
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//     } catch (error) {
//       console.error("Error adding passenger:", error);
//     }

//     await handleSubmit();
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     await calculate();

//     if (bookid) {
//       try {
//         const response = await fetch(
//           `http://localhost:8080/api/booking/${bookid}`,
//           {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               booking_Id: bookid,
//               bookingDate: new Date().toISOString().split("T")[0],
//               customerMaster: { custId: c_id },
//               noOfPax: passengers.length,
//               tourAmount: cost.cost,
//               taxes: totalCost1 * (10 / 100),
//               totalAmount: totalCost1,
//             }),
//           }
//         );
//         if (response.ok) {
//           navigate("/success-page");
//         }
//       } catch (error) {
//         console.error("Error updating booking:", error);
//       }
//     }
//   };

//   return (
//     <div>
//       {!bookid ? (
//         <Button onClick={handleCreateBooking}>Create Booking</Button>
//       ) : (
//         <div style={{ display: "flex", justifyContent: "center" }}>
//           <div className="user-input-container">
//             <h2 className="text-center">Passenger Details 📄</h2>
//             <Form onSubmit={handleAddPassenger} className="custom-form">
//               <Form.Group controlId="inputValue_1">
//                 <Form.Label className="custom-label">Passenger Name:</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Name..."
//                   value={inputValue}
//                   onChange={handleInputChange}
//                   className="custom-input"
//                 />
//               </Form.Group>
//               <Form.Group controlId="birthdate_1">
//                 <Form.Label className="custom-label">Birth Date:</Form.Label>
//                 <Form.Control
//                   type="date"
//                   placeholder="Enter Birth Date..."
//                   value={dateValue}
//                   onChange={handleDateChange}
//                   className="custom-input"
//                 />
//               </Form.Group>
//               <Form.Group controlId="radioGroup_1">
//                 <Form.Label className="custom-label">Passenger Type:</Form.Label>
//                 <Col>
//                   <Form.Check
//                     type="radio"
//                     label={`Single Person Cost: ₹${cost.singlePrsnCost}`}
//                     name="radioGroup_1"
//                     value="singlePrsnCost"
//                     checked={selectedOption === "singlePrsnCost"}
//                     onChange={handleRadioChange}
//                     className="radio-input"
//                   />
//                   <Form.Check
//                     type="radio"
//                     label={`Extra Person Cost: ₹${cost.extraPrsnCost}`}
//                     name="radioGroup_1"
//                     value="extraPrsnCost"
//                     checked={selectedOption === "extraPrsnCost"}
//                     onChange={handleRadioChange}
//                     className="radio-input"
//                   />
//                   <Form.Check
//                     type="radio"
//                     label={`Child with Bed: ₹${cost.childWithBed}`}
//                     name="radioGroup_1"
//                     value="childWithBed"
//                     checked={selectedOption === "childWithBed"}
//                     onChange={handleRadioChange}
//                     className="radio-input"
//                   />
//                   <Form.Check
//                     type="radio"
//                     label={`Child without Bed: ₹${cost.childWithoutBed}`}
//                     name="radioGroup_1"
//                     value="childWithoutBed"
//                     checked={selectedOption === "childWithoutBed"}
//                     onChange={handleRadioChange}
//                     className="radio-input"
//                   />
//                 </Col>
//               </Form.Group>
//               <Button variant="primary" type="submit" className="submit-button">
//                 Submit
//               </Button>
//               <Button
//                 variant="secondary"
//                 type="button"
//                 className="submit-button"
//                 onClick={addPassenger}
//               >
//                 Add Passenger
//               </Button>
//               <Button
//                 variant="info"
//                 type="button"
//                 className="submit-button"
//                 onClick={() => setShowTable(!showTable)}
//               >
//                 Show Table
//               </Button>
//             </Form>

//             {showTable && (
//               <Table striped bordered hover variant="light">
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Birth Date</th>
//                     <th>Type</th>
//                     <th>Amount</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {passengers.map((passenger, index) => (
//                     <tr key={index}>
//                       <td>{passenger.paxName}</td>
//                       <td>{passenger.paxBirthdate}</td>
//                       <td>{passenger.paxType}</td>
//                       <td>₹{passenger.paxAmount}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             )}
//             <Button
//               variant="primary"
//               onClick={handleSubmit}
//               className="submit-button"
//             >
//               Book My Tour
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookingPage;
