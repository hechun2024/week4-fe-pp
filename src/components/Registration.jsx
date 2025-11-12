import { useState } from "react";

export default function Registration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    phone: "",
  });

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert("passwords do not match");
      return;
    }
    // TODO: 发送到后端或处理注册逻辑
    console.log("register data:", form);
    setForm({ name: "", email: "", password: "", confirm: "", phone: "" });
    alert("registration submitted (see console)");
  };

  return (
    <section className="section">
      <h2>Registration</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Confirm Password
          <input
            name="confirm"
            type="password"
            value={form.confirm}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone
          <input name="phone" value={form.phone} onChange={handleChange} />
        </label>
        <button className="btn" type="submit">
          Register
        </button>
      </form>
    </section>
  );
}
