import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { router } from "./routes";

import "./database";
// @types/express
const app = express();

app.use(express.json())
app.use(router);
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof Error) {
            return response.status(400).json({
                error: err.message,
            });
        }

        return response.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
);
// http://localhost:3000
app.listen(3000, () => console.log("Server is running")
);


/**
 * GET    => Buscar uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação especifica
 */
/**
 * Tipos de paramentos
 * Routes Params  =>http://localhost:3000/produtos/2131231233123
 * Query Params   =>http://localhost:3000/produtos?name=teclado&description=tecladobom
 *
 * Body Params    =>{
 * "name": "teclado",
 * "description": "teclado bom"
 * }
 *
 */

// app.get("/test/{id}", (request, response) =>{
//     // Request => Entrando
//     // Response => Saindo
//    return response.send("Ola NLW")
// });

// app.post("/test-post", (request, response) =>{
//     return response.send("Ola post")
// });

