import { useState } from "react";
import axios from "axios";
import roles from "../../../utils/roles";
import toastMsg from "../../../utils/DisplayToast";
import FormPage from "../../../components/UI/FormComponents/FormPage/FormPage";
import FormMessage from "../../../components/UI/FormComponents/FormMessage/FormMessage";
import Form from "../../../components/UI/FormComponents/Form/Form";
import InputContainer from "../../../components/UI/FormComponents/InputContainer/InputContainer";
import Input from "../../../components/UI/FormComponents/Input/Input";
import FormButton from "../../../components/UI/FormComponents/FormButton/FormButton";
import { useHistory } from "react-router-dom";
import store_url from "../../../utils/store-urls";
import { Helmet } from "react-helmet-async";
function passwordValidation(value, setPasswordError, setIsValid) {
  if (value.length < 6) {
    setPasswordError("Password should have at least 6 characters");
    return;
  }
  if (value.length > 20) {
    setPasswordError("Password should have less than 20 characters");
    return;
  }
  setPasswordError("");
  setIsValid(true);
}

const SignUp = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    address: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [emailerror, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function changeHandler(e, name) {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function validation(e) {
    setEmailError("");
    setPasswordError("");
    setNameError("");
    setAddressError("");

    e.preventDefault();
    const emailip = e.target["signup-email"];
    const passwordip = e.target["signup-password"];
    const nameip = e.target["signup-name"];
    const addressip = e.target["signup-address"];
    const { email, password, name, address } = formData;

    if (name.length < 3) {
      setNameError("Name should be at least 3 characters");
      return;
    }
    if (name.length > 60) {
      setNameError("Name should be 60 characters or below");
      return;
    }

    if (address.length < 5) {
      setAddressError("Address should be at least 5 characters");
      return;
    }

    if (address.length > 200) {
      setAddressError("Maximum 200 characters are allowed");
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setEmailError("Invalid Email");
      return;
    }

    passwordValidation(password, setPasswordError, setIsValid);

    if (isValid) requestSignUp(emailip, passwordip, nameip, addressip);
  }
  async function requestSignUp(emailip, passwordip, nameip, addressip) {
    emailip.disabled = true;
    passwordip.disabled = true;
    nameip.disabled = true;
    addressip.disabled = true;
    const { email, password, name, address } = formData;
    if (isValid) {
      const res = await axios.post(store_url["sign-up"], {
        email,
        password,
        name,
        address,
        role: roles.USER,
      });
      emailip.value = "";
      passwordip.value = "";
      nameip.value = "";
      addressip.value = "";
      const { message, data } = res.data;
      if (message === "error") {
        toastMsg("error", data);
      } else {
        toastMsg("success", "Account created Successfully !!");
        history.replace("/sign-in");
      }
    }
    emailip.disabled = false;
    passwordip.disabled = false;
    nameip.disabled = false;
    addressip.disabled = false;
  }

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
        <meta name="description" content="Register your Account" />
      </Helmet>
      <div className="border min-h-[inherit] flex justify-center items-center">
        <FormPage>
          <FormMessage
            header="Create a new account"
            subtext="Or"
            routetext="login to your existing account"
            route="/sign-in"
          />
          <Form submitFunction={(e) => validation(e)}>
            <InputContainer>
              <Input
                id="signup-name"
                label="Name"
                type="text"
                errorMessage={nameError}
                value={formData.name}
                onChange={(e) => changeHandler(e, "name")}
              />
              <Input
                id="signup-email"
                label="Email Address"
                type="text"
                errorMessage={emailerror}
                value={formData.email}
                onChange={(e) => changeHandler(e, "email")}
              />
              <Input
                id="signup-password"
                label="Password"
                type="password"
                errorMessage={passwordError}
                value={formData.password}
                onChange={(e) => changeHandler(e, "password")}
              />
              <Input
                label="Address"
                name={"signup-address"}
                id={"signup-address"}
                value={formData.address}
                onChange={(e) => changeHandler(e, "address")}
                as="textarea"
                errorMessage={addressError}
              />
            </InputContainer>
            <FormButton type="submit" label="Sign Up" />
          </Form>
        </FormPage>
      </div>
    </>
  );
};

export default SignUp;
