import React from "react";

export const Email = () => {
	return (
		<>
			<h1>Email</h1>
			<button id="authorize_button">Authorize</button>
			<button id="signout_button">Sign Out</button>
			<table className="table table-striped table-inbox hidden">
				<thead>
					<tr>
						<th>From</th>
						<th>Subject</th>
						<th>Date/Time</th>
					</tr>
				</thead>
				<tbody />
			</table>
		</>
	);
};
