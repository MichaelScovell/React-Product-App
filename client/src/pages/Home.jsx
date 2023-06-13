// Home Page

// Defining imports for the home page
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  // Define state
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {/* Check whether we are on the home page */}
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          {/* Add Header with slide animation */}
          <motion.header {...slideAnimation("down")}>
            {/* <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            /> */}
          </motion.header>
          {/* Adding Motion Div */}
          <motion.div className="home-content" {...headContainerAnimation}>
            <h1 className="head-text">
              WHAT <br className="x1:block hidden" /> A GOAL
            </h1>
          </motion.div>
          <motion.div
            {...headContainerAnimation}
            className="flex flex-col gap-5"
          >
            <p className="max-w-md font-normal text-gray-600 text-base">
              Design your unique and exclusive football kit with our brand new
              3D kit designer. <strong>Make your dream reality</strong>{" "}
              <br></br> Start designing today!
            </p>

            {/* Creating a custom button */}
            <CustomButton
              type="filled"
              title="Customize"
              handleClick={() => (state.intro = false)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            ></CustomButton>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
