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
                "data:image/png;base64,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"
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
