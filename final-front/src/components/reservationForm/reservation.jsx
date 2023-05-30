// import React, { useState, useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
// import useFetch from "../hooks/usefetch";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { SearchContext } from "../context/serachcontext";
// import "./reservation.css";

// const Reserve = ({ setOpen }) => {
// 	const [selectedRooms, setSelectedRooms] = useState([]);
// 	const { data, loading, error } = useFetch(`http://localhost:5000/room`);
// 	const { dates } = useContext(SearchContext);

// 	console.log(data);
// 	const getDatesInRange = (startDate, endDate) => {
// 		const start = new Date(startDate);
// 		const end = new Date(endDate);

// 		const date = new Date(start.getTime());

// 		const dates = [];

// 		while (date <= end) {
// 			dates.push(new Date(date).getTime());
// 			date.setDate(date.getDate() + 1);
// 		}

// 		return dates;
// 	};
// 	// const alldates = getDatesInRange(dates[0].startDate,  [0].endDate);

// 	// const isAvailable = (roomNumber) => {
// 	// 	const isFound = roomNumber.unavailableDates.some((date) =>
// 	// 		alldates.includes(new Date(date).getTime())
// 	// 	);

// 	// 	return !isFound;
// 	// };

// 	const handleSelect = (e) => {
// 		const checked = e.target.checked;
// 		const value = e.target.value;
// 		setSelectedRooms(
// 			checked
// 				? [...selectedRooms, value]
// 				: selectedRooms.filter((item) => item !== value)
// 		);
// 	};

// 	const navigate = useNavigate();

// 	const handleClick = async () => {
// 		try {
// 			await Promise.all(
// 				selectedRooms.map((roomId) => {
// 					const res = axios.put(`/rooms/availability/${roomId}`, {
// 						// dates: alldates,
// 					});
// 					return res.data;
// 				})
// 			);
// 			setOpen(false);
// 			navigate("/");
// 		} catch (err) {}
// 	};
// 	return (
// 		<div className="reserve">
// 			<div className="rContainer">
// 				<FontAwesomeIcon
// 					icon={faCircleXmark}
// 					className="rClose"
// 					onClick={() => setOpen(false)}
// 				/>
// 				<span>Select Your Rooms:</span>
// 				{data.map((item)=>{
// 					<div className="rItem" key={item._id}>
// 					<div className="rItemInfo">
// 					  <div className="rTitle">{item.name}</div>
// 					  <div className="rDesc">{item.description}</div>
// 					  <div className="rMax">
// 						Max people: <b>{item.capacity}</b>
// 					  </div>
// 					  <div className="rPrice">{item.price}</div>
// 					</div>
// 					<div className="rSelectRooms">
// 					  {/* {item.roomNumbers.map((roomNumber) => (
// 						<div className="room">
// 						  <label>{roomNumber.number}</label>
// 						  <input
// 							type="checkbox"
// 							value={roomNumber._id}
// 							onChange={handleSelect}
// 							// disabled={!isAvailable(roomNumber)}
// 						  />
// 						</div>
// 					  ))} */}
// 					</div>
// 				  </div>
// 				})}
// 			</div>
// 		</div>
// 	);
// };

// export default Reserve;