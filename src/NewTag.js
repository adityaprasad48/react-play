import React, { useEffect, useRef, useState } from 'react';

// const style = `ul {
//               list-style: none; /* Remove default bullets */
//               }

//               ul li::before {
//                 content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
//                 color: red; /* Change the color */
//                 font-weight: bold; /* If you want it to be bold */
//                 display: inline-block; /* Needed to add space between the bullet and the text */
//                 width: 1em; /* Also needed for space (tweak if needed) */
//                 margin-left: -1em; /* Also needed for space (tweak if needed) */
//               }`;

const NewTag = () => {
	const [currentLocation, setCurrentLocation] = useState();
	const aRef = useRef('');
	const bRef = useRef('');
	const xRef = useRef('');

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(pos) => {
				console.log({ pos });
				setCurrentLocation(pos);
			},
			(err) => {
				setCurrentLocation(err);
			},
			{
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 0,
			}
		);

		aRef.current.value = '50';
		bRef.current.value = '25';
	}, []);

	console.log({ currentLocation });

	return (
		<div>
			<div className="question-root">
				<h1 className="question">Image Map</h1>

				<div className="answer-root">
					<div className="image-map-1">
						<img
							src="https://www.w3schools.com/html/workplace.jpg"
							alt="Workplace"
							useMap="#workmap"
							width="400"
							height="379"
						/>
						<map name="workmap">
							<area
								shape="rect"
								coords="34,44,270,350"
								alt="Computer"
								href="computer.htm"
							/>
							<area
								shape="circle"
								coords="337, 300, 44"
								alt="Coffee"
								// href="coffee.htm"
								onClick={() => window.alert('hi')}
							/>
						</map>
					</div>
					<div className="image-map-2">
						<img
							src="https://www.w3schools.com/html/frenchfood.jpg"
							alt="French Food"
							useMap="#foodmap"
							width="450"
							height="675"
						/>
						<map name="foodmap">
							<area
								shape="poly"
								coords="140,121,181,116,204,160,204,222,191,270,140,329,85,355,58,352,37,322,40,259,103,161,128,147"
								alt="Croissant"
								onClick={() => window.alert('hi')}
								// href="croissant.htm"
							/>
						</map>
					</div>
				</div>
			</div>
			<div className="question-root">
				<h1 className="question">List Element Straight</h1>
				<div className="answer-root">
					<ul
						style={{
							listStyleType: 'none',
							paddingLeft: 0,
						}}
					>
						<li
							style={{
								display: 'inline-block',
							}}
						>
							Item 1
						</li>
						<li
							style={{
								display: 'inline-block',
							}}
						>
							Item 2
						</li>
					</ul>
				</div>
			</div>

			<div className="question-root">
				<h1 className="question">Change Color of bullet</h1>
				<div className="answer-root">
					<p>User Before element in li tag</p>
				</div>
			</div>

			<div className="question-root">
				<h2 className="question">background Image of webpage</h2>
				{/* <body background="https://www.w3schools.com/html/workplace.jpg"></body> */}
			</div>

			<div className="question-root">
				<h1 className="question">Empty Elements</h1>
				<div className="answer-root">
					<p>br and hr elements</p>
				</div>
			</div>

			<div className="question-root">
				<h1 className="question">Meter and Progress Tag</h1>
				<div className="answer-root">
					<p>
						The progress element represents the completion progress of a task.
						The meter element represents a scalar measurement within a known
						range, or a fractional value; for example disk usage, the relevance
						of a query result, or the fraction of a voting population to have
						selected a particular candidate
					</p>
					<meter max="10" value="1">
						Question 1 of 10
					</meter>
					<progress max="10" value="1">
						Question 1 of 10
					</progress>
				</div>
			</div>

			<div className="question-root">
				<h1 className="question">Figure Tag</h1>
				<div className="answer-root">
					<p>
						Use a figure element to mark up a photo in a document, and a
						figcaption element to define a caption for the photo:
					</p>
					<figure>
						<img
							src="https://www.w3schools.com/html/pic_trulli.jpg"
							alt="Trulli"
							style={{
								width: '100%',
							}}
						/>
						<figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
					</figure>
				</div>
			</div>

			<div className="question-root">
				<h1 className="question">Iframe In React Js </h1>
				<div className="answer-root">
					<p>used for showing webpage html of another site</p>
					<div
						dangerouslySetInnerHTML={{
							__html:
								"<iframe src='https://www.youtube.com/embed/cWDJoK8zw58' />",
						}}
					/>
				</div>
			</div>

			<div className="question-root">
				<h1 className="question">Details Tag</h1>
				<div className="answer-root">
					<details>
						<summary>Epcot Center</summary>
						<p>
							Epcot is a theme park at Walt Disney World Resort featuring
							exciting attractions, international pavilions, award-winning
							fireworks and seasonal special events.
						</p>
					</details>
				</div>
			</div>

			<div className="question-root">
				<h1 className="question">New Element Type In Html 5</h1>
				<div className="answer-root">
					<input type="color" placeholder="choose color" />
					<input type="date" placeholder="choose date" />
					<input type="datetime-local" placeholder="choose datetime-local" />
					<input type="time" placeholder="choose time" />
					<input type="week" placeholder="Enter week" />
					<input type="month" placeholder="Enter month" />
					<input type="url" placeholder="Enter url" />
					<input type="range" placeholder="Enter range" />
					<input type="telephone" placeholder="Enter telephone" />
					<input type="number" placeholder="Enter number" />
					<input type="search" placeholder="Enter serarch" />
				</div>
			</div>

			<div className="question-root">
				<h1 className="question">
					Get Current Location of user using getCurrentPosition() method
				</h1>
				<div className="answer-root">
					<div>{JSON.stringify({ currentLocation }, null, 2)}</div>
				</div>
			</div>

			<div className="question-root">
				<h1 className="question">MicroData in Html 5</h1>
				<div className="answer-root">
					<div itemScope itemType="http://schema.org/SoftwareApplication">
						<span itemProp="name">Angry Birds</span> - REQUIRES{' '}
						<span itemProp="operatingSystem">ANDROID</span>
						<br />
						<link
							itemProp="applicationCategory"
							href="http://schema.org/GameApplication"
						/>
						<div
							itemProp="aggregateRating"
							itemScope
							itemType="http://schema.org/AggregateRating"
						>
							RATING:
							<span itemProp="ratingValue">4.6</span> (
							<span itemProp="ratingCount">8864</span> ratings )
						</div>
						<div itemProp="offers" itemScope itemType="http://schema.org/Offer">
							Price: $<span itemProp="price">1.00</span>
							<meta itemProp="priceCurrency" content="USD" />
						</div>
					</div>
				</div>
			</div>

			<div className="question-root">
				<h1 className="question">Output Element in Html</h1>
				<div className="answer-root">
					<form
						onInput={() => {
							xRef.current.value =
								parseInt(aRef.current.value) + parseInt(bRef.current.value);
						}}
					>
						<input ref={aRef} type="range" id="a" />
						+ <input ref={bRef} type="number" id="b" />
						<output ref={xRef} name="x" for="a b"></output>
					</form>
				</div>
			</div>

			<div className="question-root">
				<h1 className="question">Fieldset Tag</h1>
				<div className="answer-root">
					<form action="/action_page.php">
						<fieldset>
							<legend>Personalia:</legend>
							<label for="fname">First name:</label>
							<input type="text" id="fname" name="fname" />
							<br />
							<br />
							<label for="lname">Last name:</label>
							<input type="text" id="lname" name="lname" />
							<br />
							<br />
							<label for="email">Email:</label>
							<input type="email" id="email" name="email" />
							<br />
							<br />
							<label for="birthday">Birthday:</label>
							<input type="date" id="birthday" name="birthday" />
							<br />
							<br />
							<input type="submit" value="Submit" />
						</fieldset>
					</form>
				</div>
			</div>

			<div className="question-root">
				<h1 className="question">Highlight Text in Html use mark element </h1>
				<div className="answer-root">
					<p>
						<mark>Hi Aditya</mark> What are you doing.
					</p>
				</div>
			</div>

			<div className="question-root">
				<h1 className="question">Bidrection of html tag using bdo element</h1>
				<div className="answer-root">
					<p>
						<bdo dir="rtl">Oh ho I missed something.</bdo>
					</p>
				</div>
			</div>

			<div className="question-root">
				<h1 className="question">Keygen Tag</h1>
				<div className="answer-root">
					<p>
						The <keygen /> tag in HTML is used to specify a key-pair generator
						field in a form. The purpose of <keygen /> element is to provide a
						secure way to authenticate users. When a from is submitted then two
						keys are generated, private key and public key. The private key
						stored locally, and the public key is sent to the server. The public
						key is used to generate client certificate to authenticate user for
						future
					</p>
					<form>
						Username: <input type="text" name="uname" />
						<br />
						<br />
						Encryption: <keygen name="secure" />
						<input type="submit" />
					</form>
				</div>
			</div>

			<div className="question-root">
				<h1 className="question">Types of List in Html</h1>
				<div className="answer-root">
					<h2>An unordered HTML list</h2>

					<ul>
						<li>Coffee</li>
						<li>Tea</li>
						<li>Milk</li>
					</ul>

					<h2>An ordered HTML list</h2>

					<ol>
						<li>Coffee</li>
						<li>Tea</li>
						<li>Milk</li>
					</ol>

					<dl>
						<dt>Coffee</dt>
						<dd>- black hot drink</dd>
						<dt>Milk</dt>
						<dd>- white cold drink</dd>
					</dl>
				</div>
			</div>

			<div className="question-root">
				<h1 className="question">Markee in Html</h1>
				<div className="answer-root">
					 {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
					<marquee style={{ color: 'red', fontSize: '3em' }}>
						Practice Practice and Practice
					</marquee>
				</div>
			</div>
		</div>
	);
};

export default NewTag;
