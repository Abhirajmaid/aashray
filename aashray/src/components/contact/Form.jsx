import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toast } from "../../context/ToastContext";
import { UserAuth } from "../../context/AuthContext";

const Form = () => {
  const form = useRef();
  const [loader, setLoader] = useState(false);

  const { user } = UserAuth();
  const { success, error, warn } = Toast();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const warning = () => {
    warn("Signin First!");
    setLoader(false);
  };

  const clearInput = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMsg("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);
    if (firstName === "" || lastName === "" || email === "") {
      error("Please fill all the fields!");
      setLoader(false);
    } else {
      user
        ? emailjs
            .sendForm(
              "service_gdm10ak",
              "template_2v70m7c",
              form.current,
              "jgD1dSgL1VKS1UTD5"
            )
            .then(
              (result) => {
                console.log(result.text);
                setLoader(false);
                success("Message sent successfuly!");
                clearInput();
              },
              (err) => {
                console.log(err.text);
                setLoader(false);
                error("Something went wrong!");
              }
            )
        : warning();
    }
  };
  return (
    <div className="pt-10 pb-8">
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex-col gap-4 flex-align-center sm:flex-row">
          <div className="flex-1 w-full">
            <p>First Name</p>
            <input
              id="first_name"
              type="text"
              name="from_name"
              className="w-full input"
              placeholder="First Name.."
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="flex-1 w-full">
            <p>Last Name</p>
            <input
              id="last_name"
              type="text"
              name="from_last_name"
              className="w-full input"
              placeholder="Last Name.."
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="mt-4">
          <p>Email Address</p>
          <input
            id="eamil"
            type="text"
            className="w-full input"
            name="from_email"
            placeholder="Email Address.."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mt-4">
          <p>Message</p>
          <textarea
            id="msg"
            rows={4}
            className="w-full input"
            name="message"
            placeholder="Message.."
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="mt-4 flex-center-center">
          <button
            onClick={sendEmail}
            className={`${
              loader
                ? "!bg-slate-500 !shadow-none !opacity-80 !cursor-default"
                : ""
            }  btn btn-primary`}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
