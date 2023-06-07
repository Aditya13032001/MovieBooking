const Form = () => {
    const booking=()=>{
       window.alert("Booking Done");
    }
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" />
            <div className="form">

                <div class="form-group">
                    <label for="exampleInputName1">Name address</label><br></br>
                    <input type="Name" class="form-control" id="exampleInputName1" aria-describedby="NameHelp" placeholder="Enter Name" />
                    <small id="NameHelp" class="form-text text-muted">We'll never share your Name with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputMobile1">Mobile</label>
                    <input type="Mobile" class="form-control" id="exampleInputMobile1" placeholder="Mobile" />
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="submit" onClick={booking}>Book Now</button>


            </div>
        </>
    )
}

export default Form
