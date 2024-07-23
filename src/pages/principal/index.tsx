import React, { FC } from 'react';

interface Props {
	title: string;
}

const index: FC<Props> = ({ title }) => {
	return <div style={{ fontSize: '80px' }}>{title}</div>;
};

export const getStaticProps = async () => {
	return {
		props: {
			title: 'Test 2x',
		},
	};
};

export default index;
