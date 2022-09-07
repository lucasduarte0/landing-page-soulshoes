import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { Input, Radio } from "@material-tailwind/react";
import { Button } from "react-bootstrap";
import PhoneInput, { formatPhoneNumberIntl } from "react-phone-number-input";



class FormAtacado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        name: "",
        phone: "",
        email: "",
      },
      isSubmitting: false,
      isError: false
    };
  }


  submitForm = async e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ isSubmitting: true });

    const res = await fetch("https://webhook.site/b745ba3b-12ff-423b-a2b6-b93e3b6e6f53", {
      method: "POST",
      body: JSON.stringify(this.state.values),
      headers: {
        "Content-Type": "application/json"
      }
    });
    this.setState({ isSubmitting: false });
    const data = await res.json();
    !data.hasOwnProperty("error")
      ? this.setState({ message: data.success })
      : this.setState({ message: data.error, isError: true });

    setTimeout(
      () =>
        this.setState({
          isError: false,
          message: "",
          values: {
            name: "",
            phone: "",
            email: "",
          },
        }),
      1600
    );
  };

  handleInputChange = e =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });
 
  render() {
    return (
      <div className="px-8 bg-white rounded-2xl py-8">
        <form className="flex flex-col text-start gap-3" onSubmit={this.submitForm}>
          <div className="input-group">
            <label htmlFor="text">Nome</label>
            <Input variant="standard"
              type="text"
              name="name"
              id="name"
              value={this.state.values.name}
              onChange={this.handleInputChange}
              title="Name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Whatsapp</label>
            <Input variant="standard"
              type="text"
              name="phone"
              id="phone"
              value={this.state.values.phone}
              onChange={this.handleInputChange}
              title="Whatsapp"
              required
            />
                    {/* <PhoneInput
          inputComponent={MuiField}
          name="phone"
          onChange={handlePhone}
          international
          defaultCountry="BR"
          ref={ref}
          value={phone}
            /> */}
          </div>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <Input variant="standard"
              type="email"
              name="email"
              id="email"
              value={this.state.values.email}
              onChange={this.handleInputChange}
              title="Email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Já possui loja Física / Online?</label><br/>
            <Radio id="yes-radio" name="sellOnline" label="Sim" defaultChecked/>
            <Radio id="no-radio" name="sellOnline" label="Não"  />
           
          </div>
          <Button className="bg-green-500 text-white uppercase" variant="primary" type="submit">Receber contato!</Button>
        </form>
        <div className={`message ${this.state.isError && "error"}`}>
          {this.state.isSubmitting ? "Submitting..." : this.state.message}
        </div>
      </div>
    );
  }
}

export default function FormAtacadoPage() {
  return (
    <div className="App">
      <h1 className="mb-5 h2 text-white drop-shadow-lg">Quer revender nossos produtos?</h1>
      <FormAtacado />
    </div>
  );
}




