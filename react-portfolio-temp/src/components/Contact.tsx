import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import '../assets/styles/Contact.scss';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        setErrors(prev => ({
            ...prev,
            [name]: false
        }));
    };

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validate form
        const newErrors = {
            name: formData.name.trim() === '',
            email: !validateEmail(formData.email),
            message: formData.message.trim() === ''
        };

        setErrors(newErrors);

        // If no errors, proceed with form submission
        if (!Object.values(newErrors).includes(true)) {
            // Handle form submission here
            console.log('Form submitted:', formData);
            
            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }
    };

    return (
        <div className="contact-container" id="contact">
            <div className="contact-content">
                <h1>Get In Touch</h1>
                <p>Have a project in mind? Let's collaborate and bring your ideas to life!</p>
                
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    className="contact-form"
                    noValidate
                >
                    <div className="form-flex">
                        <TextField
                            required
                            name="name"
                            label="Your Name"
                            placeholder="What's your name?"
                            value={formData.name}
                            onChange={handleChange}
                            error={errors.name}
                            helperText={errors.name ? "Please enter your name" : ""}
                            variant="outlined"
                        />
                        <TextField
                            required
                            name="email"
                            label="Email Address"
                            placeholder="How can I reach you?"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                            helperText={errors.email ? "Please enter a valid email" : ""}
                            variant="outlined"
                        />
                    </div>

                    <TextField
                        required
                        name="message"
                        label="Message"
                        placeholder="What would you like to discuss?"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        error={errors.message}
                        helperText={errors.message ? "Please enter your message" : ""}
                        className="body-form"
                        variant="outlined"
                    />

                    <div className="submit-button">
                        <Button 
                            type="submit"
                            variant="contained"
                            endIcon={<SendIcon />}
                        >
                            Send Message
                        </Button>
                    </div>
                </Box>
            </div>
        </div>
    );
}

export default Contact;