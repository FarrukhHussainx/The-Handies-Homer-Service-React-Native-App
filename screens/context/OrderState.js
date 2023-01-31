import React, { useState } from "react";
import OrderContext from "./OrderContext";
const OrderState = (props) => {
  const [companies, setCompanies] = useState([]);
  const [customer, setCustomer] = useState({
    _id: "63b4f2f5c614d4365f75dd6c",
    name: "ali",
    address: "soan garden srilanka",
  });
  const [orders, setOrders] = useState([]);

  //geting all companies
  const getUserData = async () => {
    try {
      //"http://192.168.43.186:5000/api/companies/getallcompanies"
      //"http://192.168.18.3:3000/api/orders/getorders/63b4f2f5c614d4365f75dd6c",
      const reponse = await fetch(
        "https://otp-production.up.railway.app/api/company/gatallcompanies",
        {
          method: "GET",
        }
      );
      const myData = await reponse.json();
      console.log(myData);
      setCompanies(myData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const FetchOrders = async () => {
    try {
      console.log(customer.user.id);
      //"http://192.168.43.186:5000/api/companies/getallcompanies"
      const reponse = await fetch(
        `https://otp-production.up.railway.app/api/orders/getorders/${customer.user.id}`,
        {
          method: "GET",
        }
      );
      const myData = await reponse.json();
      console.log(myData);
      setOrders(myData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getCustomer = (item) => {
    setCustomer(item);
  };

  const getOrder = async (item) => {
    const url = "https://otp-production.up.railway.app/api/orders/createorder";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_id: item.customer_id,
        customername: item.customerName,
        customerAddress: item.customerAdress,
        company_id: item.Company_id,
        price: item.price,
        Time: item.Time,
        day: item.day,
        servicetype: item.serviceType,
      }),
    });
    //fetchAllNote();
    //getOrder();
    console.log(item);
  };

  return (
    <OrderContext.Provider
      value={{
        companies,
        getUserData,
        customer,
        getOrder,
        getCustomer,
        FetchOrders,
        orders,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderState;
/////////////////////////////
///////////////////////////
//app apis
// import React, { useState } from "react";
// import OrderContext from "./OrderContext";
// const OrderState = (props) => {
//   const notesInitial = [];
//   const localhostx = "192.168.18.3";
//   const [notes, setNotes] = useState([]);
//   const [order, setOrder] = useState([]);
//   const [workers, setWorkers] = useState([]);
//   const [services, setServices] = useState([]);
//   const [token, setToken] = useState();
//   //geting all companies
//   const getUserData = async () => {
//     try {
//       // "http://192.168.18.3:5000/api/services/getallservices"
//       const reponse = await fetch(
//         "http://192.168.43.186:5000/api/companies/getallcompanies",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             "auth-token":
//               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTM5YTcyZjAwZTYxZjc5Yzk4ZDcxOSIsImlhdCI6MTY2NjQyMzQ3MH0.I1G8EAVE8T8vE6RRgi3ynPCYPZSAOpyPxoteXc7Uz9Y",
//           },
//         }
//       );
//       const myData = await reponse.json();
//       //console.log(myData);
//       setNotes(myData);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   //geting services related to company
//   const check = async (d) => {
//     const url = `http://192.168.43.186:5000/api/services/fetchallservicesx/${d}`;
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         // "auth-token":
//         //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGEzZjRiYzk3NjcyYTMyZmE0YzJhZCIsImlhdCI6MTY2NTgzNTM5MH0.RWYdP4xR0GD9M_6g4nmhmAsDjRsWCGQco8hZ7uaK96c",
//       },
//     });
//     const json = await response.json();
//     setServices(json);
//   };
//   const checkx = async (id) => {
//     console.log(id);
//     console.log("6374bee941093cc735d0b055");
//     const url = `http://192.168.43.186:5000/api/workers/fetchallworker/${id}`;
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         // "auth-token":
//         //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGEzZjRiYzk3NjcyYTMyZmE0YzJhZCIsImlhdCI6MTY2NTgzNTM5MH0.RWYdP4xR0GD9M_6g4nmhmAsDjRsWCGQco8hZ7uaK96c",
//       },
//     });
//     const json = await response.json();
//     setWorkers(json);
//   };
//   ///////////////////////
//   const addOrder = async (big) => {
//     const url = "http://192.168.43.186:5000/api/orders/createorder";
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token": `${token}`,
//       },
//       body: JSON.stringify({
//         name: big.name,
//         company_id: big.company_id,
//         nameC: big.nameC,
//         price: big.price,
//         type: big.type,
//       }),
//     });
//     //fetchAllNote();
//     getOrder();
//     console.log({
//       name: big.name,
//       company_id: big.company_id,
//       nameC: big.nameC,
//       price: big.price,
//       type: big.type,
//     });
//   };
//   const tokenUser = (token) => {
//     console.log("token");
//     console.log(token);
//     setToken(token);
//   };
//   //geting all oders of customer
//   const getOrder = async () => {
//     try {
//       // "http://192.168.18.3:5000/api/services/getallservices"
//       const reponse = await fetch(
//         "http://192.168.43.186:5000/api/orders/fetchallorders",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             "auth-token": `${token}`,
//           },
//         }
//       );
//       const myData = await reponse.json();
//       //console.log(myData);
//       setOrder(myData);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   ///////delete order
//   const deleteOrder = async (notex) => {
//     const url = `http://192.168.43.186:5000/api/orders/deleteOrder/${notex}`;
//     const response = await fetch(url, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token": `${token}`,
//       },
//     });
//     const json = await response.json();
//     // console.log("delete is called " + notex);
//     // const newNote = notes.filter((note) => note._id !== notex);
//     getOrder();
//     // setNotes(newNote);
//     // console.log(notes);

//     //setNotes(json);
//   };
//   return (
//     <OrderContext.Provider
//       value={{
//         notes,
//         getUserData,
//         check,
//         services,
//         addOrder,
//         tokenUser,
//         getOrder,
//         order,
//         getOrder,
//         deleteOrder,
//         workers,
//         checkx,
//       }}
//     >
//       {props.children}
//     </OrderContext.Provider>
//   );
// };

// export default OrderState;
/////////////////////////////////
///////////////////
////////////
/////////////////
//////////////////////
///////////////////////
//////////////////Add a note
//   const addNote = async (noteq) => {
//     const url = "http://localhost:5000/api/notes/createnotes";
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token":
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGEzZjRiYzk3NjcyYTMyZmE0YzJhZCIsImlhdCI6MTY2NTgzNTM5MH0.RWYdP4xR0GD9M_6g4nmhmAsDjRsWCGQco8hZ7uaK96c",
//       },
//       body: JSON.stringify({
//         title: noteq.title,
//         description: noteq.description,
//         tag: noteq.tag,
//       }),
//     });
//     fetchAllNote();
//     //const note={
//     //   name:"" only for understanding
//     // }
//     // setNotes(notes.concat(note));
//   };

//   const deleteNote = async (notex) => {
//     const url = `http://localhost:5000/api/notes/deletenote/${notex}`;
//     const response = await fetch(url, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token":
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGEzZjRiYzk3NjcyYTMyZmE0YzJhZCIsImlhdCI6MTY2NTgzNTM5MH0.RWYdP4xR0GD9M_6g4nmhmAsDjRsWCGQco8hZ7uaK96c",
//       },
//     });
//     const json = await response.json();
//     // console.log("delete is called " + notex);
//     const newNote = notes.filter((note) => note._id !== notex);
//     fetchAllNote();
//     // setNotes(newNote);
//     // console.log(notes);

//     //setNotes(json);
//   };
//   const updateNote = async (id, title, description, tag) => {
//     const url = `http://localhost:5000/api/notes/updatenote/${id}`;
//     const response = await fetch(url, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token":
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGEzZjRiYzk3NjcyYTMyZmE0YzJhZCIsImlhdCI6MTY2NTgzNTM5MH0.RWYdP4xR0GD9M_6g4nmhmAsDjRsWCGQco8hZ7uaK96c",
//       },
//       body: JSON.stringify({ title, description, tag }),
//     });
//     const json = response.json();
//     console.log(json);
//     for (let index = 0; index < notes.length; index++) {
//       const element = notes[index];
//       if (element._id === id) {
//         element.title = title;
//         element.description = description;
//         element.tag = tag;
//       }
//     }
//   };
