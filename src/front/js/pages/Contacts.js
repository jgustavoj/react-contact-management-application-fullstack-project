import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container">
				<div>
					<p className="text-right my-3">
						<Link to="/add">
							<button className="customButton">Add new contact</button>
						</Link>
					</p>
					{/* <div id="contacts" className="panel-collapse collapse show" ar-expanded="true"> */}
					{/* <div id="contacts"> */}
					<ul className="list-group">
						<li className="list-group-item">
							{store.contacts.map(item => {
								return (
									<ContactCard
										key={item.id}
										id={item.id}
										onDelete={() => setState({ showModal: true, id: item.id })}
									/>
								);
							})}
						</li>
					</ul>
					{/* </div> */}
					{/* </div> */}
				</div>
				<Modal show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />
			</div>
		</>
	);
};
