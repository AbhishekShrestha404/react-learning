import './Form.css'

function Form() {
    return (
        <div>
            <form action="">
                <h1>React Form</h1>
                <div>
                    <h3>Full Name*</h3>
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" name="firstname" id="firstname" placeholder='Enter your firstname' required />
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" name="lastname" id="lastname" placeholder='Enter your lastname' required />

                </div>
                <div>
                    <h3>Email*</h3>
                    <input type="email" name="email" id="email" required />
                </div>
                <div>
                    <h3>Contact*</h3>
                    <input type="tel" name="contact" id="contact" required />
                </div>
                <div>
                    <h3>Gender</h3>
                    <input type="radio" name="gender" id="male" value="Male" />
                    <label htmlFor="male">Male</label>

                    <input type="radio" name="gender" id="female" value="Female" />
                    <label htmlFor="female">Female</label>
                </div>

                <div>
                    <h3>Upload your Resume*</h3>
                    <input type="file" name="resume" id="resume" required />
                </div>
                <div>
                    <h3>Enter your porfolio URL*</h3>
                    <input type="url" name="porfolio" id="porfolio" required />
                </div>
                <div>
                    <h3>Why are you applying for this role?*</h3>
                    <textarea
                        name="reason"
                        id="reason"
                        placeholder="Tell us why you're interested in this role..."
                        rows="4"
                        required
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