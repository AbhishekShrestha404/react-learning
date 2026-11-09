import { useState } from 'react';
import './Form.css'

function Form() {
    const [FormData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        contact: "",
        gender: "",
        resume: null,
        porfolio: "",
        reason: ""
    });

    const handleData = (evt) => {
        const { name, value, type, files } = evt.target;
        setFormData(currentData => ({
            ...currentData,
            [name]: type === "file" ? files[0] ?? null : value
        }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(FormData);
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h1>React Form</h1>
                <div>
                    <h3>Full Name*</h3>
                    <div className="name-row">
                        <div className="name-field">
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                placeholder="Enter your firstname"
                                onChange={handleData}
                                required
                            />
                        </div>

                        <div className="name-field">
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                placeholder="Enter your lastname"
                                onChange={handleData}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Email*</h3>
                    <input type="email" name="email" id="email" required onChange={handleData} />
                </div>
                <div>
                    <h3>Contact*</h3>
                    <input type="tel" name="contact" id="contact" required onChange={handleData} />
                </div>
                <div>
                    <h3>Gender</h3>
                    <div className="gender-row">
                        <input type="radio" name="gender" id="male" value="Male" onChange={handleData} />
                        <label htmlFor="male">Male</label>

                        <input type="radio" name="gender" id="female" value="Female" onChange={handleData} />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>

                <div>
                    <h3>Upload your Resume*</h3>
                    <input type="file" name="resume" id="resume" required onChange={handleData} />
                </div>
                <div>
                    <h3>Enter your porfolio URL*</h3>
                    <input type="url" name="porfolio" id="porfolio" required onChange={handleData} />
                </div>
                <div>
                    <h3>Why are you applying for this role?*</h3>
                    <textarea
                        name="reason"
                        id="reason"
                        placeholder="Tell us why you're interested in this role..."
                        rows="4"
                        required
                        onChange={handleData}
                    />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>

    )
}

export default Form;