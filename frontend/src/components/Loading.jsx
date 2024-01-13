import  Backdrop  from './Backdrop';

const Loading = () => {
    return (
        <Backdrop>
            <h1 className="display-3 position-absolute top-0 mt-5">Connecting to Server...</h1>
        <div className="loading">
            <div className="loading-spinner">
            <svg fill="#000000" className ="dumbell-svg" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 301.015 301.015">
<g>
	<g>
		<path d="M296.075,128.44H279.11v-22.88c0-2.665-2.21-4.875-4.875-4.875H246.74V77.74c0-2.665-2.21-4.875-4.875-4.875h-32.37
			c-2.665,0-4.875,2.21-4.875,4.875v50.7H95.485v-50.7c0-2.665-2.21-4.875-4.875-4.875H58.24c-2.665,0-4.875,2.21-4.875,4.875v22.88
			H25.87c-2.665,0-4.875,2.21-4.875,4.875v22.88H4.875c-2.665,0-4.875,2.21-4.875,4.875v33.67c0,2.665,2.21,4.875,4.875,4.875H21.06
			v23.725c0,2.665,2.21,4.875,4.875,4.875H53.43v22.88c0,2.665,2.21,4.875,4.875,4.875h32.37c2.665,0,4.875-2.21,4.875-4.875V171.73
			h109.135v51.545c0,2.665,2.21,4.875,4.875,4.875h32.37c2.665,0,4.875-2.21,4.875-4.875v-22.88H274.3
			c2.665,0,4.875-2.21,4.875-4.875v-23.725h16.965c2.665,0,4.875-2.21,4.875-4.875v-33.67
			C300.95,130.585,298.74,128.44,296.075,128.44z M21.06,162.11H9.75v-0.065V138.19h11.31V162.11z M53.43,190.71H30.81v-80.275
			h22.62V190.71z M85.735,218.465h-22.62V82.615h22.62V218.465z M204.62,162.11H95.485v-0.065V138.19H204.62V162.11z
			 M236.99,218.465h-22.62V82.615h22.62V218.465z M269.36,190.71h-22.62v-80.275h22.62V190.71z M291.2,162.045h-12.09V138.19h12.09
			V162.045z"/>
	</g>
</g>
</svg>
            </div>
        </div>
        </Backdrop>
    )
}
export default Loading