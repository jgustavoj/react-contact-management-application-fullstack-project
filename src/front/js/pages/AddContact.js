import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({
		name: null,
		email: null,
		phone: null,
		address: null
	});

	const handleChange = e => {
		setContact({ ...contact, [e.target.name]: e.target.value });
	};

	const handleSave = () => {
		actions.addContact(contact.name, contact.email, contact.phone, contact.address);
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5" style={{ fontSize: "5vmin" }}>
					Add a new contact
				</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							onChange={handleChange}
							name="name"
							type="text"
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							onChange={handleChange}
							type="email"
							name="email"
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							onChange={handleChange}
							type="phone"
							name="phone"
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							onChange={handleChange}
							type="text"
							name="address"
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<Link to="/" className="d-flex justify-content-center">
						<button
							disabled={!contact.name || !contact.address || !contact.phone || !contact.email}
							onClick={handleSave}
							type="button"
							className="customButtonSave">
							save
						</button>
					</Link>
					<div className="mt-3">
						<Link className="mt-3 w-100 text-center" to="/">
							or get back to contacts
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
