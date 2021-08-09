import React from "react";
import { Form, Container, Row, Col, FloatingLabel } from "react-bootstrap";

export const MTForms = () => {
	return (
		<>
            <Form className="mb-4">
                <h1>Forms</h1>
				<Container>
					<Row>
						<Col>
							<h3>Text Fields</h3>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
								<Form.Text>
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>

							<Form.Control size="lg" type="text" placeholder="Large text" />
							<br />
							<Form.Control type="text" placeholder="Normal text" />
							<br />
							<Form.Control size="sm" type="text" placeholder="Small text" />
							<br />
							<Form.Control
								type="text"
								placeholder="Readonly input here..."
								readOnly
							/>
							<br />
							<Form.Group
								as={Row}
								className="mb-3"
								controlId="formPlaintextEmail"
							>
								<Form.Label column sm="2">
									Email
								</Form.Label>
								<Col sm="10">
									<Form.Control
										plaintext
										readOnly
										defaultValue="email@example.com"
									/>
								</Col>
							</Form.Group>

							<h3>File Input</h3>
							<Form.Group controlId="formFile" className="mb-3">
								<Form.Label>Default file input example</Form.Label>
								<Form.Control type="file" />
							</Form.Group>
							<Form.Group controlId="formFileMultiple" className="mb-3">
								<Form.Label>Multiple files input example</Form.Label>
								<Form.Control type="file" multiple />
							</Form.Group>
							<Form.Group controlId="formFileDisabled" className="mb-3">
								<Form.Label>Disabled file input example</Form.Label>
								<Form.Control type="file" disabled />
							</Form.Group>
							<Form.Group controlId="formFileSm" className="mb-3">
								<Form.Label>Small file input example</Form.Label>
								<Form.Control type="file" size="sm" />
							</Form.Group>
							<Form.Group controlId="formFileLg" className="mb-3">
								<Form.Label>Large file input example</Form.Label>
								<Form.Control type="file" size="lg" />
							</Form.Group>

							<h3 className="mt-3">Floating Labels</h3>
							<FloatingLabel
								controlId="floatingInput"
								label="Email address"
								className="mb-3"
							>
								<Form.Control type="email" placeholder="name@example.com" />
							</FloatingLabel>
							<FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
								<Form.Control type="password" placeholder="Password" />
							</FloatingLabel>

							<FloatingLabel
								controlId="floatingSelect"
								label="Works with selects"
							>
								<Form.Select aria-label="Floating label select example">
									<option>Open this select menu</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</FloatingLabel>
						</Col>
						<Col>
							<h3>Checkboxs & Radios</h3>

							{["checkbox", "radio"].map((type) => (
								<div key={`default-${type}`} className="mb-3">
									<Form.Check
										type={type}
										id={`default-${type}`}
										label={`default ${type}`}
									/>

									<Form.Check
										disabled
										type={type}
										label={`disabled ${type}`}
										id={`disabled-default-${type}`}
									/>
								</div>
							))}
							{["checkbox", "radio"].map((type) => (
								<div key={`inline-${type}`} className="mb-3">
									<Form.Check
										inline
										label="1"
										name="group1"
										type={type}
										id={`inline-${type}-1`}
									/>
									<Form.Check
										inline
										label="2"
										name="group1"
										type={type}
										id={`inline-${type}-2`}
									/>
									<Form.Check
										inline
										disabled
										label="3 (disabled)"
										type={type}
										id={`inline-${type}-3`}
									/>
								</div>
							))}
							<Form.Check aria-label="option 1" />
							<Form.Check type="radio" aria-label="radio 1" />

							<h3 className="mt-3">Range</h3>
							<Form.Label>Range</Form.Label>
							<Form.Range />

							<h3 className="mt-3">Select</h3>
							<Form.Select aria-label="Default select example">
								<option>Open this select menu</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</Form.Select>
						</Col>
					</Row>
				</Container>
			</Form>
		</>
	);
};
