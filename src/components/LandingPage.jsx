import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userEmailState } from "../store/selectors/userEmailState";
import { userLoggedInState } from "../store/selectors/userIsLoggedIn";
import { motion } from "framer-motion";
function LandingPage() {
  const navigate = useNavigate();
  const userEmail = useRecoilValue(userEmailState);
  const userLoding = useRecoilValue(userLoggedInState);

  return (
    <div>
      <Grid container style={{ padding: "5vw" }}>
        <Grid item xs={12} md={6} lg={6}>
          <div style={{ marginTop: 100 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Typography variant={"h4"} style={{ color: "white" }}>
                Alemeno User
              </Typography>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Typography variant="h6" style={{ color: "white",fontSize:"15px"}}>
                A place where you Upskill yourself
              </Typography>
            </motion.div>
            {!userEmail && !userLoding && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div style={{ display: "flex", marginTop: 20 }}>
                  {/* <h1 className="landing-page">
                    A place to where you Learn skills
                  </h1> */}
                  <button
                    className="button-btn"
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    SignUp
                  </button>
                  <div>
                    <button
                      className="button-btn"
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6} style={{ marginTop: 20 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 80 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              className="landingpic"
              src={
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4RDQ0OEA4PEA8NDQ0PDxAOEA8PDg8NFREWFhURExMYHSggGBolGxMVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0PDysZFRkrLSsrNzctKysrLS0rKysrKysrKysrKysrLSsrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQMEAgYF/8QAJhABAQACAQMEAgMBAQAAAAAAAAECAxFBUWETITFxkbESgfHhof/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A+SA+4fNgAAAAAAAAAAAAAAAAAAAAAAAOsM7GiXn3ZXerLi+KgvAQaNWXM+nbNhlxWlNABB8od+lT0r4dBwO/SqLrvYHIWAAAAAAAAAAAAAAAAAAAAAAANGvLmfTpn15cX7aEBdpz6fhSlBqFU3eBkUgNAAA5y1y+Pp0Az54WOWqs+zDi+FHICgAAAAAAAAAAAAAAAAAAv1Z8zjt+lBLx7g1CMcuZylkAEHfp3sj+F7VpCjLYhrc3CXoUZhblq7K1EIyx5nCQGWwXbsev5UtAAAAAAAAAAAAAAAAAAAADrDPitErK6wz4+kGgJnO4yNYCAAA42Yc/bsBlQu3YdfypaBn2Y8X9NCM8eZwozCcpx7IUAAAAAAAAAAAAAAAAAAAATAiQfTGm4Ts4umdHKikdZYWOVAACs2ePF4aXOzHmeYuDMJQo5zw5UZY2NJYoyi7LTOji6qo4HX8L2rmy9gAAAAAAAAAAAAAAAATEoiQfeAcQUbNfHvPj9L0WAyjrPHi8OWgABVtw6z+1LWp2a+s/C5oqAUAAAALJ2cXVHYCq6e1V5Y2fMaRaMovy1S+FOWFiiAAAAAAAAAATEoiQekz1Tp7fpTZw1OdmHM8vPmjOA0ONmPM8xna1G7Hr3/a4KwFAAHGeuXwruq/a8WjLcb2qGsKMg1XGdo5uqFGcXXT2v5cZa7Oi0cAAAAp2a+PeK2pTtw4958KKwFAAAAAAExKIkHqAHmFW7Hr+VTVYzZ48XhrBCLEijNnjxXLTljzGfLGxc0QAoAAAAAAAA5ywlVZar09/2vAZBpzwl+2fLGxqiCwAZ88OPpy1WKc9Xb/q0VgKAAAAJiURIPUAPMDnZhzPMdAMot24dZ/apoEWcpFFOWnsruNnRqCjINX8Z2iP4TstGYX3VEXT5KKR3dV/xwoAAAAIzx5iQGWzi8IaNuHP2oawQACLjL8xxdMWCim6b3h6N8f+rgop9G945ywsaCwozRJceLwKPUAPMAACvZr6xYAy2DTljL8uLp7VqikWejfCPTvYo4E3C9qgABQRYkBVlp7KssbPlqRYUZRbnq6z8KmgAAcZ6+ft2Ay5Y2fKGuxXlqn0tFAtum+HPp3so4Hfp5di672BwJQAAg9AA4gAAAAAAAAWADm65/iu6b0XCjNZYhqsV5auy0UhYKCrbr6z+1oDILNuHHv0VtAAAAAAAACvbhzOesUNbKuCAAegAcQAAAAAAAAAAAAABXu+FINYACiMvisoLgAKAAAAAADLUC4AAP/Z"
              }
              width={"75%"}
            />
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
}

export default LandingPage;
