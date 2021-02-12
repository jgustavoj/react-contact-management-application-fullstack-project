const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			loadContacts: () => {
				fetch("https://3001-de2ec5e2-fe0c-49d1-83e5-60d3b66e7333.ws-us03.gitpod.io/api/contact")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						// Do stuff with the JSON
						console.log("responseAsJson", responseAsJson);
						setStore({ contacts: responseAsJson });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			addContact: (name, email, phone, address) => {
				fetch("https://3001-de2ec5e2-fe0c-49d1-83e5-60d3b66e7333.ws-us03.gitpod.io/api/contact", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: name,
						email: email,
						phone: phone,
						address: address
					})
				})
					.then(response => response.json())
					.then(() => {
						fetch("https://3001-de2ec5e2-fe0c-49d1-83e5-60d3b66e7333.ws-us03.gitpod.io/api/contact")
							.then(response => response.json())
							.then(data => setStore({ contacts: data }));
						console.log("created");
					});
			},

			deleteContact: id => {
				fetch(`https://3001-de2ec5e2-fe0c-49d1-83e5-60d3b66e7333.ws-us03.gitpod.io/api/contact/${id}`, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				})
					.then(response => response.json())
					.then(() => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Gus-Jimenez")
							.then(response => response.json())
							.then(data => setStore({ contacts: data }));
						console.log("deleted");
					});
			},

			editContact: (name, email, phone, address, id) => {
				fetch(`https://3001-de2ec5e2-fe0c-49d1-83e5-60d3b66e7333.ws-us03.gitpod.io/api/contact/${id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: name,
						email: email,
						phone: phone,
						address: address,
						id: id
					})
				})
					.then(response => response.json())
					.then(() => {
						fetch("https://3001-de2ec5e2-fe0c-49d1-83e5-60d3b66e7333.ws-us03.gitpod.io/api/contact")
							.then(response => response.json())
							.then(data => setStore({ contacts: data }));
						console.log("Edited");
					});
			}
		}
	};
};

export default getState;
