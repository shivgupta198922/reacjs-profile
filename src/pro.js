import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import './ProfilePage.css';
const ProfilePage = () => {
const [user, setUser] = useState({
name: '',
email: '',
avatar: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simplemale-avatar-png-image_5230557.jpg',
});
const [error, setError] = useState(null);
useEffect(() => {
setTimeout(() => {
try {
setUser({
name: 'Shiv Kumar Gupta',
email: 'shivgupta@gmail.com',
avatar: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simplemale-avatar-png-image_5230557.jpg',
});
} catch (e) {
setError('Failed to fetch user data.');
}
}, 1000);
}, []);
const handleSubmit = (values, { setSubmitting }) => {
setUser({
...user,
name: values.name,
email: values.email,
});
setSubmitting(false);
};
if (error) return <div className="error">{error}</div>; // Display error message
if (!user) return <div>Loading...</div>; // Display loading state
return (
<div className="profile-page">
<h1>Profile Page</h1>
<div className="profile-info">
{/* Avatar Section */}
<div className="avatar">
{user.avatar ? (
<img src={user.avatar} alt="Avatar" />
) : (
<div className="avatar-placeholder">
{user.name ? user.name[0] : 'A'}
</div>
)}
</div>
<h2>{user.name || 'Your Name'}</h2>
<p>{user.email || 'Your Email'}</p>
{/* Form to update user information */}
<Formik
initialValues={{ name: user.name, email: user.email }}
enableReinitialize // Ensures form fields update with new user data
onSubmit={handleSubmit}
>
{({ isSubmitting }) => (
<Form>
<div className="form-field">
<label htmlFor="name">Name</label>
<Field id="name" name="name" placeholder="Enter your name" />
</div>
<div className="form-field">
<label htmlFor="email">Email</label>
<Field
id="email"
name="email"
placeholder="Enter your email"
type="email"
/>
</div>
<button type="submit" disabled={isSubmitting}>
Update
</button>
</Form>
)}
</Formik>
</div>
</div>
);
};
export default ProfilePage;