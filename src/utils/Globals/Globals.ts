class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        tasks: "http://localhost:8080/api/v1/todolist/",
        // image: "http://localhost:8080/api/cats/images/"
    }
}

class ProductionGlobals extends Globals{
    public urls = {
        tasks: "http://localhost:8080/api/v1/todolist/",
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;