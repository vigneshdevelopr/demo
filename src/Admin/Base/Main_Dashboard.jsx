import Template from "./Template";

const Main_Dashboard = ({ children }) => {
  return (
    <>
      <Template>
        <div className="grid-container">
          <div className="grid-item item1">
            <h3>Welcome User !</h3>
            <div className="dash_contents">
              <p>Home</p>
              <p>Rooms Availability</p>
              <p>Dashboard</p>
              <p>Dashboard</p>
              <p>Settings</p>
            </div>
          </div>
          <div className="grid-item item2">{children}</div>
        </div>
      </Template>
    </>
  );
};

export default Main_Dashboard;
