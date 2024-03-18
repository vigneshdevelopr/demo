import { InputText } from "primereact/inputtext";
import "../styles/Admin.css";
import { Password } from "primereact/password";
import { useState } from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";



const Auth = () => {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);

  const load = () => {
      setLoading(true);

      setTimeout(() => {
          setLoading(false);
          navigate('/admin/dashboard')

      }, 2000);
  };







  return (
    <div className="main_div_auth">
      <div className="background">
        <div className="card">
          <section className="sub_card">
            <div className="sign_in">
              <h1>Sign in</h1>
              <InputText placeholder="Unique ID" style={{backgroundColor:'transparent'}}  />
              <Password placeholder="Password" toggleMask feedback={false} tabIndex={1}  style={{backgroundColor:'transparent'}} />

              <Button label="LOGIN" icon="pi pi-check" loading={loading} onClick={load} />

             
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Auth;
