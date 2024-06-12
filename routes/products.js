const express = require ("express");
const router = express.Router();

const {getAllCanggu, 
    getAllNusaDua, 
    getAllKintamani,
    getAllSeminyak,
    getAllKuta,
    getAllUbud,
    getDetailbyId} = require("../controllers/articles")


router.route("/canggu").get(getAllCanggu);
router.route("/nusadua").get(getAllNusaDua);
router.route("/kintamani").get(getAllKintamani);
router.route("/seminyak").get(getAllSeminyak);
router.route("/kuta").get(getAllKuta);
router.route("/ubud").get(getAllUbud);

router.route("/detail/:id").get(getDetailbyId);

module.exports = router;