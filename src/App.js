import { Container, Row, Col } from "react-bootstrap";
import { MTNavbar } from "./_components";


function App() {
	return (
		<div className="App">
			<MTNavbar></MTNavbar>
			<Container className="mt-4">
				<Row>
                    <Col>
                        {/* <MTTypography></MTTypography>
						<MTForms></MTForms> */}
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
