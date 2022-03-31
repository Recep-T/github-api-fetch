import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
	const [users1, setUsers1] = useState([]);
	const [users2, setUsers2] = useState([]);
	// const [response, setResponse] = useState(null);
	console.log("our current user:", users1, users2);
	useEffect(() => {
		fetch(`https://api.github.com/users`)
			.then((res) => res.json())
			.then((users) => {
				setUsers1(users);
				setUsers2(users);
			});
	}, []);
	//console.log(users);
	// async function getUser(username) {
	//   const response = await fetch(`https://api.github.com/users ${username}`);
	//   return await response.json();
	// }
	// useEffect(async () => {
	//   const user = await getUser(user);
	//   setResponse(user);
	// }, [user]);

	const handleSearch = (e) => {
		const name = e.target.value;
		const newUsers = users1.filter((user) => user.login.includes(name));
		setUsers2(newUsers);
	};

	return (
		<div className="App">
			<h1>GitHub API Fetching</h1>
			<input onChange={handleSearch} type="text" placeholder="search user" />

			<ul style={{ listStyleType: "none", padding: "0" }}>
				{users2.map((user) => {
					return (
						<li
							key={user.id}
							style={{
								display: "flex",
								justifyContent: "space-between",
								border: "1px solid red",
								backgroundColor: "#134EA4AE",
							}}
						>
							<span>Username: {user.login}</span>
							<span>Type: {user.type}</span>
							<img style={{ width: "100px" }} src={user.avatar_url} alt="" />
						</li>
					);
				})}
			</ul>
		</div>
	);
}
