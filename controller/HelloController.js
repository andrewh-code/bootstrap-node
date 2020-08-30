class HelloController {

    // constructor method
    // use the bind method to create a new function, allows to borrow a method from another object without making a copy
    // of that method (function borrowing)
    constructor(){
        this.helloGET = this.helloGET.bind(this);
        this.helloPOST = this.helloPOST.bind(this);
        this.helloPUT = this.helloPUT.bind(this);
        this.helloDELETE = this.helloDELETE.bind(this);

    };

    helloGET(request, response) {
        let output = {
            status: "success",
            result: "hello GET request"
        };

        return response.status(200).json(output);
    }

    helloPOST(request, response) {
        
        let output = {
            status: "success",
            result: "hello POST request"
        };

        return response.status(200).json(output);
    }

    helloPUT(request, response) {
        
        let output = {
            status: "success",
            result: "hello PUT request"
        };

        return response.status(200).json(output);
    }
    
    helloDELETE(request, response) {
        
        let output = {
            status: "success",
            result: "hello DELETE request"
        };

        return response.status(200).json(output);
    }
}


export default HelloController;