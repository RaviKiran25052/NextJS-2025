export const metadata = {
	title: "MyWebsite",
	description: "Welcome to MyWebsite!",
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body>
				{children}
			</body>
		</html>
	)
}