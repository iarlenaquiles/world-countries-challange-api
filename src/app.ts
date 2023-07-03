import express from "express";
import { router } from "./routes";
import cors from 'cors';
import corsConfig from './config/cors'

export class App{
  public server: express.Application = express();

  constructor(){
    this.server;
    this.middleware();
    this.router();
  }

  private middleware(){
    this.server.use(cors(corsConfig));
    this.server.use(express.json());
  }

  private router(){
    this.server.use(router);
  }
}