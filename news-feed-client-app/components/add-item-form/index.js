import React, { useState } from "react";
import {
    Grid, TextField, Button, Typography
} from "@mui/material";

const initialItem = {
	title: '',
	text: '',
	image: '',
	linkText: '',
	linkPath: ''
};

export default function AddItemForm() {
	const [item, setItem] = useState(initialItem);
	const [loading, setLoading] = useState(false);
	const handleChange = (event) => {
		setItem({
			...item,
			[event.target.name]: event.target.value
		});
	};
	const handleSubmit = () => {
		console.log('item', item);
		const data = {
			...item,
			link: {
				text: item.linkText,
				path: item.linkPath
			}
		};
		setLoading(true);
		fetch('http://localhost:8081/items', {
			method: 'POST',
			body: JSON.stringify({ data }),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(() => {
			setLoading(false);
			setItem(initialItem);
			console.log('new item added');
		})
		.catch((error) => {
			setLoading(false);
			console.error('Error:', error);
		});
	};
    return (
        <Grid container width={700} direction="column" spacing={4}>
			<Grid item>
				<Typography variant="h4">Add new item</Typography>
			</Grid>
            <Grid item>
				<TextField value={item.title} onChange={handleChange} sx={{ width: '400px' }} name="title" id="title" label="Title" required />
			</Grid>
			<Grid item>
				<TextField value={item.text} onChange={handleChange}  sx={{ width: '400px' }} name="text" id="text" label="Text" required />
			</Grid>
			<Grid item>
				<TextField value={item.image} onChange={handleChange}  sx={{ width: '400px' }} name="image" id="image" label="Link to image" required />
			</Grid>
			<Grid item container spacing={2}>
				<Grid item>
					<TextField value={item.linkText} onChange={handleChange}  sx={{ width: '300px' }} name="linkText" id="linkText" label="Link text" required />
				</Grid>
				<Grid item>
					<TextField value={item.linkPath} onChange={handleChange}  sx={{ width: '300px' }} name="linkPath" id="linkPath" label="Link path" required />
				</Grid>
			</Grid>
			<Grid item>
				<Button disabled={loading} onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
			</Grid>
        </Grid>
    );
}