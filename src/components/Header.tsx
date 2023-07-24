import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
	const navigate = useNavigate();
	return (
		<Container>
			<button onClick={() => navigate('/')}>홈</button>
		</Container>
	);
};

export default Header;

const Container = styled.div`
	border: 1px solid;
	width: 100%;
	height: 3rem;
`;
