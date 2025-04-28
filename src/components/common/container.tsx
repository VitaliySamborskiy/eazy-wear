function Container({ children }: { children: React.ReactNode }) {
	return (
		<div style={{ maxWidth: "1440px", width: "100%", margin: "0 auto", padding: "0 20px," }}>
			{children}
		</div>
	);
}

export default Container;
