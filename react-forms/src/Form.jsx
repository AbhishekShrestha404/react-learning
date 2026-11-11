import { useForm } from "react-hook-form";

import './Form.css'

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const registerOptions = {
        firstname: {
            required: "This field is required."
        },
        lastname: {
            required: "This field is required."
        },
        email: {
            required: "This field is required.",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email."
            }
        },
        contact: {
            required: "This field is required.",
            minLength: {
                value: 10,
                message: "Contact must be 10 digits."
            },
            maxLength: {
                value: 10,
                message: "Contact must be 10 digits."
            },
            pattern: {
                value: /^[0-9]+$/,
                message: "Only numbers are allowed."
            }
        },
        gender: {
            required: "Please select one option."
        },
        resume: {
            required: "Please upload a file.",
            validate: (files) =>
                !files?.[0] ||
                files[0].size <= 2 * 1024 * 1024 ||
                "File must be 2MB or less."
        },
        portfolio: {
            required: "This field is required."
        },
        reason: {
            required: "This field is required."
        }
    };

    const onSubmit = (data) => {
        console.log(data);
        console.log("Resume:", data.resume[0]);
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)} no validate>
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
                                {
                                ...register("firstname", registerOptions.firstname)
                                }
                            />
                            {errors.firstname && (
                                <p className="error">{errors.firstname.message}</p>
                            )}
                        </div>

                        <div className="name-field">
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                placeholder="Enter your lastname"
                                {...register("lastname", registerOptions.lastname)}
                            />
                            {errors.lastname && (
                                <p className="error">{errors.lastname.message}</p>
                            )}
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Email*</h3>
                    <input type="email"
                        name="email"
                        id="email"
                        {...register("email", registerOptions.email)}
                    />
                    {errors.email && (
                        <p className="error">{errors.email.message}</p>
                    )}
                </div>
                <div>
                    <h3>Contact*</h3>
                    <input type="tel"
                        name="contact"
                        id="contact"

                        {...register("contact", registerOptions.contact)}
                    />
                    {errors.contact && (
                        <p className="error">{errors.contact.message}</p>
                    )}
                </div>
                <div>
                    <h3>Gender</h3>
                    <div className="gender-row">
                        <input type="radio"
                            name="gender"
                            id="male"
                            value="Male"
                            {...register("gender", registerOptions.gender)}
                        />
                        <label htmlFor="male">Male</label>

                        <input type="radio"
                            name="gender"
                            id="female"
                            value="Female"
                            {...register("gender", registerOptions.gender)}
                        />
                        <label htmlFor="female">Female</label>
                    </div>
                    {errors.gender && (
                        <p className="error">{errors.gender.message}</p>
                    )}
                </div>

                <div>
                    <h3>Upload your Resume*</h3>
                    <input type="file"
                        name="resume"
                        id="resume"
                        accept=".pdf.docx.docx"
                        {...register("resume", registerOptions.resume)}
                    />
                    {errors.resume && (
                        <p className="error">{errors.resume.message}</p>
                    )}
                </div>

                <div>
                    <h3>Enter your porfolio URL*</h3>
                    <input type="url"
                        name="porfolio"
                        id="porfolio"
                        {...register("portfolio", registerOptions.portfolio)}
                    />
                    {errors.portfolio && (
                        <p className="error">{errors.portfolio.message}</p>
                    )}
                </div>

                <div>
                    <h3>Why are you applying for this role?*</h3>
                    <textarea
                        name="reason"
                        id="reason"
                        placeholder="Tell us why you're interested in this role..."
                        rows="4"
                        {...register("reason", registerOptions.reason)}
                    />
                    {errors.reason && (
                        <p className="error">{errors.reason.message}</p>
                    )}
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>

    )
}

export default Form;