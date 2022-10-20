import { Router } from 'express'
import {Request, Response} from 'express'

const router = Router()

//IMPORTANDO O CONTROLLER 
import * as pageController from '../controllers/pageController'
import * as searchController from '../controllers/searchController'

//criando a rota HOME
router.get("/",pageController.home)

router.get("/dogs",pageController.dogs)

router.get("/cats",pageController.cats)

router.get("/fishes",pageController.fishes)
//CRIAR AS ROTAS CACHORRO, GATO E PEIXE

//página de busca
router.get('/search',searchController.search)

//exportando o arquivo index.ts
export default router