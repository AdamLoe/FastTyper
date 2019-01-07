import React from "react";
import PT from "prop-types";
import {connect} from "react-redux";

import { closeNotification } from "../../actions/popups";


let ErrorNotification = ({ notificationMessage, closeNotification }) => (
	<div className="ErrorNotification">
		{ notificationMessage }
		<button onClick={closeNotification}>
			x
		</button>
	</div>
);
ErrorNotification.propTypes = {
	notificationMessage: PT.string.isRequired,
	closeNotification: PT.func.isRequired
};

let NormalNotification = ({ notificationMessage, closeNotification }) => (
	<div className="NormalNotification">
		{ notificationMessage }
		<button onClick={closeNotification}>
			x
		</button>
	</div>
);
NormalNotification.propTypes = {
	notificationMessage: PT.string.isRequired,
	closeNotification: PT.func.isRequired
};


let LoadingModal = () => (
	<div className="LoadingModal">
		Loading
	</div>
);

let Popups = ({
				  showLoading, showNotification, notificationType,
				  notificationMessage, notificationKey, closeNotification
			  }) => (
	<div>
		{ showLoading &&
			<LoadingModal />
		}
		{ showNotification &&
			<>
				{ notificationType === "Error" &&
					<ErrorNotification
						notificationMessage={notificationMessage}
						closeNotification={() => closeNotification(notificationKey)}
					/>
				}
				{ notificationType === "Normal" &&
					<NormalNotification
						notificationMessage={notificationMessage}
						closeNotification={() => closeNotification(notificationKey)}
					/>
				}
			</>
		}
	</div>
);
Popups.propTypes = {
	showLoading: PT.bool.isRequired,
	showNotification: PT.bool.isRequired,
	notificationType: PT.string.isRequired,
	notificationMessage: PT.string.isRequired,
	notificationKey: PT.number.isRequired,
	closeNotification: PT.func.isRequired
};

let mapState = (state) => {
	let {
		showNotification, notificationMessage,
		notificationType, notificationKey,
		showLoading
	} = state.popups;

	return {
		showNotification,
		notificationMessage,
		notificationType,
		notificationKey,
		showLoading
	};
};

export default connect(mapState, { closeNotification })(Popups);