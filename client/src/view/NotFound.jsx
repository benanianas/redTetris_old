import React from "react";
import Lottie from "lottie-react";
import data from "../assets/images/notfound.json";

// styled components
import {
	NotFoundWrapper,
	LottieWrapper,
	HomeButton,
} from "../components/styles/StyledNotFound";

const NotFound = () => {
	return (
		<NotFoundWrapper>
			<LottieWrapper>
				<Lottie animationData={data} loop={true} />
			</LottieWrapper>
			<HomeButton>go to home</HomeButton>
		</NotFoundWrapper>
	);
};

export default NotFound;
