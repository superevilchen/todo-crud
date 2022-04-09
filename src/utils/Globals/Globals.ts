class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        tasks: "http://localhost:8080/api/v1/todolist/",
        users: "http://localhost:8080/api/v1/todolist/user/",
        admin: "http://localhost:8080/api/v1/todolist/admin/"
    }
}

class ProductionGlobals extends Globals{
    public urls = {
        tasks: "http://localhost:8080/api/v1/todolist/",
        users: "http://localhost:8080/api/v1/todolist/user/",
        admin: "http://localhost:8080/api/v1/todolist/admin/"

    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;