import React, {useState,useEffect} from 'react'

const Transcation = () => {
  const [products, setProducts] = useState([])


  // fetching products
  useEffect(() => {
    const fetchProducts = () => {
      const data = await axios.get(
				'https://roxiler-interviews.s3.amazonaws.com/product_transaction.json'
			);
			console.log(data);
			// setProducts(data);
    }
    fetchProducts()
  }, [])


  return (
		<div>
      <h1>DashBoard</h1>
			<select>
				<option>One</option>
				<option>Two</option>
				<option>One</option>
			</select>

			<div>
				<div>
					<img src="" alt="profile_img" />
					<input />
				</div>
				<div>
					<h2>Stats</h2>
				</div>
			</div>

			<div>
				<div>
					<h1>Bar Chart</h1>
				</div>

				<div>
					<h1>Bar Chart</h1>
				</div>
			</div>

      <div>
        <input type="text" placeholder='search products' />
        <h1>Table</h1>
      </div>
		</div>
	);
}

export default Transcation
