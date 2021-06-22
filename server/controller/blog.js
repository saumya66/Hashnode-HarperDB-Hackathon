import express from "express";
import axios from "axios";

export const getBlogsData = async (req, res) => {
	const app = express();
	try {
		var body = {
			operation: "search_by_hash",
			schema: "blogs",
			table: "data",
			hash_values: [1, 2, 3, 4, 5, 6],
			get_attributes: ["*"],
		};

		var config = {
			method: "post",
			url: process.env.HARPERDB_URL,
			headers: {
				"Content-Type": "application/json",
				Authorization: process.env.AUTHORIZATION,
			},
			data: body,
		};
		const resData = await axios(config);
		res.send(resData.data);
	} catch (e) {
		console.log("Yo" + e);
	}
};
