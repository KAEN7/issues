import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { flexCenterDir, color } from "../components/utils/theme";

const Toast = ({ message }) => {
	console.log(message);

	return <div>{message}</div>;
};

export default Toast;
